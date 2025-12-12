import React, { useState, useEffect } from 'react'
import { FaWindows } from 'react-icons/fa'

const BootScreen = ({ onBootComplete }) => {
    const [progress, setProgress] = useState(0)
    const [bootStage, setBootStage] = useState('starting')
    const [dots, setDots] = useState('')

    useEffect(() => {
        // Animate dots
        const dotsInterval = setInterval(() => {
            setDots(prev => prev.length >= 3 ? '' : prev + '.')
        }, 300)

        // Boot sequence
        const bootSequence = [
            { stage: 'starting', duration: 800, text: 'Starting Windows' },
            { stage: 'loading', duration: 1200, text: 'Loading system files' },
            { stage: 'initializing', duration: 1000, text: 'Initializing portfolio' },
            { stage: 'complete', duration: 500, text: 'Welcome' }
        ]

        let currentTime = 0
        let currentStageIndex = 0

        const progressInterval = setInterval(() => {
            currentTime += 50
            const totalDuration = bootSequence.reduce((sum, stage) => sum + stage.duration, 0)
            const newProgress = Math.min((currentTime / totalDuration) * 100, 100)
            setProgress(newProgress)

            // Update boot stage
            let accumulatedTime = 0
            for (let i = 0; i < bootSequence.length; i++) {
                accumulatedTime += bootSequence[i].duration
                if (currentTime < accumulatedTime) {
                    if (currentStageIndex !== i) {
                        currentStageIndex = i
                        setBootStage(bootSequence[i].stage)
                    }
                    break
                }
            }

            if (newProgress >= 100) {
                clearInterval(progressInterval)
                setTimeout(() => {
                    onBootComplete()
                }, 500)
            }
        }, 50)

        return () => {
            clearInterval(dotsInterval)
            clearInterval(progressInterval)
        }
    }, [onBootComplete])

    const getBootMessage = () => {
        switch (bootStage) {
            case 'starting':
                return 'Starting Windows'
            case 'loading':
                return 'Loading system files'
            case 'initializing':
                return 'Initializing portfolio'
            case 'complete':
                return 'Welcome'
            default:
                return 'Starting'
        }
    }

    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
            {/* Windows Logo */}
            <div className="mb-12 animate-pulse">
                <FaWindows className="text-white text-8xl md:text-9xl opacity-90" />
            </div>

            {/* Boot Message */}
            <div className="text-white text-xl md:text-2xl mb-8 font-light tracking-wide">
                {getBootMessage()}{dots}
            </div>

            {/* Progress Bar */}
            <div className="w-64 md:w-80 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-white transition-all duration-200 ease-out rounded-full"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Loading Dots Animation */}
            <div className="mt-8 flex gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style={{
                            animationDelay: `${i * 0.1}s`,
                            opacity: 0.6
                        }}
                    />
                ))}
            </div>

            {/* Version Info */}
            <div className="absolute bottom-8 text-gray-500 text-sm">
                Portfolio OS 2025 • Build 22H2.1001
            </div>
        </div>
    )
}

export default BootScreen
