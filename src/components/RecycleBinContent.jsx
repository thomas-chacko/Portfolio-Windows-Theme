import React, { useState } from 'react'
import { 
    FaTrash, FaUndo, FaSkullCrossbones, FaGlobe, FaDollarSign,
    FaRulerCombined, FaCoffee, FaBone, FaMoon, FaFistRaised,
    FaBullseye, FaPaintBrush, FaPhp, FaInfinity,
    FaMask, FaQuestionCircle, FaRocket, FaGamepad, FaMusic,
    FaPizzaSlice, FaTrophy, FaDog, FaBolt, FaCode, FaLayerGroup,
    FaFlask, FaBug, FaGem, FaLightbulb, FaAngular
} from 'react-icons/fa'
import { SiJquery } from 'react-icons/si'

const RecycleBinContent = () => {
    const [restoredItems, setRestoredItems] = useState([])

    const handleRestore = (itemId, itemName) => {
        setRestoredItems([...restoredItems, itemId])
        setTimeout(() => {
            alert(`"${itemName}" has been virtually restored! (Just kidding, it's still obsolete 😄)`)
        }, 100)
    }

    // Deprecated Technologies
    const deprecatedTech = [
        {
            id: 'flash',
            name: 'Adobe Flash',
            version: 'v32.0',
            icon: <FaBolt />,
            deletedOn: 'Dec 31, 2020',
            epitaph: 'RIP Flash. You powered the internet\'s golden age of animations and annoying ads.',
        },
        {
            id: 'ie',
            name: 'Internet Explorer',
            version: 'v11',
            icon: <FaGlobe />,
            deletedOn: 'Jun 15, 2022',
            epitaph: 'After 27 years of breaking websites, IE finally retired. We won\'t miss you.',
        },
        {
            id: 'jquery',
            name: 'jQuery',
            version: 'v3.x',
            icon: <SiJquery />,
            deletedOn: '~2020',
            epitaph: 'You made the DOM easier, but React came and said "I got this."',
        },
        {
            id: 'angularjs',
            name: 'AngularJS',
            version: 'v1.x',
            icon: <FaAngular />,
            deletedOn: 'Jan 01, 2022',
            epitaph: 'Two-way binding was cool until it wasn\'t. Long live Angular 2+.',
        },
        {
            id: 'coffeescript',
            name: 'CoffeeScript',
            version: 'v1.12',
            icon: <FaCoffee />,
            deletedOn: '~2018',
            epitaph: 'Made JavaScript beautiful, then ES6 came and did it better.',
        },
        {
            id: 'backbone',
            name: 'Backbone.js',
            version: 'v1.4',
            icon: <FaLayerGroup />,
            deletedOn: '~2016',
            epitaph: 'Gave structure to chaos, but React/Vue gave us components.',
        },
        {
            id: 'silverlight',
            name: 'Microsoft Silverlight',
            version: 'v5.1',
            icon: <FaMoon />,
            deletedOn: 'Oct 12, 2021',
            epitaph: 'Microsoft\'s answer to Flash. Nobody asked the question.',
        },
        {
            id: 'dojo',
            name: 'Dojo Toolkit',
            version: 'v1.16',
            icon: <FaFistRaised />,
            deletedOn: '~2019',
            epitaph: 'Enterprise-grade framework that enterprises forgot about.',
        }
    ]

    // Failed Experiments
    const failedExperiments = [
        {
            id: 'exp1',
            name: 'CSS-Only Carousel',
            icon: <FaLayerGroup />,
            deletedOn: 'Last Week',
            reason: 'Looked great until someone tried to use it on mobile. JavaScript it is.',
        },
        {
            id: 'exp2',
            name: 'Custom State Management',
            icon: <FaBullseye />,
            deletedOn: '2 Months Ago',
            reason: 'Reinvented Redux, but worse. Just used Redux Toolkit.',
        },
        {
            id: 'exp3',
            name: 'Homemade UI Library',
            icon: <FaPaintBrush />,
            deletedOn: '6 Months Ago',
            reason: 'Built 50 components, then discovered Shadcn UI. Cried a little.',
        },
        {
            id: 'exp4',
            name: 'PHP Backend (2024)',
            icon: <FaCode />,
            deletedOn: '3 Months Ago',
            reason: 'Tried to bring back PHP. Node.js won. As it should.',
        }
    ]

    // Bug Cemetery
    const bugCemetery = [
        {
            id: 'bug1',
            name: 'The Infinite Loop',
            icon: <FaInfinity />,
            fixedOn: 'Jan 15, 2024',
            description: 'useEffect with missing dependency. Browser froze. Lesson learned.',
            timeToFix: '3 hours'
        },
        {
            id: 'bug2',
            name: 'CSS Z-Index Battle',
            icon: <FaMask />,
            fixedOn: 'Feb 20, 2024',
            description: 'z-index: 99999999 vs z-index: 999999999. Fixed by using proper stacking context.',
            timeToFix: '2 days'
        },
        {
            id: 'bug3',
            name: 'undefined is not a function',
            icon: <FaQuestionCircle />,
            fixedOn: 'Mar 10, 2024',
            description: 'Classic JavaScript. Forgot to check if function exists. Added optional chaining.',
            timeToFix: '30 minutes'
        },
        {
            id: 'bug4',
            name: 'Async/Await Race Condition',
            icon: <FaRocket />,
            fixedOn: 'Apr 05, 2024',
            description: 'Two API calls racing. Sometimes user data loaded before auth. Added proper sequencing.',
            timeToFix: '4 hours'
        },
        {
            id: 'bug5',
            name: 'The Midnight Deploy',
            icon: <FaMoon />,
            fixedOn: 'May 12, 2024',
            description: 'Deployed at 11:59 PM. Broke production. Rolled back at 12:03 AM. Never again.',
            timeToFix: '4 minutes (+ 1 hour of panic)'
        }
    ]

    // Easter Eggs
    const easterEggs = [
        {
            id: 'egg1',
            icon: <FaGamepad />,
            title: 'Hidden Konami Code',
            secret: 'Up, Up, Down, Down, Left, Right, Left, Right, B, A - Unlocks retro mode!'
        },
        {
            id: 'egg2',
            icon: <FaMusic />,
            title: 'Favorite Debug Song',
            secret: '"Eye of the Tiger" - My go-to when fixing critical bugs at 2 AM'
        },
        {
            id: 'egg3',
            icon: <FaPizzaSlice />,
            title: 'Pizza-Driven Development',
            secret: 'Best code written while waiting for pizza delivery: This entire portfolio'
        },
        {
            id: 'egg4',
            icon: <FaTrophy />,
            title: 'Code Achievement',
            secret: 'Once wrote a function that worked on the first try. Still suspicious about it.'
        },
        {
            id: 'egg5',
            icon: <FaDog />,
            title: 'Rubber Duck Debugging',
            secret: 'Have explained code to a rubber duck more times than to actual humans'
        }
    ]

    return (
        <div className="p-4 lg:p-6">
            {/* Header */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl lg:text-2xl font-bold text-white flex items-center">
                        <FaTrash className="mr-3 text-gray-400" />
                        The Developer's Archive
                    </h2>
                    <div className="text-3xl text-gray-400"><FaTrash /></div>
                </div>
                <p className="text-gray-400 text-sm">
                    A collection of deprecated technologies, failed experiments, squashed bugs, and hidden gems
                </p>
            </div>

            {/* Deprecated Technologies Section */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <FaSkullCrossbones className="text-xl mr-2" />
                    Deprecated Technologies
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
                                        : 'bg-gray-600 bg-opacity-50 text-gray-300 hover:bg-opacity-70 border border-gray-500'
                                }`}
                            >
                                <FaUndo className="text-xs" />
                                {restoredItems.includes(tech.id) ? 'Restored' : 'Restore'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Failed Experiments Section */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <FaFlask className="text-xl mr-2" />
                    Failed Experiments
                </h3>
                <div className="space-y-3">
                    {failedExperiments.map(exp => (
                        <div
                            key={exp.id}
                            className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-4 hover:bg-opacity-70 transition-all"
                        >
                            <div className="flex items-start">
                                <div className="text-2xl mr-3">{exp.icon}</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-base font-semibold text-white">{exp.name}</h3>
                                        <span className="text-xs text-gray-400">{exp.deletedOn}</span>
                                    </div>
                                    <p className="text-sm text-gray-300">{exp.reason}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bug Cemetery Section */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <FaBug className="text-xl mr-2" />
                    Bug Cemetery
                </h3>
                <div className="space-y-3">
                    {bugCemetery.map(bug => (
                        <div
                            key={bug.id}
                            className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-4 hover:bg-opacity-70 transition-all"
                        >
                            <div className="flex items-start">
                                <div className="text-2xl mr-3">{bug.icon}</div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-base font-semibold text-white">{bug.name}</h3>
                                        <span className="text-xs bg-gray-600 bg-opacity-50 text-gray-300 px-2 py-1 rounded">
                                            ✓ Fixed
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-300 mb-2">{bug.description}</p>
                                    <div className="flex gap-4 text-xs text-gray-400">
                                        <span>Fixed: {bug.fixedOn}</span>
                                        <span>Time: {bug.timeToFix}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Easter Eggs Section */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <FaGem className="text-xl mr-2" />
                    Easter Eggs & Fun Facts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {easterEggs.map(egg => (
                        <div
                            key={egg.id}
                            className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-4 hover:bg-opacity-70 transition-all"
                        >
                            <div className="flex items-center mb-2">
                                <div className="text-2xl mr-3">{egg.icon}</div>
                                <h3 className="text-base font-semibold text-white">{egg.title}</h3>
                            </div>
                            <p className="text-sm text-gray-300 italic">"{egg.secret}"</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Tip */}
            <div className="mt-6 bg-gray-700 bg-opacity-30 border border-gray-600 rounded-lg p-4">
                <div className="flex items-start">
                    <FaLightbulb className="text-xl mr-3 text-gray-400" />
                    <div>
                        <h5 className="font-semibold text-white mb-1 text-sm">Developer's Wisdom</h5>
                        <p className="text-xs text-gray-400">
                            Every deprecated framework was once cutting-edge. Every bug teaches a lesson. 
                            Every failed experiment brings you closer to success.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecycleBinContent

