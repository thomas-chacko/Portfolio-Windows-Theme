import { useState, useEffect } from 'react'

const DesktopIcon = ({ icon, onDoubleClick, style }) => {
  const [isSelected, setIsSelected] = useState(false)
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)

  useEffect(() => {
    // Check if device is mobile or tablet
    const checkDevice = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth < 1024 // lg breakpoint in Tailwind
      setIsMobileOrTablet(isTouchDevice || isSmallScreen)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  const handleClick = () => {
    setIsSelected(true)
    setTimeout(() => setIsSelected(false), 200)

    // On mobile/tablet, single click opens the app
    if (isMobileOrTablet) {
      onDoubleClick()
    }
  }

  const handleDoubleClick = () => {
    // On desktop, double click opens the app
    if (!isMobileOrTablet) {
      onDoubleClick()
    }
  }

  return (
    <div
      className={`
        flex flex-col items-center justify-start py-2 rounded-sm cursor-pointer w-full h-full transition-colors group
        ${isSelected ? 'bg-blue-500 bg-opacity-40 border border-blue-400/30' : 'hover:bg-white/10 border border-transparent hover:border-white/20'}
        animate-fadeInUp
      `}
      style={style}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="w-10 h-10 mb-1.5 filter drop-shadow-md flex items-center justify-center transform transition-transform group-active:scale-95">
        {typeof icon.icon === 'string' ? (
          <img src={icon.icon} alt={icon.name} className="w-full h-full object-contain" loading='lazy' />
        ) : (
          <div className="text-3xl">{icon.icon}</div>
        )}
      </div>
      <span className="text-white text-xs text-center font-medium drop-shadow-md line-clamp-2 px-1 break-words leading-tight" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
        {icon.name}
      </span>
    </div>
  )
}

export default DesktopIcon