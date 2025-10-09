import React, { useState, useRef, useEffect } from 'react'

const WindowModal = ({ window, isActive, onClose, onMinimize, onFocus }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef(null)

  useEffect(() => {
    // Center window on first open
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect()
      setPosition({
        x: (window.innerWidth - rect.width) / 2,
        y: (window.innerHeight - rect.height) / 2 - 50
      })
    }
  }, [])

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls')) return
    
    setIsDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
    onFocus()
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

  if (window.isMinimized) return null

  return (
    <div
      ref={windowRef}
      className={`
        fixed bg-white rounded-lg shadow-2xl border border-gray-300
        transition-all duration-300 ease-out
        ${isActive ? 'z-50' : 'z-40'}
        ${isDragging ? 'cursor-grabbing' : 'cursor-default'}
        animate-slideInUp
      `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '600px',
        maxHeight: '500px',
        minHeight: '300px'
      }}
      onClick={onFocus}
    >
      {/* Window Title Bar */}
      <div
        className={`
          flex items-center justify-between px-4 py-2 rounded-t-lg cursor-grab
          ${isActive ? 'bg-blue-600' : 'bg-gray-400'}
          transition-colors duration-200
        `}
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center">
          <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
            {window.title}
          </span>
        </div>
        
        <div className="flex items-center space-x-1 window-controls">
          <button
            onClick={onMinimize}
            className="w-6 h-6 rounded hover:bg-black hover:bg-opacity-20 flex items-center justify-center transition-colors"
          >
            <span className={`text-xs ${isActive ? 'text-white' : 'text-gray-700'}`}>−</span>
          </button>
          <button
            onClick={onClose}
            className="w-6 h-6 rounded hover:bg-red-500 flex items-center justify-center transition-colors group"
          >
            <span className={`text-xs group-hover:text-white ${isActive ? 'text-white' : 'text-gray-700'}`}>×</span>
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="overflow-y-auto" style={{ maxHeight: '450px' }}>
        {window.content}
      </div>
    </div>
  )
}

export default WindowModal