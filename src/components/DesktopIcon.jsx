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
        flex flex-col items-center p-0 rounded cursor-pointer
        ${isSelected ? 'bg-blue-500 bg-opacity-30' : ''}
        animate-fadeInUp
      `}
      style={style}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="w-12 h-12 mb-1 filter drop-shadow-sm flex items-center justify-center">
        {typeof icon.icon === 'string' ? (
          <img src={icon.icon} alt={icon.name} className="w-full h-full object-contain" />
        ) : (
          <div className="text-3xl">{icon.icon}</div>
        )}
      </div>
      <span className="text-white text-xs text-center drop-shadow-sm max-w-20 leading-tight tracking-wider">
        {icon.name}
      </span>
    </div>
  )
}

export default DesktopIcon