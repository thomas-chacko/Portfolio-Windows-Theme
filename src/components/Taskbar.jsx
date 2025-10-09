import React, { useState, useEffect } from 'react'

const Taskbar = ({ windows, activeWindow, onRestoreWindow }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString([], { 
      month: 'numeric',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const socialLinks = [
    { name: 'YouTube', icon: '📺', color: 'hover:bg-red-600', url: '#' },
    { name: 'Behance', icon: '🎨', color: 'hover:bg-blue-500', url: '#' },
    { name: 'LinkedIn', icon: '💼', color: 'hover:bg-blue-700', url: '#' },
    { name: 'Instagram', icon: '📷', color: 'hover:bg-pink-500', url: '#' }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-black bg-opacity-90 backdrop-blur-sm border-t border-gray-700 flex items-center justify-between px-2 z-50">
      {/* Left Side - Start Button and Search */}
      <div className="flex items-center space-x-2">
        {/* Windows Start Button */}
        <button className="w-10 h-8 bg-transparent hover:bg-white hover:bg-opacity-20 rounded flex items-center justify-center transition-colors group">
          <div className="w-5 h-5 grid grid-cols-2 gap-0.5">
            <div className="bg-white group-hover:bg-blue-400 transition-colors"></div>
            <div className="bg-white group-hover:bg-green-400 transition-colors"></div>
            <div className="bg-white group-hover:bg-yellow-400 transition-colors"></div>
            <div className="bg-white group-hover:bg-red-400 transition-colors"></div>
          </div>
        </button>

        {/* Search Icon */}
        <button className="w-10 h-8 bg-transparent hover:bg-white hover:bg-opacity-20 rounded flex items-center justify-center transition-colors">
          <span className="text-white text-sm">🔍</span>
        </button>

        {/* Open Windows */}
        <div className="flex items-center space-x-1">
          {windows.map(window => (
            <button
              key={window.id}
              onClick={() => onRestoreWindow(window.id)}
              className={`
                px-3 h-8 rounded text-white text-xs font-medium transition-colors
                ${activeWindow === window.id && !window.isMinimized
                  ? 'bg-white bg-opacity-30 border-b-2 border-blue-400'
                  : 'hover:bg-white hover:bg-opacity-20'
                }
                ${window.isMinimized ? 'bg-white bg-opacity-10' : ''}
              `}
            >
              {window.title}
            </button>
          ))}
        </div>
      </div>

      {/* Center - Pinned Apps */}
      <div className="flex items-center space-x-1">
        {socialLinks.map(link => (
          <a
            key={link.name}
            href={link.url}
            className={`
              w-10 h-8 rounded flex items-center justify-center transition-colors
              hover:bg-white hover:bg-opacity-20 ${link.color}
              group
            `}
            title={link.name}
          >
            <span className="text-white group-hover:scale-110 transition-transform">
              {link.icon}
            </span>
          </a>
        ))}
      </div>

      {/* Right Side - System Tray */}
      <div className="flex items-center space-x-3">
        {/* Language Indicator */}
        <button className="text-white text-xs hover:bg-white hover:bg-opacity-20 px-2 py-1 rounded transition-colors">
          ENG
        </button>

        {/* Chat Icon */}
        <button className="w-8 h-8 bg-transparent hover:bg-white hover:bg-opacity-20 rounded flex items-center justify-center transition-colors">
          <span className="text-white text-sm">💬</span>
        </button>

        {/* Date and Time */}
        <div className="text-white text-right cursor-pointer hover:bg-white hover:bg-opacity-20 px-2 py-1 rounded transition-colors">
          <div className="text-xs font-medium">{formatTime(currentTime)}</div>
          <div className="text-xs opacity-80">{formatDate(currentTime)}</div>
        </div>

        {/* Notification Area */}
        <button className="w-8 h-8 bg-transparent hover:bg-white hover:bg-opacity-20 rounded flex items-center justify-center transition-colors">
          <span className="text-white text-sm">🔔</span>
        </button>
      </div>
    </div>
  )
}

export default Taskbar