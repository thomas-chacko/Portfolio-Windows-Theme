import { useState, useEffect } from 'react'
import { GoSearch } from "react-icons/go";
import { FaBatteryHalf } from "react-icons/fa";
import {
    FaWindows,
    FaWifi,
    FaVolumeUp,
    FaChevronUp,
    FaGlobe,
    FaExternalLinkAlt
} from 'react-icons/fa'
import { BsGlobe2 } from 'react-icons/bs'
import StartMenu from './StartMenu'

const Taskbar = ({ windows, activeWindow, onRestoreWindow }) => {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [showBatteryTooltip, setShowBatteryTooltip] = useState(false)
    const [showWifiTooltip, setShowWifiTooltip] = useState(false)
    const [showVolumeTooltip, setShowVolumeTooltip] = useState(false)
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false)
    const [showNotifications, setShowNotifications] = useState(true)

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

    // Mobile-friendly short date format
    const formatMobileDate = (date) => {
        const options = {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        }
        return date.toLocaleDateString('en-GB', options)
    }



    return (
        <>
            <StartMenu
                isOpen={isStartMenuOpen}
                onClose={() => setIsStartMenuOpen(false)}
            />
            
            {/* Notification Panel */}
            {showNotifications && (
                <>
                    {/* Notification Panel */}
                    <div className="fixed bottom-14 right-2 w-80 sm:w-96 bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 z-50 overflow-hidden">
                        {/* Personal Site Widget */}
                        <div className="p-5">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                                    <BsGlobe2 className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">
                                        Personal Site
                                    </h3>
                                    <p className="text-white/60 text-sm">Live Portfolio</p>
                                </div>
                            </div>

                            {/* Visit Button */}
                            <button
                                onClick={() => window.open('https://iamthomas.vercel.app/', '_blank', 'noopener,noreferrer')}
                                className="w-full bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
                            >
                                <FaGlobe className="text-lg" />
                                Visit My Site
                                <FaExternalLinkAlt className="text-sm" />
                            </button>
                        </div>
                        
                        {/* Bottom Arrow Pointer */}
                        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-black/40 backdrop-blur-xl border-r border-b border-white/10 transform rotate-45"></div>
                    </div>
                </>
            )}
            
            <div className="fixed bottom-0 left-0 right-0 h-12 bg-gray-900 bg-opacity-95 backdrop-blur-sm flex items-center justify-between px-1 z-50 border-t border-gray-800">
                {/* Left Side - Start Button and Search */}
                <div className="flex items-center space-x-1 flex-1 min-w-0">
                    {/* Windows Start Button */}
                    <button
                        onClick={() => setIsStartMenuOpen(!isStartMenuOpen)}
                        className={`w-8 sm:w-12 h-8 cursor-pointer flex items-center justify-center transition-colors group flex-shrink-0 ${isStartMenuOpen ? 'bg-gray-700 bg-opacity-70' : 'bg-transparent hover:bg-gray-700 hover:bg-opacity-50'
                            }`}
                    >
                        <FaWindows className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                    </button>

                    {/* Search Icon */}
                    <button className="w-8 sm:w-10 cursor-pointer h-8 bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors flex-shrink-0">
                        <GoSearch className="w-4 sm:w-6 h-4 sm:h-6 rotate-90 text-white" />
                    </button>

                    {/* Open Windows */}
                    <div className="flex items-center space-x-1 overflow-hidden">
                        {windows.map(window => (
                            <button
                                key={window.id}
                                onClick={() => onRestoreWindow(window.id)}
                                className={`
                w-10 sm:w-12 h-8 transition-colors border-b-2 flex items-center justify-center flex-shrink-0
                ${activeWindow === window.id && !window.isMinimized
                                        ? 'bg-gray-700 bg-opacity-50 border-blue-400'
                                        : 'hover:bg-gray-700 hover:bg-opacity-30 border-transparent'
                                    }
                ${window.isMinimized ? 'bg-gray-800 bg-opacity-30' : ''}
              `}
                                title={window.title}
                            >
                                {/* Always show icon like Windows */}
                                <div className="w-5 sm:w-6 h-5 sm:h-6 flex items-center justify-center">
                                    {window.icon ? (
                                        <img
                                            src={window.icon}
                                            alt={window.title}
                                            className="w-4 sm:w-5 h-4 sm:h-5 object-contain"
                                            loading='lazy'
                                        />
                                    ) : (
                                        <div className="w-4 sm:w-5 h-4 sm:h-5 bg-gray-400 rounded"></div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side - System Tray */}
                <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                    {/* Notification Area - Now visible on all screens */}
                    <button 
                        onClick={() => setShowNotifications(!showNotifications)}
                        className={`flex w-6 sm:w-8 h-6 sm:h-8 cursor-pointer items-center justify-center transition-colors ${
                            showNotifications ? 'bg-gray-700 bg-opacity-70' : 'bg-transparent hover:bg-gray-700 hover:bg-opacity-50'
                        }`}
                    >
                        <FaChevronUp className="w-2 sm:w-3 h-2 sm:h-3 text-white" />
                    </button>

                    {/* Language - Hide on very small screens */}
                    <button className="hidden md:flex bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex-col items-center justify-center transition-colors px-1 sm:px-2 py-1">
                        <span className="text-white text-xs font-medium leading-tight">ENG</span>
                        <span className="text-white text-xs font-medium leading-tight">IN</span>
                    </button>

                    {/* System Icons */}
                    <div className="flex items-center space-x-0 sm:space-x-1">
                        {/* WiFi Icon */}
                        <div className="relative">
                            <button
                                className="w-5 sm:w-7 h-5 sm:h-7 bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors"
                                onMouseEnter={() => setShowWifiTooltip(true)}
                                onMouseLeave={() => setShowWifiTooltip(false)}
                            >
                                <FaWifi className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                            </button>

                            {/* WiFi Tooltip */}
                            {showWifiTooltip && (
                                <div className="absolute bottom-12 right-0 bg-gray-800 bg-opacity-95 backdrop-blur-sm text-white p-2 rounded-lg shadow-lg border border-gray-700 min-w-[120px] hidden sm:block">
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
                                className="w-5 sm:w-7 h-5 sm:h-7 bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors"
                                onMouseEnter={() => setShowVolumeTooltip(true)}
                                onMouseLeave={() => setShowVolumeTooltip(false)}
                            >
                                <FaVolumeUp className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                            </button>

                            {/* Volume Tooltip */}
                            {showVolumeTooltip && (
                                <div className="absolute bottom-12 right-0 bg-gray-800 bg-opacity-95 backdrop-blur-sm text-white p-3 rounded-lg shadow-lg border border-gray-700 min-w-[180px] hidden sm:block">
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
                                className="w-5 sm:w-7 h-5 sm:h-7 bg-transparent hover:bg-gray-700 hover:bg-opacity-50 flex items-center justify-center transition-colors"
                                onMouseEnter={() => setShowBatteryTooltip(true)}
                                onMouseLeave={() => setShowBatteryTooltip(false)}
                            >
                                <FaBatteryHalf className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                            </button>

                            {/* Battery Tooltip */}
                            {showBatteryTooltip && (
                                <div className="absolute bottom-12 right-0 bg-gray-800 bg-opacity-95 backdrop-blur-sm text-white p-3 rounded-lg shadow-lg border border-gray-700 min-w-[220px] hidden sm:block">
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

                    {/* Date and Time - Responsive */}
                    <button className="text-white text-right hover:bg-gray-700 hover:bg-opacity-50 px-1 sm:px-2 py-1 transition-colors min-w-0 flex-shrink-0">
                        <div className="text-xs font-medium leading-tight whitespace-nowrap">{formatTime(currentTime)}</div>
                        {/* Show short date on very small screens, full date on larger screens */}
                        <div className="text-xs opacity-80 leading-tight whitespace-nowrap">
                            <span className="xs:hidden">{formatMobileDate(currentTime)}</span>
                            <span className="hidden xs:inline">{formatDate(currentTime)}</span>
                        </div>
                    </button>

                    {/* Show Desktop Button */}
                    {/* <button className="w-2 h-8 bg-transparent hover:bg-gray-600 border-l border-gray-700 transition-colors">
                </button> */}
                </div>
            </div>
        </>
    )
}

export default Taskbar