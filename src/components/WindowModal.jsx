import { useState, useRef, useEffect } from 'react'

const WindowModal = ({ window: windowData, isActive, onClose, onMinimize, onMaximize, onFocus }) => {
  // Calculate initial center position for desktop
  const getInitialPosition = () => {
    const windowWidth = 600
    const windowHeight = 500
    const centerX = (window.innerWidth - windowWidth) / 2
    const centerY = (window.innerHeight - windowHeight) / 2 - 50 // Account for taskbar
    return { x: Math.max(0, centerX), y: Math.max(0, centerY) }
  }

  const [position, setPosition] = useState(getInitialPosition())
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isMaximized, setIsMaximized] = useState(false)
  const [previousPosition, setPreviousPosition] = useState(getInitialPosition())
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false)
  const windowRef = useRef(null)

  useEffect(() => {
    // Check if device is mobile or tablet
    const checkDevice = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth < 1024 // lg breakpoint in Tailwind
      setIsMobileOrTablet(isTouchDevice || isSmallScreen)

      // Auto-maximize on mobile for better UX
      if (isTouchDevice || isSmallScreen) {
        setIsMaximized(true)
      }
    }

    // Ensure window stays centered on window resize
    const handleResize = () => {
      checkDevice()
      if (!isMaximized && !isDragging && !isMobileOrTablet) {
        const newPosition = getInitialPosition()
        setPosition(newPosition)
        setPreviousPosition(newPosition)
      }
    }

    checkDevice()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMaximized, isDragging, isMobileOrTablet])

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls')) return
    if (isMaximized || isMobileOrTablet) return // Don't allow dragging when maximized or on mobile

    setIsDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
    onFocus()
  }

  const handleMaximize = () => {
    if (isMaximized) {
      // Restore to previous size and position
      setIsMaximized(false)
      setPosition(previousPosition)
    } else {
      // Save current position and maximize
      setPreviousPosition(position)
      setIsMaximized(true)
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleDoubleClickTitleBar = (e) => {
    if (e.target.closest('.window-controls')) return
    // Only allow double-click maximize on desktop devices
    if (!isMobileOrTablet) {
      handleMaximize()
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return

    setPosition({
      x: e.clientX - dragOffset.x,
      y: Math.max(0, e.clientY - dragOffset.y)
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging, dragOffset])

  if (windowData.isMinimized) return null

  // Responsive window styling
  const getWindowClasses = () => {
    if (isMobileOrTablet) {
      return `
        fixed inset-0 bg-white
        transition-all duration-200 ease-out
        ${isActive ? 'z-50' : 'z-40'}
        flex flex-col
      `
    }

    return `
      fixed bg-white shadow-2xl border border-gray-300
      transition-all duration-200 ease-out
      ${isActive ? 'z-50' : 'z-40'}
      ${isDragging ? 'cursor-grabbing' : 'cursor-default'}
      ${isMaximized ? 'rounded-none' : 'rounded-lg'}
      animate-slideInUp
    `
  }

  const getWindowStyle = () => {
    if (isMobileOrTablet) {
      return {
        left: '0px',
        top: '0px',
        width: '100vw',
        height: '100vh',
      }
    }

    if (isMaximized) {
      return {
        left: '0px',
        top: '0px',
        width: '100vw',
        height: 'calc(100vh - 48px)', // Account for taskbar height
        borderRadius: '0px'
      }
    }

    return {
      left: `${position.x}px`,
      top: `${position.y}px`,
      width: '600px',
      height: '500px',
      minHeight: '300px'
    }
  }

  return (
    <div
      ref={windowRef}
      className={getWindowClasses()}
      style={getWindowStyle()}
      onClick={onFocus}
    >
      {/* Window Title Bar */}
      <div
        className={`
          flex items-center justify-between select-none flex-shrink-0
          ${isMobileOrTablet ? 'px-4 py-3 h-14' : 'px-4 py-2 cursor-grab'}
          ${isMaximized && !isMobileOrTablet ? 'rounded-none' : !isMobileOrTablet ? 'rounded-t-lg' : ''}
          ${isActive ? 'bg-blue-600' : 'bg-gray-400'}
          transition-colors duration-200
        `}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClickTitleBar}
      >
        <div className="flex items-center">
          <span className={`${isMobileOrTablet ? 'text-base' : 'text-sm'} font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
            {windowData.title}
          </span>
        </div>

        <div className="flex items-center window-controls">
          {/* Minimize Button - Hide on mobile */}
          {!isMobileOrTablet && (
            <button
              onClick={onMinimize}
              className="w-11 h-7 hover:bg-black hover:bg-opacity-20 flex items-center justify-center transition-colors"
              title="Minimize"
            >
              <div className={`w-3 h-0.5 ${isActive ? 'bg-white' : 'bg-gray-700'}`}></div>
            </button>
          )}

          {/* Maximize/Restore Button - Hide on mobile */}
          {!isMobileOrTablet && (
            <button
              onClick={handleMaximize}
              className="w-11 h-7 hover:bg-black hover:bg-opacity-20 flex items-center justify-center transition-colors"
              title={isMaximized ? "Restore Down" : "Maximize"}
            >
              {isMaximized ? (
                // Restore icon (two overlapping squares)
                <div className="relative">
                  <div className={`w-2.5 h-2.5 border ${isActive ? 'border-white' : 'border-gray-700'} absolute -top-0.5 -left-0.5`}></div>
                  <div className={`w-2.5 h-2.5 border ${isActive ? 'border-white' : 'border-gray-700'} bg-transparent`}></div>
                </div>
              ) : (
                // Maximize icon (single square)
                <div className={`w-3 h-3 border ${isActive ? 'border-white' : 'border-gray-700'}`}></div>
              )}
            </button>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className={`${isMobileOrTablet ? 'w-12 h-10' : 'w-11 h-7'} hover:bg-red-500 flex items-center justify-center transition-colors group`}
            title="Close"
          >
            <div className={`relative ${isMobileOrTablet ? 'w-4 h-4' : 'w-3 h-3'}`}>
              <div className={`absolute ${isMobileOrTablet ? 'w-4 h-0.5' : 'w-3 h-0.5'} ${isActive ? 'bg-white' : 'bg-gray-700'} group-hover:bg-white transform rotate-45 ${isMobileOrTablet ? 'top-2' : 'top-1.5'}`}></div>
              <div className={`absolute ${isMobileOrTablet ? 'w-4 h-0.5' : 'w-3 h-0.5'} ${isActive ? 'bg-white' : 'bg-gray-700'} group-hover:bg-white transform -rotate-45 ${isMobileOrTablet ? 'top-2' : 'top-1.5'}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div
        className={`
          overflow-y-auto bg-white flex-1
          ${isMobileOrTablet ? 'px-4 py-4' : ''}
        `}
        style={{
          height: isMobileOrTablet
            ? 'calc(100vh - 56px)' // Full height minus title bar on mobile
            : isMaximized
              ? 'calc(100vh - 96px)'
              : '450px',
          maxHeight: isMobileOrTablet
            ? 'calc(100vh - 56px)'
            : isMaximized
              ? 'calc(100vh - 96px)'
              : '450px'
        }}
      >
        {/* Mobile-optimized content wrapper */}
        <div className={isMobileOrTablet ? 'space-y-4' : ''}>
          {windowData.content}
        </div>
      </div>
    </div>
  )
}

export default WindowModal