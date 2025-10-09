import React, { useState, useEffect } from 'react'
import {
    FaWindows,
    FaSearch,
    FaWifi,
    FaVolumeUp,
    FaBatteryFull,
    FaBell,
    FaChevronUp
} from 'react-icons/fa'
import {
    MdLanguage,
    MdNotifications
} from 'react-icons/md'

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
            hour12: false
        })
    }

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            month: 'numeric',
            day: 'numeric',
            year: 'numeric'
        })
    }

    // Windows-style system icons
    const systemIcons = [
        { name: 'WiFi', icon: FaWifi, title: 'Network' },
        { name: 'Volume', icon: FaVolumeUp, title: 'Volume' },
        { name: 'Battery', icon: FaBatteryFull, title: 'Battery' },
        { name: 'Language', icon: MdLanguage, title: 'Language' },
    ]

    return (
        <div className="fixed bottom-0 left-0 right-0 h-12 bg-gray-900 bg-opacity-95 backdrop-blur-sm flex items-center justify-between px-1 z-50 border-t border-gray-800">
            {/* Left Side - Start Button and Search */}
            <div className="flex items-center space-x-1">
                {/* Windows Start Button */}
                <button className="w-12 h-8 bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors group">
                    <FaWindows className="w-4 h-4 text-white" />
                </button>

                {/* Search Icon */}
                <button className="w-10 h-8 bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors">
                    <FaSearch className="w-4 h-4 text-white" />
                </button>

                {/* Open Windows */}
                <div className="flex items-center space-x-1">
                    {windows.map(window => (
                        <button
                            key={window.id}
                            onClick={() => onRestoreWindow(window.id)}
                            className={`
                px-3 h-8 text-white text-xs font-medium transition-colors border-b-2
                ${activeWindow === window.id && !window.isMinimized
                                    ? 'bg-gray-700 bg-opacity-50 border-blue-400'
                                    : 'hover:bg-gray-700 hover:bg-opacity-30 border-transparent'
                                }
                ${window.isMinimized ? 'bg-gray-800 bg-opacity-30' : ''}
              `}
                        >
                            {window.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Side - System Tray */}
            <div className="flex items-center space-x-1">
                {/* System Icons */}
                <div className="flex items-center space-x-1">
                    {systemIcons.map((icon, index) => {
                        const IconComponent = icon.icon
                        return (
                            <button
                                key={index}
                                className="w-8 h-8 bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors"
                                title={icon.title}
                            >
                                {icon.name === 'Language' ? (
                                    <div className="flex flex-col items-center">
                                        <IconComponent className="w-3 h-3 text-white" />
                                        <span className="text-white text-xs font-medium leading-none">ENG</span>
                                    </div>
                                ) : (
                                    <IconComponent className="w-4 h-4 text-white" />
                                )}
                            </button>
                        )
                    })}
                </div>

                {/* Notification Area */}
                <button className="w-8 h-8 bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors">
                    <FaChevronUp className="w-3 h-3 text-white" />
                </button>

                {/* Notifications */}
                <button className="w-8 h-8 bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors">
                    <MdNotifications className="w-4 h-4 text-white" />
                </button>

                {/* Date and Time */}
                <button className="text-white text-right hover:bg-gray-700 hover:bg-opacity-50 px-2 py-1 transition-colors">
                    <div className="text-xs font-medium leading-tight">{formatTime(currentTime)}</div>
                    <div className="text-xs opacity-80 leading-tight">{formatDate(currentTime)}</div>
                </button>

                {/* Show Desktop Button */}
                <button className="w-2 h-8 bg-transparent hover:bg-gray-600 border-l border-gray-700 transition-colors">
                </button>
            </div>
        </div>
    )
}

export default Taskbar