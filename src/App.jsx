import React, { useState, useEffect } from 'react'
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
import WindowModal from './components/WindowModal'
import BootScreen from './components/BootScreen'
import { wallpapers, themeColors } from './data/wallpapers'

const App = () => {
  const [isBooting, setIsBooting] = useState(() => {
    // Check if user has already seen boot screen in this session
    return !sessionStorage.getItem('hasBooted')
  })
  const [activeWindow, setActiveWindow] = useState(null)
  const [windows, setWindows] = useState([])
  const [selectedWallpaper, setSelectedWallpaper] = useState(() => {
    return localStorage.getItem('selectedWallpaper') || 'default'
  })
  const [selectedTheme, setSelectedTheme] = useState(() => {
    return localStorage.getItem('selectedTheme') || 'blue'
  })

  // Save wallpaper preference
  useEffect(() => {
    localStorage.setItem('selectedWallpaper', selectedWallpaper)
  }, [selectedWallpaper])

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('selectedTheme', selectedTheme)
  }, [selectedTheme])

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

  const changeWallpaper = (wallpaperId) => {
    setSelectedWallpaper(wallpaperId)
  }

  const changeTheme = (themeId) => {
    setSelectedTheme(themeId)
  }

  const handleBootComplete = () => {
    setIsBooting(false)
    sessionStorage.setItem('hasBooted', 'true')
  }

  // Get current wallpaper
  const currentWallpaper = wallpapers.find(w => w.id === selectedWallpaper) || wallpapers[0]
  const currentTheme = themeColors.find(t => t.id === selectedTheme) || themeColors[0]

  // Show boot screen if booting
  if (isBooting) {
    return <BootScreen onBootComplete={handleBootComplete} />
  }

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      {/* Wallpaper Background */}
      {currentWallpaper.type === 'image' ? (
        <img
          src={currentWallpaper.image}
          alt="Wallpaper"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 select-none pointer-events-none"
          fetchPriority="high"
        />
      ) : (
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.color}40, ${currentTheme.dark}90)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent"></div>
        </div>
      )}

      <Desktop onOpenWindow={openWindow} onChangeWallpaper={changeWallpaper} onChangeTheme={changeTheme} currentTheme={currentTheme} />

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