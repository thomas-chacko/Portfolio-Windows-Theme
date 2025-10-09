import React from 'react'
import DesktopIcon from './DesktopIcon'
import wallpaper from '../assets/images/windows-wallaper.jpg'

const Desktop = ({ onOpenWindow }) => {
    const desktopIcons = [
        {
            id: 'this-pc',
            name: 'This PC',
            icon: '🖥️',
            content: {
                title: 'This PC',
                type: 'system',
                content: (
                    <div className="p-6">
                        <div className="flex items-center mb-4">
                            <div className="text-4xl mr-4">🖥️</div>
                            <div>
                                <h3 className="text-xl font-semibold">System Information</h3>
                                <p className="text-gray-600">Windows 10 Portfolio Edition</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-gray-50 p-4 rounded">
                                <h4 className="font-semibold">Processor</h4>
                                <p className="text-sm text-gray-600">React.js Engine</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                                <h4 className="font-semibold">Memory</h4>
                                <p className="text-sm text-gray-600">Unlimited Creativity</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                                <h4 className="font-semibold">Graphics</h4>
                                <p className="text-sm text-gray-600">Tailwind CSS Powered</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                                <h4 className="font-semibold">Storage</h4>
                                <p className="text-sm text-gray-600">Cloud-based Portfolio</p>
                            </div>
                        </div>
                    </div>
                )
            }
        },
        {
            id: 'profile',
            name: 'Profile',
            icon: '👤',
            content: {
                title: 'Profile',
                type: 'profile',
                content: (
                    <div className="p-6">
                        <div className="flex items-start mb-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl mr-6">
                                👤
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">[Your Name]</h3>
                                <p className="text-lg text-blue-600 mb-2">Front-End Developer</p>
                                <p className="text-gray-600 leading-relaxed">
                                    Passionate front-end developer with expertise in React, JavaScript, and modern web technologies.
                                    I create beautiful, responsive, and user-friendly web applications.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded">
                                <h4 className="font-semibold mb-2">Location</h4>
                                <p className="text-gray-600">[Your City, Country]</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                                <h4 className="font-semibold mb-2">Experience</h4>
                                <p className="text-gray-600">[X] Years</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                                <h4 className="font-semibold mb-2">Email</h4>
                                <p className="text-gray-600">[your.email@example.com]</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded">
                                <h4 className="font-semibold mb-2">Phone</h4>
                                <p className="text-gray-600">[+1234567890]</p>
                            </div>
                        </div>
                    </div>
                )
            }
        },
        {
            id: 'games',
            name: 'Games',
            icon: '🎮',
            content: {
                title: 'Games',
                type: 'games',
                content: (
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Game Projects</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-4 rounded-lg text-white cursor-pointer hover:scale-105 transition-transform">
                                <div className="text-2xl mb-2">🎯</div>
                                <h4 className="font-semibold">Tic Tac Toe</h4>
                                <p className="text-sm opacity-90">Classic game built with React</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-lg text-white cursor-pointer hover:scale-105 transition-transform">
                                <div className="text-2xl mb-2">🐍</div>
                                <h4 className="font-semibold">Snake Game</h4>
                                <p className="text-sm opacity-90">Retro snake game in JavaScript</p>
                            </div>
                            <div className="bg-gradient-to-br from-red-400 to-red-600 p-4 rounded-lg text-white cursor-pointer hover:scale-105 transition-transform">
                                <div className="text-2xl mb-2">🧩</div>
                                <h4 className="font-semibold">Puzzle Game</h4>
                                <p className="text-sm opacity-90">Interactive puzzle solver</p>
                            </div>
                            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-lg text-white cursor-pointer hover:scale-105 transition-transform">
                                <div className="text-2xl mb-2">🎲</div>
                                <h4 className="font-semibold">Memory Game</h4>
                                <p className="text-sm opacity-90">Card matching memory game</p>
                            </div>
                        </div>
                    </div>
                )
            }
        },
        {
            id: 'resume',
            name: 'Resume',
            icon: '📄',
            content: {
                title: 'Resume',
                type: 'resume',
                content: (
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold">Resume</h3>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                                📥 Download Resume
                            </button>
                        </div>

                        <div className="space-y-6">
                            <section>
                                <h4 className="text-lg font-semibold mb-3 text-blue-600">Experience</h4>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-blue-200 pl-4">
                                        <h5 className="font-semibold">[Job Title] - [Company Name]</h5>
                                        <p className="text-sm text-gray-600 mb-2">[Start Date] - [End Date]</p>
                                        <p className="text-gray-700">Description of your role and achievements...</p>
                                    </div>
                                    <div className="border-l-4 border-blue-200 pl-4">
                                        <h5 className="font-semibold">[Previous Job Title] - [Previous Company]</h5>
                                        <p className="text-sm text-gray-600 mb-2">[Start Date] - [End Date]</p>
                                        <p className="text-gray-700">Description of your previous role...</p>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h4 className="text-lg font-semibold mb-3 text-blue-600">Education</h4>
                                <div className="border-l-4 border-green-200 pl-4">
                                    <h5 className="font-semibold">[Degree] - [University Name]</h5>
                                    <p className="text-sm text-gray-600 mb-2">[Graduation Year]</p>
                                    <p className="text-gray-700">Relevant coursework and achievements...</p>
                                </div>
                            </section>

                            <section>
                                <h4 className="text-lg font-semibold mb-3 text-blue-600">Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Node.js', 'Git', 'Tailwind CSS', 'MongoDB'].map(skill => (
                                        <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                )
            }
        },
        {
            id: 'my-works',
            name: 'My Works',
            icon: '💼',
            content: {
                title: 'My Works',
                type: 'portfolio',
                content: (
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Portfolio Projects</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                                <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                    <span className="text-white text-2xl">🌐</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2">E-commerce Website</h4>
                                    <p className="text-sm text-gray-600 mb-3">Full-stack e-commerce platform built with React and Node.js</p>
                                    <div className="flex gap-2">
                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Node.js</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                                <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                    <span className="text-white text-2xl">📱</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2">Mobile App UI</h4>
                                    <p className="text-sm text-gray-600 mb-3">Responsive mobile-first design with modern UI components</p>
                                    <div className="flex gap-2">
                                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">React Native</span>
                                        <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded text-xs">UI/UX</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                                <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                    <span className="text-white text-2xl">📊</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2">Dashboard Analytics</h4>
                                    <p className="text-sm text-gray-600 mb-3">Data visualization dashboard with interactive charts</p>
                                    <div className="flex gap-2">
                                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">D3.js</span>
                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">React</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                                <div className="h-32 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                                    <span className="text-white text-2xl">🎨</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2">Creative Portfolio</h4>
                                    <p className="text-sm text-gray-600 mb-3">Interactive portfolio showcasing creative projects</p>
                                    <div className="flex gap-2">
                                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">CSS3</span>
                                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Animation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        },
        {
            id: 'tutorial-videos',
            name: 'Tutorial Videos',
            icon: '🎥',
            content: {
                title: 'Tutorial Videos',
                type: 'videos',
                content: (
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Tutorial Videos</h3>
                        <div className="space-y-4">
                            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                <div className="w-16 h-12 bg-red-500 rounded flex items-center justify-center text-white mr-4">
                                    ▶️
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold">React Hooks Explained</h4>
                                    <p className="text-sm text-gray-600">Complete guide to React Hooks with practical examples</p>
                                    <p className="text-xs text-gray-500">Duration: 15:30</p>
                                </div>
                            </div>

                            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                <div className="w-16 h-12 bg-red-500 rounded flex items-center justify-center text-white mr-4">
                                    ▶️
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold">CSS Grid Mastery</h4>
                                    <p className="text-sm text-gray-600">Master CSS Grid layout with real-world projects</p>
                                    <p className="text-xs text-gray-500">Duration: 22:45</p>
                                </div>
                            </div>

                            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                <div className="w-16 h-12 bg-red-500 rounded flex items-center justify-center text-white mr-4">
                                    ▶️
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold">JavaScript ES6+ Features</h4>
                                    <p className="text-sm text-gray-600">Modern JavaScript features every developer should know</p>
                                    <p className="text-xs text-gray-500">Duration: 18:20</p>
                                </div>
                            </div>

                            <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                <div className="w-16 h-12 bg-red-500 rounded flex items-center justify-center text-white mr-4">
                                    ▶️
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold">Building Responsive Websites</h4>
                                    <p className="text-sm text-gray-600">Create mobile-first responsive designs</p>
                                    <p className="text-xs text-gray-500">Duration: 25:10</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    ]

    return (
        <div
            className="absolute inset-0 p-4"
            style={{
                backgroundImage: `url(${wallpaper})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="grid grid-cols-1 gap-4 w-fit">
                {desktopIcons.map((icon, index) => (
                    <DesktopIcon
                        key={icon.id}
                        icon={icon}
                        onDoubleClick={() => onOpenWindow(icon.content)}
                        style={{ animationDelay: `${index * 100}ms` }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Desktop