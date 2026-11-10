import express from 'express'
import cors from 'cors'
import { google } from 'googleapis'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const generateInquiryId = () => {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2, 8)
  return `SN-${timestamp}-${random}`.toUpperCase()
}

app.post('/api/inquiries', async (req, res) => {
  try {
    const { fullName, email, companyName, serviceRequired, projectBudget, projectDescription } = req.body

    if (!fullName || !email || !companyName || !serviceRequired || !projectDescription) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' })
    }

    if (!process.env.GOOGLE_SHEETS_SPREADSHEET_ID || !process.env.GOOGLE_PRIVATE_KEY || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
      console.error('Missing Google Sheets configuration')
      return res.status(500).json({ error: 'Server configuration error' })
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const inquiryId = generateInquiryId()
    const submissionDate = new Date().toISOString().split('T')[0]

    const values = [
      [
        inquiryId,
        submissionDate,
        fullName,
        email,
        companyName,
        serviceRequired,
        projectBudget,
        projectDescription,
        'NEW',
      ],
    ]

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: 'Inquiries!A:I',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    })

    if (response.status === 200) {
      res.status(200).json({ 
        success: true, 
        inquiryId,
        message: 'Inquiry submitted successfully' 
      })
    } else {
      throw new Error('Failed to append to Google Sheets')
    }
  } catch (error) {
    console.error('Error submitting inquiry:', error)
    res.status(500).json({ error: 'Failed to submit inquiry. Please try again.' })
  }
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SparkNest server is running' })
})

app.listen(PORT, () => {
  console.log(`SparkNest server running on port ${PORT}`)
})
