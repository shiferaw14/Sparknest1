# SparkNest Brandings Website

A premium strategic branding agency website built with React, TypeScript, and Express.

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

### Backend
- Node.js
- Express.js
- Google Sheets API

## Project Structure

```
sparknest/
├── src/                    # Frontend React application
│   ├── components/         # React components
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── server/                # Backend Express server
│   ├── server.js          # Express server
│   ├── package.json       # Backend dependencies
│   └── .env.example       # Environment variables template
├── public/                # Static assets
└── package.json           # Frontend dependencies
```

## Installation

### Frontend Setup

1. Install frontend dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install backend dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure your Google Sheets API credentials (see below)

5. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## Google Sheets Integration Setup

### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

### Step 2: Create Service Account

1. Navigate to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: SparkNest Integration
   - Service account ID: sparknest-integration
   - Description: Service account for SparkNest website inquiries
4. Click "Create and Continue"
5. Skip granting roles (optional)
6. Click "Done"

### Step 3: Generate Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select "JSON" as the key type
5. Click "Create"
6. Download the JSON file (keep it secure!)

### Step 4: Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet named "SparkNest Client Inquiries"
3. Create a worksheet named "Inquiries"
4. Add the following headers in the first row (A1 to I1):
   - A: Inquiry ID
   - B: Submission Date
   - C: Full Name
   - D: Email Address
   - E: Company Name
   - F: Service Required
   - G: Project Budget
   - H: Project Description
   - I: Inquiry Status

### Step 5: Share Spreadsheet with Service Account

1. In your Google Sheet, click "Share"
2. Add the service account email (from the JSON file you downloaded)
3. Grant "Editor" access
4. Click "Send"

### Step 6: Configure Environment Variables

1. Open the downloaded JSON file and copy the following values:
   - `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → `GOOGLE_PRIVATE_KEY` (include the entire key with newlines)
   - Get the spreadsheet ID from the URL (between `/d/` and `/edit`) → `GOOGLE_SHEETS_SPREADSHEET_ID`

2. Update your `server/.env` file:
```env
PORT=3001
GOOGLE_SHEETS_SPREADSHEET_ID=1ABC123xyz456
GOOGLE_SERVICE_ACCOUNT_EMAIL=sparknest-integration@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
```

**Important:** Make sure to preserve the `\n` characters in the private key. The entire key should be in quotes.

### Step 7: Test the Integration

1. Start the backend server:
```bash
cd server
npm start
```

2. Start the frontend:
```bash
npm run dev
```

3. Fill out the contact form on the website
4. Check your Google Sheet - a new row should appear with the inquiry data

## Security Notes

- Never commit `.env` files to version control
- Add `.env` to your `.gitignore` file
- Keep service account credentials secure
- Only grant the service account access to the specific spreadsheet
- Use HTTPS in production
- Consider implementing rate limiting for the API endpoint

## Environment Variables

### Frontend
No required environment variables for the frontend.

### Backend
- `PORT`: Server port (default: 3001)
- `GOOGLE_SHEETS_SPREADSHEET_ID`: Google Sheets spreadsheet ID
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: Service account email
- `GOOGLE_PRIVATE_KEY`: Service account private key

## Brand Colors

- Primary Background: `#07501B` (Deep Green)
- Highlight/Accent: `#C9921A` (Gold)
- Main Text: `#CFFFDC` (Mint)

## Typography

- Font Family: Inclusive Sans
- Loaded from Google Fonts

## Deployment

### Frontend Deployment (Vercel, Netlify, etc.)

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting platform

### Backend Deployment

1. Deploy the Express server to a hosting platform (Render, Railway, Heroku, etc.)
2. Set environment variables in your hosting platform
3. Update the frontend API URL in `Contact.tsx` to point to your production backend

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth animations with Framer Motion
- Sticky navigation with mobile menu
- Complete project inquiry form with validation
- Google Sheets integration for inquiry storage
- SEO optimized with meta tags
- Accessible navigation and forms

## License

© 2025 SparkNest Brandings. All rights reserved.
