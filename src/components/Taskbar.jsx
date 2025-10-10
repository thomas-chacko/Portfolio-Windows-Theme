import React, { useState, useEffect } from 'react'
import { GoSearch } from "react-icons/go";
import { FaBatteryHalf } from "react-icons/fa";
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
    const [showBatteryTooltip, setShowBatteryTooltip] = useState(false)
    const [showWifiTooltip, setShowWifiTooltip] = useState(false)
    const [showVolumeTooltip, setShowVolumeTooltip] = useState(false)

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
        const options = {
            day: '2-digit',
            month: 'short',
            year: '2-digit'
        }
        return date.toLocaleDateString('en-GB', options)
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
                <button className="w-12 h-8 cursor-pointer bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors group">
                    <FaWindows className="w-6 h-6 text-white" />
                </button>

                {/* Search Icon */}
                <button className="w-10 cursor-pointer h-8 bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors">
                    <GoSearch className="w-6 h-6 rotate-90 text-white" />
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
            <div className="flex items-center space-x-2">
                {/* Notification Area */}
                <button className="w-8 h-8 cursor-pointer bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors">
                    <FaChevronUp className="w-3 h-3 text-white" />
                </button>

                {/* Language */}
                <button className="bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex flex-col items-center justify-center transition-colors px-2 py-1">
                    <span className="text-white text-xs font-medium leading-tight">ENG</span>
                    <span className="text-white text-xs font-medium leading-tight">IN</span>
                </button>

                {/* System Icons */}
                <div className="flex items-center">
                    {/* WiFi Icon */}
                    <div className="relative">
                        <button
                            className="w-7 h-7 bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors"
                            onMouseEnter={() => setShowWifiTooltip(true)}
                            onMouseLeave={() => setShowWifiTooltip(false)}
                        >
                            <FaWifi className="w-4 h-4 text-white" />
                        </button>

                        {/* WiFi Tooltip */}
                        {showWifiTooltip && (
                            <div className="absolute bottom-12 right-0 bg-gray-800 bg-opacity-95 backdrop-blur-sm text-white p-2 rounded-lg shadow-lg border border-gray-700 min-w-[120px]">
                                <div className="text-xs text-gray-300 mb-1">
                                    BSNL
                                </div>
                                <div className="text-xs text-gray-400">
                                    Internet access
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Volume Icon */}
                    <div className="relative">
                        <button
                            className="w-7 h-7 bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors"
                            onMouseEnter={() => setShowVolumeTooltip(true)}
                            onMouseLeave={() => setShowVolumeTooltip(false)}
                        >
                            <FaVolumeUp className="w-4 h-4 text-white" />
                        </button>

                        {/* Volume Tooltip */}
                        {showVolumeTooltip && (
                            <div className="absolute bottom-12 right-0 bg-gray-800 bg-opacity-95 backdrop-blur-sm text-white p-3 rounded-lg shadow-lg border border-gray-700 min-w-[180px]">
                                <div className="text-xs mb-2">
                                    Speakers: 75%
                                </div>
                                <div className="w-full bg-gray-600 rounded-full h-2">
                                    <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                                <div className="text-xs text-gray-400 mt-2">
                                    Realtek Audio
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Battery Icon */}
                    <div className="relative">
                        <button
                            className="w-7 h-7 bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors"
                            onMouseEnter={() => setShowBatteryTooltip(true)}
                            onMouseLeave={() => setShowBatteryTooltip(false)}
                        >
                            <FaBatteryHalf className="w-4 h-4 text-white" />
                        </button>

                        {/* Battery Tooltip */}
                        {showBatteryTooltip && (
                            <div className="absolute bottom-12 right-0 bg-gray-800 bg-opacity-95 backdrop-blur-sm text-white p-3 rounded-lg shadow-lg border border-gray-700 min-w-[220px]">
                                <div className="text-sm mb-1">
                                    Battery status: 81% remaining
                                </div>
                                <div className="text-sm text-gray-300">
                                    2h 16min
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Date and Time */}
                <button className="text-white text-right hover:bg-gray-700 hover:bg-opacity-50 px-2 py-1 transition-colors">
                    <div className="text-xs font-medium leading-tight">{formatTime(currentTime)}</div>
                    <div className="text-xs opacity-80 leading-tight">{formatDate(currentTime)}</div>
                </button>

                {/* Show Desktop Button */}
                {/* <button className="w-2 h-8 bg-transparent hover:bg-gray-600 border-l border-gray-700 transition-colors">
                </button> */}
            </div>
        </div>
    )
}

export default Taskbar