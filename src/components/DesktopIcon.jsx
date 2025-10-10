import React, { useState } from 'react'

const DesktopIcon = ({ icon, onDoubleClick, style }) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    setIsSelected(true)
    setTimeout(() => setIsSelected(false), 200)
  }

  const handleDoubleClick = () => {
    onDoubleClick()
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