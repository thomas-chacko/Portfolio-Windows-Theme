import { useState, useRef, useEffect, useCallback } from 'react'

const WindowModal = ({ window: windowData, isActive, onClose, onMinimize, onMaximize, onFocus }) => {
  // Calculate initial center position for desktop
  const getInitialPosition = () => {
    // Calculate actual pixel values for centering with increased height
    const windowWidth = window.innerWidth * 0.8  // 80% of screen width
    const windowHeight = (window.innerHeight * 0.7) + 100 // 70% of screen height + 100px
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
  const [hasEverBeenDragged, setHasEverBeenDragged] = useState(false)
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
    setHasEverBeenDragged(true)
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

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return

    // Use requestAnimationFrame for smooth animation
    requestAnimationFrame(() => {
      // Calculate modal dimensions
      const modalWidth = window.innerWidth * 0.8  // 80vw
      const modalHeight = (window.innerHeight * 0.7) + 100  // 70vh + 100px

      // Calculate new position
      const newX = e.clientX - dragOffset.x
      const newY = e.clientY - dragOffset.y

      // Apply boundary constraints
      const constrainedX = Math.max(0, Math.min(newX, window.innerWidth - modalWidth))
      const constrainedY = Math.max(0, Math.min(newY, window.innerHeight - modalHeight - 48)) // 48px for taskbar

      setPosition({
        x: constrainedX,
        y: constrainedY
      })
    })
  }, [isDragging, dragOffset])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (isDragging) {
      // Use passive listeners for better performance
      document.addEventListener('mousemove', handleMouseMove, { passive: true })
      document.addEventListener('mouseup', handleMouseUp, { passive: true })

      // Disable text selection during drag
      document.body.style.userSelect = 'none'
      document.body.style.pointerEvents = 'none'

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.body.style.userSelect = ''
        document.body.style.pointerEvents = ''
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])



  if (windowData.isMinimized) return null

  // Responsive window styling
  const getWindowClasses = () => {
    if (isMobileOrTablet) {
      return `
        fixed inset-0 bg-white
        ${isActive ? 'z-50' : 'z-40'}
        flex flex-col
      `
    }

    return `
      fixed bg-gray-800 bg-opacity-90 shadow-2xl border border-gray-600
      ${isActive ? 'z-50' : 'z-40'}
      ${isDragging ? 'cursor-grabbing' : 'cursor-default'}
      ${isMaximized ? 'rounded-none' : 'rounded-lg'}
      ${!hasEverBeenDragged ? 'animate-slideInUp' : ''}
    `
  }

  const getWindowStyle = () => {
    if (isMobileOrTablet) {
      return {
        left: '0px',
        top: '0px',
        width: '100vw',
        height: 'calc(100vh - 48px)', // Account for taskbar height (48px)
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
      left: `${position.x}px`,  // Use pixels for proper dragging
      top: `${position.y}px`,   // Use pixels for proper dragging
      width: '80vw',   // 80% of viewport width
      height: 'calc(70vh + 100px)',  // 70% of viewport height + 100px
      minHeight: '400px'
    }
  }

  return (
    <div
      ref={windowRef}
      className={getWindowClasses()}
      style={{
        ...getWindowStyle(),
        // Hardware acceleration for smooth dragging
        transform: 'translateZ(0)',
        willChange: isDragging ? 'transform' : 'auto'
      }}
      onClick={onFocus}
    >
      {/* Window Title Bar */}
      <div
        className={`
          flex items-center justify-between select-none flex-shrink-0
          ${isMobileOrTablet ? 'pl-4 pr-0 h-14' : 'pl-4 pr-0 h-10'}
          ${isDragging ? 'cursor-grabbing' : !isMobileOrTablet ? 'cursor-grab' : ''}
          ${isMaximized && !isMobileOrTablet ? 'rounded-none' : !isMobileOrTablet ? 'rounded-t-lg' : ''}
          ${isActive ? 'bg-gray-700' : 'bg-gray-600'}
          ${!isDragging ? 'transition-colors duration-200' : ''}
        `}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClickTitleBar}
        style={{
          // Prevent text selection and improve drag performance
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none'
        }}
      >
        <div className="flex items-center">
          <span className={`${isMobileOrTablet ? 'text-base' : 'text-sm'} font-medium ${isActive ? 'text-white' : 'text-gray-200'}`}>
            {windowData.title}
          </span>
        </div>

        <div className="flex items-center window-controls">
          {/* Minimize Button - Hide on mobile */}
          {!isMobileOrTablet && (
            <button
              onClick={onMinimize}
              className="w-11 h-10 cursor-pointer hover:bg-gray-600 hover:bg-opacity-80 flex items-center justify-center transition-colors"
              title="Minimize"
            >
              <div className={`w-3 h-0.5 ${isActive ? 'bg-white' : 'bg-gray-200'}`}></div>
            </button>
          )}

          {/* Maximize/Restore Button - Hide on mobile */}
          {!isMobileOrTablet && (
            <button
              onClick={handleMaximize}
              className="w-11 h-10 cursor-pointer hover:bg-gray-600 hover:bg-opacity-80 flex items-center justify-center transition-colors"
              title={isMaximized ? "Restore Down" : "Maximize"}
            >
              {isMaximized ? (
                // Restore icon (two overlapping squares)
                <div className="relative">
                  <div className={`w-2.5 h-2.5 border ${isActive ? 'border-white' : 'border-gray-200'} absolute -top-0.5 -left-0.5`}></div>
                  <div className={`w-2.5 h-2.5 border ${isActive ? 'border-white' : 'border-gray-200'} bg-transparent`}></div>
                </div>
              ) : (
                // Maximize icon (single square)
                <div className={`w-3 h-3 border ${isActive ? 'border-white' : 'border-gray-200'}`}></div>
              )}
            </button>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className={`${isMobileOrTablet ? 'w-12 h-14' : 'w-11 h-10'} cursor-pointer hover:bg-red-500 flex items-center justify-center transition-colors group ${isMaximized || isMobileOrTablet ? '' : 'rounded-tr-lg'}`}
            title="Close"
          >
            <div className={`relative ${isMobileOrTablet ? 'w-4 h-4' : 'w-3 h-3'}`}>
              <div className={`absolute ${isMobileOrTablet ? 'w-4 h-0.5' : 'w-3 h-0.5'} ${isActive ? 'bg-white' : 'bg-gray-200'} group-hover:bg-white transform rotate-45 ${isMobileOrTablet ? 'top-2' : 'top-1.5'}`}></div>
              <div className={`absolute ${isMobileOrTablet ? 'w-4 h-0.5' : 'w-3 h-0.5'} ${isActive ? 'bg-white' : 'bg-gray-200'} group-hover:bg-white transform -rotate-45 ${isMobileOrTablet ? 'top-2' : 'top-1.5'}`}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div
        className={`
          overflow-y-auto flex-1 text-white modal-scrollbar
          ${windowData.type === 'terminal' ? 'bg-black' : 'bg-gray-800 bg-opacity-90'}
          ${isMobileOrTablet ? 'px-4 py-4' : ''}
        `}
        style={{
          height: isMobileOrTablet
            ? 'calc(100vh - 56px)' // Full height minus title bar on mobile
            : isMaximized
              ? 'calc(100vh - 96px)'
              : 'calc(70vh + 100px - 50px)', // Content area: 70% viewport height + 100px minus title bar
          maxHeight: isMobileOrTablet
            ? 'calc(100vh - 56px)'
            : isMaximized
              ? 'calc(100vh - 96px)'
              : 'calc(70vh + 100px - 50px)'
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