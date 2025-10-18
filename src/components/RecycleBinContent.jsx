import React, { useState } from 'react'
import { 
    FaTrash, FaUndo, FaSkullCrossbones, FaGlobe, FaAngular,
    FaPhp, FaBootstrap, FaVuejs
} from 'react-icons/fa'
import { SiJquery } from 'react-icons/si'

const RecycleBinContent = () => {
    const [restoredItems, setRestoredItems] = useState([])
    const [showPopup, setShowPopup] = useState(false)
    const [popupMessage, setPopupMessage] = useState('')

    const handleRestore = (itemId, itemName) => {
        setRestoredItems([...restoredItems, itemId])
        
        // Funny messages for each technology
        const funnyMessages = {
            'angularjs': '❌ Error 404: Common Sense Not Found!\n\nSeriously? You want to restore AngularJS?\nEven Google gave up on it! 😂',
            'bootstrap': '⚠️ Warning: Dad Jokes Detected!\n\nBootstrap called... it wants its 2013 vibes back!\nTime to embrace modern CSS! 💅',
            'ie': '🚨 SECURITY ALERT! 🚨\n\nInternet Explorer tried to open...\nWindows Defender blocked it for your safety!\n(And your sanity) 🛡️',
            'jquery': '💔 Restoration Failed!\n\n"$(document).ready() is so 2010!"\n- React, probably\n\nUse hooks, not $! 🪝',
            'php': '🐘 PHP Elephant Escaped!\n\n"I\'m not dead, I\'m just... legacy!"\n\nNode.js: "Sure, grandpa, let\'s get you to bed" 😴',
            'vuejs': '🤔 Hmm... Interesting Choice!\n\nVue.js isn\'t actually dead...\nBut since you\'re here, try React! 😉\n\n(Just kidding, Vue is awesome too!)'
        }
        
        setPopupMessage(funnyMessages[itemId] || 'Nice try! But this tech stays in the bin! 😄')
        setShowPopup(true)
    }

    const closePopup = () => {
        setShowPopup(false)
        setPopupMessage('')
    }

    // Deprecated Technologies
    const deprecatedTech = [
        {
            id: 'angularjs',
            name: 'AngularJS',
            version: 'v1.x',
            icon: <FaAngular />,
            deletedOn: 'Jan 01, 2022',
            epitaph: 'Two-way binding was cool until it wasn\'t. Long live Angular 2+!',
        },
        {
            id: 'bootstrap',
            name: 'Bootstrap',
            version: 'v3.x',
            icon: <FaBootstrap />,
            deletedOn: 'Oct 15, 2021',
            epitaph: 'Made everyone\'s website look the same since 2011. Tailwind won.',
        },
        {
            id: 'ie',
            name: 'Internet Explorer',
            version: 'v11',
            icon: <FaGlobe />,
            deletedOn: 'Jun 15, 2022',
            epitaph: 'After 27 years of breaking websites, IE finally retired. Nobody cried.',
        },
        {
            id: 'jquery',
            name: 'jQuery',
            version: 'v3.x',
            icon: <SiJquery />,
            deletedOn: '~2020',
            epitaph: 'You made the DOM easier, but React said "I got this." Thanks for the memories!',
        },
        {
            id: 'php',
            name: 'PHP',
            version: 'v7.x',
            icon: <FaPhp />,
            deletedOn: '~2023',
            epitaph: 'Powered the web... and countless nightmares. Node.js sends its regards.',
        },
        {
            id: 'vuejs',
            name: 'Vue.js',
            version: 'v2.x',
            icon: <FaVuejs />,
            deletedOn: 'Dec 31, 2023',
            epitaph: 'Great framework! Just prefer React. No hard feelings, Vue! 💚',
        }
    ]

    return (
        <div className="p-4 lg:p-6">
            {/* Custom Funny Popup */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 cursor-pointer" onClick={closePopup}>
                    <div className="bg-gray-800 border-2 border-red-500 rounded-xl p-6 max-w-md mx-4 animate-bounce" onClick={(e) => e.stopPropagation()}>
                        <div className="text-center">
                            <div className="text-6xl mb-4">😂</div>
                            <pre className="text-white text-sm lg:text-base whitespace-pre-line mb-6 font-mono">
                                {popupMessage}
                            </pre>
                            <button
                                onClick={closePopup}
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer"
                            >
                                OK, I Get It! 😅
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl lg:text-2xl font-bold text-white flex items-center">
                        <FaTrash className="mr-3 text-gray-400" />
                        The Tech Graveyard
                    </h2>
                    <div className="text-3xl text-gray-400"><FaTrash /></div>
                </div>
                <p className="text-gray-400 text-sm">
                    Technologies that served us well... until they didn't. RIP 🪦
                </p>
            </div>

            {/* Deprecated Technologies Section */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <FaSkullCrossbones className="text-xl mr-2" />
                    Deprecated Technologies ({deprecatedTech.length} items)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {deprecatedTech.map(tech => (
                        <div
                            key={tech.id}
                            className={`bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-4 hover:bg-opacity-70 transition-all ${
                                restoredItems.includes(tech.id) ? 'opacity-50' : ''
                            }`}
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center">
                                    <div className="text-3xl mr-3">{tech.icon}</div>
                                    <div>
                                        <h3 className="text-base font-semibold text-white">{tech.name}</h3>
                                        <p className="text-xs text-gray-400">{tech.version}</p>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-400">
                                    {tech.deletedOn}
                                </div>
                            </div>
                            <p className="text-sm text-gray-300 mb-3 italic">"{tech.epitaph}"</p>
                            <button
                                onClick={() => handleRestore(tech.id, tech.name)}
                                disabled={restoredItems.includes(tech.id)}
                                className={`w-full py-2 rounded-lg flex items-center justify-center gap-2 text-sm transition-all ${
                                    restoredItems.includes(tech.id)
                                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                        : 'bg-gray-600 bg-opacity-50 text-gray-300 hover:bg-opacity-70 border border-gray-500 hover:border-red-500 hover:text-red-400 cursor-pointer'
                                }`}
                            >
                                <FaUndo className="text-xs" />
                                {restoredItems.includes(tech.id) ? 'Attempted Restore 😅' : 'Try to Restore 😈'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Tip */}
            <div className="mt-6 bg-gray-700 bg-opacity-30 border border-gray-600 rounded-lg p-4">
                <div className="flex items-start">
                    <div className="text-xl mr-3">💡</div>
                    <div>
                        <h5 className="font-semibold text-white mb-1 text-sm">Developer's Wisdom</h5>
                        <p className="text-xs text-gray-400">
                            "Some technologies die heroes, others live long enough to become legacy code."
                            <br />
                            <span className="italic">- Every developer ever</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecycleBinContent

