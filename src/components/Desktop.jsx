import React from 'react'
import DesktopIcon from './DesktopIcon'
import wallpaper from '../assets/images/windows-wallaper.jpg'
import desktopIcon from '../assets/images/desktop.png'
import boyIcon from '../assets/images/boy.png'
import gamesIcon from "../assets/images/game.png"
import fileIcon from "../assets/images/file.png"
import suitcaseIcon from "../assets/images/suitcase.png"
import recycleBinIcon from "../assets/images/recycle-bin.png"
import settingIcon from "../assets/images/setting.png"

const Desktop = ({ onOpenWindow }) => {
    const desktopIcons = [
        {
            id: 'this-pc',
            name: 'This PC',
            icon: desktopIcon,
            content: {
                title: 'This PC',
                type: 'system',
                icon: desktopIcon,
                content: (
                    <div className="p-4 lg:p-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 lg:mb-6">
                            <div className="text-3xl lg:text-4xl mb-2 sm:mb-0 sm:mr-4">🖥️</div>
                            <div>
                                <h3 className="text-lg lg:text-xl font-semibold">System Information</h3>
                                <p className="text-gray-600 text-sm lg:text-base">Windows 10 Portfolio Edition</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mt-4 lg:mt-6">
                            <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded border border-gray-600">
                                <h4 className="font-semibold text-sm lg:text-base text-white">Processor</h4>
                                <p className="text-xs lg:text-sm text-gray-300">React.js Engine</p>
                            </div>
                            <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded border border-gray-600">
                                <h4 className="font-semibold text-sm lg:text-base text-white">Memory</h4>
                                <p className="text-xs lg:text-sm text-gray-300">Unlimited Creativity</p>
                            </div>
                            <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded border border-gray-600">
                                <h4 className="font-semibold text-sm lg:text-base text-white">Graphics</h4>
                                <p className="text-xs lg:text-sm text-gray-300">Tailwind CSS Powered</p>
                            </div>
                            <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded border border-gray-600">
                                <h4 className="font-semibold text-sm lg:text-base text-white">Storage</h4>
                                <p className="text-xs lg:text-sm text-gray-300">Cloud-based Portfolio</p>
                            </div>
                        </div>
                    </div>
                )
            }
        },
        {
            id: 'profile',
            name: 'Profile',
            icon: boyIcon,
            content: {
                title: 'Profile',
                type: 'profile',
                icon: boyIcon,
                content: (
                    <div className="p-4 lg:p-6">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 lg:mb-6">
                            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl lg:text-3xl mb-4 sm:mb-0 sm:mr-6">
                                👤
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-xl lg:text-2xl font-bold mb-2">[Your Name]</h3>
                                <p className="text-base lg:text-lg text-blue-600 mb-2">Front-End Developer</p>
                                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                                    Passionate front-end developer with expertise in React, JavaScript, and modern web technologies.
                                    I create beautiful, responsive, and user-friendly web applications.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                            <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded border border-gray-600">
                                <h4 className="font-semibold mb-2 text-sm lg:text-base text-white">Location</h4>
                                <p className="text-gray-300 text-xs lg:text-sm">[Your City, Country]</p>
                            </div>
                            <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded border border-gray-600">
                                <h4 className="font-semibold mb-2 text-sm lg:text-base text-white">Experience</h4>
                                <p className="text-gray-300 text-xs lg:text-sm">[X] Years</p>
                            </div>
                            <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded border border-gray-600">
                                <h4 className="font-semibold mb-2 text-sm lg:text-base text-white">Email</h4>
                                <p className="text-gray-300 text-xs lg:text-sm break-all">[your.email@example.com]</p>
                            </div>
                            <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded border border-gray-600">
                                <h4 className="font-semibold mb-2 text-sm lg:text-base text-white">Phone</h4>
                                <p className="text-gray-300 text-xs lg:text-sm">[+1234567890]</p>
                            </div>
                        </div>
                    </div>
                )
            }
        },
        {
            id: 'games',
            name: 'Games',
            icon: gamesIcon,
            content: {
                title: 'Games',
                type: 'games',
                icon: gamesIcon,
                content: (
                    <div className="p-4 lg:p-6">
                        <h3 className="text-lg lg:text-xl font-semibold mb-4">Game Projects</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                            <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 lg:p-4 rounded-lg text-white cursor-pointer hover:scale-105 transition-transform">
                                <div className="text-xl lg:text-2xl mb-2">🎯</div>
                                <h4 className="font-semibold text-sm lg:text-base">Tic Tac Toe</h4>
                                <p className="text-xs lg:text-sm opacity-90">Classic game built with React</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 lg:p-4 rounded-lg text-white cursor-pointer hover:scale-105 transition-transform">
                                <div className="text-xl lg:text-2xl mb-2">🐍</div>
                                <h4 className="font-semibold text-sm lg:text-base">Snake Game</h4>
                                <p className="text-xs lg:text-sm opacity-90">Retro snake game in JavaScript</p>
                            </div>
                            <div className="bg-gradient-to-br from-red-400 to-red-600 p-3 lg:p-4 rounded-lg text-white cursor-pointer hover:scale-105 transition-transform">
                                <div className="text-xl lg:text-2xl mb-2">🧩</div>
                                <h4 className="font-semibold text-sm lg:text-base">Puzzle Game</h4>
                                <p className="text-xs lg:text-sm opacity-90">Interactive puzzle solver</p>
                            </div>
                            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-3 lg:p-4 rounded-lg text-white cursor-pointer hover:scale-105 transition-transform">
                                <div className="text-xl lg:text-2xl mb-2">🎲</div>
                                <h4 className="font-semibold text-sm lg:text-base">Memory Game</h4>
                                <p className="text-xs lg:text-sm opacity-90">Card matching memory game</p>
                            </div>
                        </div>
                    </div>
                )
            }
        },
        {
            id: 'resume',
            name: 'Resume',
            icon: fileIcon,
            content: {
                title: 'Resume',
                type: 'resume',
                icon: fileIcon,
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
            name: 'Works',
            icon: suitcaseIcon,
            content: {
                title: 'My Works',
                type: 'portfolio',
                icon: suitcaseIcon,
                content: (
                    <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4">Portfolio Projects</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-700 bg-opacity-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-600">
                                <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                                    <span className="text-white text-2xl">🌐</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2 text-white">E-commerce Website</h4>
                                    <p className="text-sm text-gray-300 mb-3">Full-stack e-commerce platform built with React and Node.js</p>
                                    <div className="flex gap-2">
                                        <span className="bg-blue-600 text-blue-100 px-2 py-1 rounded text-xs">React</span>
                                        <span className="bg-green-600 text-green-100 px-2 py-1 rounded text-xs">Node.js</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-700 bg-opacity-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-600">
                                <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                                    <span className="text-white text-2xl">📱</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2 text-white">Mobile App UI</h4>
                                    <p className="text-sm text-gray-300 mb-3">Responsive mobile-first design with modern UI components</p>
                                    <div className="flex gap-2">
                                        <span className="bg-purple-600 text-purple-100 px-2 py-1 rounded text-xs">React Native</span>
                                        <span className="bg-pink-600 text-pink-100 px-2 py-1 rounded text-xs">UI/UX</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-700 bg-opacity-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-600">
                                <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                                    <span className="text-white text-2xl">📊</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2 text-white">Dashboard Analytics</h4>
                                    <p className="text-sm text-gray-300 mb-3">Data visualization dashboard with interactive charts</p>
                                    <div className="flex gap-2">
                                        <span className="bg-green-600 text-green-100 px-2 py-1 rounded text-xs">D3.js</span>
                                        <span className="bg-blue-600 text-blue-100 px-2 py-1 rounded text-xs">React</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-700 bg-opacity-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-600">
                                <div className="h-32 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
                                    <span className="text-white text-2xl">🎨</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold mb-2 text-white">Creative Portfolio</h4>
                                    <p className="text-sm text-gray-300 mb-3">Interactive portfolio showcasing creative projects</p>
                                    <div className="flex gap-2">
                                        <span className="bg-red-600 text-red-100 px-2 py-1 rounded text-xs">CSS3</span>
                                        <span className="bg-yellow-600 text-yellow-100 px-2 py-1 rounded text-xs">Animation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        },
        {
            id: 'settings',
            name: 'Settings',
            icon: settingIcon,
            content: {
                title: 'Settings',
                type: 'settings',
                icon: settingIcon,
                content: (
                    <div className="p-4 lg:p-6">
                        <h3 className="text-lg lg:text-xl font-semibold mb-4">System Settings</h3>
                        <div className="space-y-4">
                            {/* Display Settings */}
                            <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded-lg border border-gray-600">
                                <div className="flex items-center mb-3">
                                    <div className="text-xl lg:text-2xl mr-3">🖥️</div>
                                    <h4 className="font-semibold text-sm lg:text-base text-white">Display</h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                                        <p className="text-xs lg:text-sm font-medium text-white">Resolution</p>
                                        <p className="text-xs text-gray-300">1920 x 1080</p>
                                    </div>
                                    <div className="bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                                        <p className="text-xs lg:text-sm font-medium text-white">Theme</p>
                                        <p className="text-xs text-gray-300">Windows Dark</p>
                                    </div>
                                </div>
                            </div>

                            {/* System Settings */}
                            <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded-lg border border-gray-600">
                                <div className="flex items-center mb-3">
                                    <div className="text-xl lg:text-2xl mr-3">⚙️</div>
                                    <h4 className="font-semibold text-sm lg:text-base text-white">System</h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                                        <p className="text-xs lg:text-sm font-medium text-white">Version</p>
                                        <p className="text-xs text-gray-300">Portfolio OS v1.0</p>
                                    </div>
                                    <div className="bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                                        <p className="text-xs lg:text-sm font-medium text-white">Build</p>
                                        <p className="text-xs text-gray-300">React 18.2.0</p>
                                    </div>
                                </div>
                            </div>

                            {/* Network Settings */}
                            <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded-lg border border-gray-600">
                                <div className="flex items-center mb-3">
                                    <div className="text-xl lg:text-2xl mr-3">🌐</div>
                                    <h4 className="font-semibold text-sm lg:text-base text-white">Network & Internet</h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                                        <p className="text-xs lg:text-sm font-medium text-white">Status</p>
                                        <p className="text-xs text-green-400">Connected</p>
                                    </div>
                                    <div className="bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                                        <p className="text-xs lg:text-sm font-medium text-white">Connection</p>
                                        <p className="text-xs text-gray-300">Wi-Fi</p>
                                    </div>
                                </div>
                            </div>

                            {/* Privacy Settings */}
                            <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded-lg border border-gray-600">
                                <div className="flex items-center mb-3">
                                    <div className="text-xl lg:text-2xl mr-3">🔒</div>
                                    <h4 className="font-semibold text-sm lg:text-base text-white">Privacy & Security</h4>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                                        <span className="text-xs lg:text-sm text-white">Location Services</span>
                                        <div className="w-10 h-5 bg-blue-500 rounded-full relative">
                                            <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                                        <span className="text-xs lg:text-sm text-white">Analytics</span>
                                        <div className="w-10 h-5 bg-gray-400 rounded-full relative">
                                            <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        },
        {
            id: 'recycle-bin',
            name: 'Recycle Bin',
            icon: recycleBinIcon,
            content: {
                title: 'Recycle Bin',
                type: 'recycle-bin',
                icon: recycleBinIcon,
                content: (
                    <div className="p-4 lg:p-6">
                        <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                            <div className="text-6xl lg:text-8xl mb-4 opacity-50">🗑️</div>
                            <h3 className="text-lg lg:text-xl font-semibold mb-2 text-gray-600">Recycle Bin is Empty</h3>
                            <p className="text-sm lg:text-base text-gray-500 text-center max-w-md">
                                When you delete files, they will appear here before being permanently removed.
                            </p>
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-center text-blue-700">
                                    <div className="text-lg mr-2">💡</div>
                                    <p className="text-xs lg:text-sm">
                                        <strong>Tip:</strong> You can restore deleted files from here or empty the recycle bin to free up space.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        },

    ]

    return (
        <div
            className="absolute inset-0 py-4 px-3"
            style={{
                backgroundImage: `url(${wallpaper})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="grid grid-cols-1 gap-6 w-fit">
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