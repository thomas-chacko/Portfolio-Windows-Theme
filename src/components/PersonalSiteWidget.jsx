import React, { useState } from 'react'
import { FaGlobe, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { BsGlobe2 } from 'react-icons/bs'

const PersonalSiteWidget = () => {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    const handleVisitSite = () => {
        window.open('https://iamthomas.vercel.app/', '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="fixed top-5 right-5 z-50">
            <div className="relative">
                {/* Main Widget with Dark Blur Background */}
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
                    {/* Content */}
                    <div className="relative p-5 w-80">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
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
                            <button
                                onClick={() => setIsVisible(false)}
                                className="w-8 h-8 bg-white/10 hover:bg-red-500/80 backdrop-blur-sm rounded-lg flex items-center justify-center transition-all border border-white/20 cursor-pointer"
                                title="Close"
                            >
                                <FaTimes className="text-white text-sm" />
                            </button>
                        </div>

                        {/* URL Display */}
                        {/* <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/10">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="text-white/70 text-xs">Deployed on Vercel</span>
                            </div>
                            <p className="text-white text-sm font-mono break-all">
                                iamthomas.vercel.app
                            </p>
                        </div> */}

                        {/* Visit Button */}
                        <button
                            onClick={handleVisitSite}
                            className="w-full bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 border border-white/20 cursor-pointer"
                        >
                            <FaGlobe className="text-lg" />
                            Visit My Site
                            <FaExternalLinkAlt className="text-sm" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalSiteWidget
