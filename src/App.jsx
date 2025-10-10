import React, { useState, useEffect } from 'react'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import WindowModal from './components/WindowModal'

const App = () => {
  const [activeWindow, setActiveWindow] = useState(null)
  const [windows, setWindows] = useState([])

  // Global right-click prevention
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault()
    }

    document.addEventListener('contextmenu', handleContextMenu)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])

  const openWindow = (windowData) => {
    const newWindow = {
      id: Date.now(),
      ...windowData,
      isMinimized: false,
      isMaximized: false
    }
    setWindows(prev => [...prev, newWindow])
    setActiveWindow(newWindow.id)
  }

  const closeWindow = (windowId) => {
    setWindows(prev => prev.filter(w => w.id !== windowId))
    setActiveWindow(null)
  }

  const minimizeWindow = (windowId) => {
    setWindows(prev => prev.map(w =>
      w.id === windowId ? { ...w, isMinimized: true } : w
    ))
    setActiveWindow(null)
  }

  const maximizeWindow = (windowId) => {
    setWindows(prev => prev.map(w =>
      w.id === windowId ? { ...w, isMaximized: !w.isMaximized } : w
    ))
  }

  const restoreWindow = (windowId) => {
    setWindows(prev => prev.map(w =>
      w.id === windowId ? { ...w, isMinimized: false } : w
    ))
    setActiveWindow(windowId)
  }

  const focusWindow = (windowId) => {
    setActiveWindow(windowId)
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 relative">
      {/* Windows 10 Wallpaper Background */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent"></div>

      <Desktop onOpenWindow={openWindow} />

      {windows.map(window => (
        <WindowModal
          key={window.id}
          window={window}
          isActive={activeWindow === window.id}
          onClose={() => closeWindow(window.id)}
          onMinimize={() => minimizeWindow(window.id)}
          onMaximize={() => maximizeWindow(window.id)}
          onFocus={() => focusWindow(window.id)}
        />
      ))}

      <Taskbar
        windows={windows}
        activeWindow={activeWindow}
        onRestoreWindow={restoreWindow}
      />
    </div>
  )
}

export default App