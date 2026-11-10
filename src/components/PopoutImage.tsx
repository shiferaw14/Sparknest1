import { useState } from 'react'

interface PopoutImageProps {
  src: string
  alt: string
  className?: string
  heightClass?: string
  badge?: string
}

export function PopoutImage({
  src,
  alt,
  className = '',
  heightClass = 'h-48',
  badge,
}: PopoutImageProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`relative w-full ${className} select-none`}>
      <div className={`relative w-full ${heightClass} overflow-hidden`}>
        {!imageError ? (
          <img
            src={src}
            alt={alt}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#023020]">
            <span className="text-xs tracking-wider text-sparknest-mint font-semibold uppercase opacity-80">
              {alt}
            </span>
          </div>
        )}

        {/* Golden Light Sweep Glare Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

        {badge && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#023020]/85 text-sparknest-mint">
            {badge}
          </div>
        )}
      </div>
    </div>
  )
}
