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
        flex flex-col items-center p-2 rounded cursor-pointer
        transition-all duration-200 ease-in-out
        hover:bg-white hover:bg-opacity-20 hover:backdrop-blur-sm
        active:scale-95
        ${isSelected ? 'bg-blue-500 bg-opacity-30' : ''}
        animate-fadeInUp
      `}
      style={style}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="text-3xl mb-1 filter drop-shadow-sm">
        {icon.icon}
      </div>
      <span className="text-white text-sm font-medium text-center drop-shadow-sm max-w-20 leading-tight">
        {icon.name}
      </span>
    </div>
  )
}

export default DesktopIcon