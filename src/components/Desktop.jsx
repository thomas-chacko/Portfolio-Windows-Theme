import React from 'react'
import DesktopIcon from './DesktopIcon'
import desktopIcon from '../assets/images/desktop.png'
import boyIcon from '../assets/images/boy.png'
import gamesIcon from "../assets/images/game.png"
import fileIcon from "../assets/images/file.png"
import suitcaseIcon from "../assets/images/suitcase.png"
import recycleBinIcon from "../assets/images/recycle-bin.png"
import settingIcon from "../assets/images/setting.png"
import me from "../assets/images/thomas.jpg"
// React Icons imports
import {
    FaRocket, FaBolt, FaPhone, FaEnvelope, FaMobileAlt, FaMapMarkerAlt,
    FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaDownload, FaUser,
    FaLaptopCode, FaPalette, FaMobile, FaTools, FaCog, FaProjectDiagram,
    FaBriefcase, FaGraduationCap, FaCode, FaDatabase, FaReact, FaNodeJs,
    FaGitAlt, FaCalendarAlt, FaMapPin, FaExternalLinkAlt
} from 'react-icons/fa'
import {
    HiSparkles, HiLightningBolt
} from 'react-icons/hi'
import {
    MdEmail, MdPhone, MdLocationOn, MdDesignServices
} from 'react-icons/md'

// Game components
import GameCenter from './GameCenter'
// Recycle Bin component
import RecycleBinContent from './RecycleBinContent'
// Project data
import { projects } from '../data/projects'
// Wallpaper data
import { wallpapers, themeColors } from '../data/wallpapers'

const Desktop = ({ onOpenWindow, onChangeWallpaper, onChangeTheme, currentTheme }) => {
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
                                <h3 className="text-lg lg:text-xl font-semibold text-white">Portfolio System Overview</h3>
                                <p className="text-gray-400 text-sm lg:text-base">Developer Workstation • Portfolio Edition 2025</p>
                            </div>
                        </div>

                        {/* Creative System Overview */}
                        <div className="mt-4 lg:mt-6 space-y-4">
                            {/* System Status Dashboard */}
                            <div className="bg-gradient-to-r from-gray-700 to-gray-800 bg-opacity-50 p-4 lg:p-6 rounded-lg border border-gray-600">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-lg lg:text-xl font-bold text-white flex items-center">
                                        <span className="text-2xl mr-3">⚡</span>
                                        System Performance
                                    </h4>
                                    <div className="flex items-center text-green-400">
                                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                        <span className="text-xs lg:text-sm">Online</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl lg:text-3xl mb-2">🧠</div>
                                        <div className="text-xs lg:text-sm text-gray-300">CPU Usage</div>
                                        <div className="text-lg lg:text-xl font-bold text-blue-400">23%</div>
                                        <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                                            <div className="bg-blue-400 h-2 rounded-full" style={{ width: '23%' }}></div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-2xl lg:text-3xl mb-2">💾</div>
                                        <div className="text-xs lg:text-sm text-gray-300">Memory</div>
                                        <div className="text-lg lg:text-xl font-bold text-green-400">67%</div>
                                        <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                                            <div className="bg-green-400 h-2 rounded-full" style={{ width: '67%' }}></div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-2xl lg:text-3xl mb-2">💿</div>
                                        <div className="text-xs lg:text-sm text-gray-300">Storage</div>
                                        <div className="text-lg lg:text-xl font-bold text-yellow-400">45%</div>
                                        <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                                            <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '45%' }}></div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="text-2xl lg:text-3xl mb-2">🌐</div>
                                        <div className="text-xs lg:text-sm text-gray-300">Network</div>
                                        <div className="text-lg lg:text-xl font-bold text-purple-400">89%</div>
                                        <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                                            <div className="bg-purple-400 h-2 rounded-full" style={{ width: '89%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* System Specifications */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600">
                                    <h5 className="font-semibold text-white mb-3 flex items-center">
                                        <span className="text-xl mr-2">🖥️</span>
                                        Hardware Specs
                                    </h5>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs lg:text-sm text-gray-300">Processor</span>
                                            <span className="text-xs lg:text-sm text-white font-medium">React.js Engine v18.2</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs lg:text-sm text-gray-300">Memory</span>
                                            <span className="text-xs lg:text-sm text-white font-medium">Unlimited Creativity</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs lg:text-sm text-gray-300">Graphics</span>
                                            <span className="text-xs lg:text-sm text-white font-medium">Tailwind CSS Powered</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs lg:text-sm text-gray-300">Storage</span>
                                            <span className="text-xs lg:text-sm text-white font-medium">Cloud Portfolio</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600">
                                    <h5 className="font-semibold text-white mb-3 flex items-center">
                                        <span className="text-xl mr-2">⚙️</span>
                                        System Info
                                    </h5>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs lg:text-sm text-gray-300">OS Version</span>
                                            <span className="text-xs lg:text-sm text-white font-medium">Portfolio OS 2024</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs lg:text-sm text-gray-300">Build</span>
                                            <span className="text-xs lg:text-sm text-white font-medium">22H2.1001</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs lg:text-sm text-gray-300">Architecture</span>
                                            <span className="text-xs lg:text-sm text-white font-medium">x64-based PC</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs lg:text-sm text-gray-300">Last Updated</span>
                                            <span className="text-xs lg:text-sm text-white font-medium">Today</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Portfolio Drives & Tools */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                {/* Portfolio Drives */}
                                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600">
                                    <h5 className="font-semibold text-white mb-4 flex items-center">
                                        <span className="text-xl mr-2">💾</span>
                                        Portfolio Drives
                                    </h5>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-3 bg-gray-600 bg-opacity-40 rounded-lg hover:bg-opacity-60 transition-all cursor-pointer">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center mr-3">
                                                    <span className="text-white text-sm">💼</span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-white">Projects (C:)</div>
                                                    <div className="text-xs text-gray-300">15.2 GB free of 50 GB</div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-blue-400">69% full</div>
                                        </div>

                                        <div className="flex items-center justify-between p-3 bg-gray-600 bg-opacity-40 rounded-lg hover:bg-opacity-60 transition-all cursor-pointer">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center mr-3">
                                                    <span className="text-white text-sm">🎨</span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-white">Creative (D:)</div>
                                                    <div className="text-xs text-gray-300">25.8 GB free of 100 GB</div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-green-400">74% full</div>
                                        </div>

                                        <div className="flex items-center justify-between p-3 bg-gray-600 bg-opacity-40 rounded-lg hover:bg-opacity-60 transition-all cursor-pointer">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center mr-3">
                                                    <span className="text-white text-sm">☁️</span>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-white">Cloud Sync</div>
                                                    <div className="text-xs text-gray-300">Unlimited storage</div>
                                                </div>
                                            </div>
                                            <div className="text-xs text-purple-400">Synced</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Developer Tools */}
                                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600">
                                    <h5 className="font-semibold text-white mb-4 flex items-center">
                                        <span className="text-xl mr-2">🛠️</span>
                                        Developer Tools
                                    </h5>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg text-white hover:scale-105 transition-transform cursor-pointer">
                                            <div className="text-lg mb-1">⚛️</div>
                                            <div className="text-xs font-medium">React DevTools</div>
                                            <div className="text-xs opacity-80">v4.28.0</div>
                                        </div>

                                        <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-lg text-white hover:scale-105 transition-transform cursor-pointer">
                                            <div className="text-lg mb-1">📦</div>
                                            <div className="text-xs font-medium">Node.js</div>
                                            <div className="text-xs opacity-80">v18.17.0</div>
                                        </div>

                                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-lg text-white hover:scale-105 transition-transform cursor-pointer">
                                            <div className="text-lg mb-1">🎨</div>
                                            <div className="text-xs font-medium">Figma</div>
                                            <div className="text-xs opacity-80">Design Tool</div>
                                        </div>

                                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-lg text-white hover:scale-105 transition-transform cursor-pointer">
                                            <div className="text-lg mb-1">💻</div>
                                            <div className="text-xs font-medium">VS Code</div>
                                            <div className="text-xs opacity-80">Editor</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600">
                                <h5 className="font-semibold text-white mb-4 flex items-center">
                                    <span className="text-xl mr-2">📈</span>
                                    Recent Portfolio Activity
                                </h5>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-gray-600 bg-opacity-30 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                                            <div>
                                                <div className="text-sm text-white">Portfolio website updated</div>
                                                <div className="text-xs text-gray-400">2 hours ago</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-green-400">✓ Deployed</div>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-gray-600 bg-opacity-30 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                            <div>
                                                <div className="text-sm text-white">New project: E-commerce App</div>
                                                <div className="text-xs text-gray-400">1 day ago</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-blue-400">In Progress</div>
                                    </div>

                                    <div className="flex items-center justify-between p-3 bg-gray-600 bg-opacity-30 rounded-lg">
                                        <div className="flex items-center">
                                            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                            <div>
                                                <div className="text-sm text-white">Skills updated: TypeScript</div>
                                                <div className="text-xs text-gray-400">3 days ago</div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-purple-400">Certified</div>
                                    </div>
                                </div>
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
                        {/* Hero Section */}
                        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-xl p-6 lg:p-8 mb-6 overflow-hidden">
                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-6">
                                <div className="relative">
                                    <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                                        <img
                                            src={me}
                                            alt="Thomas Chacko"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div> */}
                                </div>
                                <div className="flex-1 text-center lg:text-left">
                                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                                        Thomas Chacko
                                    </h1>
                                    <p className="text-xl lg:text-2xl text-blue-100 mb-4 flex items-center justify-center lg:justify-start">
                                        <HiSparkles className="mr-2" />
                                        Front-End Developer
                                    </p>
                                    <p className="text-blue-100 text-sm lg:text-base leading-relaxed mb-6">
                                        Crafting digital experiences that blend creativity with functionality.
                                        Passionate about turning complex problems into simple, beautiful solutions.
                                    </p>
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                        <a 
                                            href="/resume.pdf" 
                                            download="Thomas_Chacko_Resume.pdf"
                                            className="cursor-pointer text-white px-6 py-2 rounded-full font-semibold hover:opacity-80 transition-all flex items-center"
                                            style={{ 
                                                backgroundColor: `${currentTheme.color}50`,
                                                borderColor: currentTheme.color,
                                                borderWidth: '2px'
                                            }}
                                        >
                                            <FaDownload className="mr-2" />
                                            Download CV
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats & Quick Info */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600 text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-blue-400 mb-1">1.6+</div>
                                <div className="text-xs lg:text-sm text-gray-300">Years Experience</div>
                            </div>
                            <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600 text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-green-400 mb-1">20+</div>
                                <div className="text-xs lg:text-sm text-gray-300">Projects Completed</div>
                            </div>
                            <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600 text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-1">10+</div>
                                <div className="text-xs lg:text-sm text-gray-300">Happy Clients</div>
                            </div>
                            <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg border border-gray-600 text-center">
                                <div className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-1">10+</div>
                                <div className="text-xs lg:text-sm text-gray-300">Technologies</div>
                            </div>
                        </div>

                        {/* About & Skills */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            {/* About Me */}
                            <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg border border-gray-600">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <FaRocket className="text-2xl mr-3 text-blue-400" />
                                    About Me
                                </h3>
                                <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
                                    I’m a self-taught Front-End Developer driven by the passion to create responsive, engaging, and user-focused web experiences. I love turning design ideas into interactive, visually appealing interfaces.
                                </p>
                                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                                    My toolkit includes React.js, JavaScript, HTML, CSS, and Tailwind CSS — with a focus on component-based development and smooth state management. I take pride in writing clean, efficient code and constantly improving my skills to build faster, better-performing web applications.
                                </p>
                            </div>

                            {/* Core Skills */}
                            <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg border border-gray-600">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <HiLightningBolt className="text-2xl mr-3 text-yellow-400" />
                                    Core Skills
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-300">React & Next.js</span>
                                            <span className="text-sm text-blue-400">75%</span>
                                        </div>
                                        <div className="w-full bg-gray-600 rounded-full h-2">
                                            <div className="bg-blue-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-300">UI/UX Design</span>
                                            <span className="text-sm text-purple-400">50%</span>
                                        </div>
                                        <div className="w-full bg-gray-600 rounded-full h-2">
                                            <div className="bg-purple-400 h-2 rounded-full" style={{ width: '50%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-300">TypeScript</span>
                                            <span className="text-sm text-green-400">70%</span>
                                        </div>
                                        <div className="w-full bg-gray-600 rounded-full h-2">
                                            <div className="bg-green-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm text-gray-300">Node.js & APIs</span>
                                            <span className="text-sm text-yellow-400">60%</span>
                                        </div>
                                        <div className="w-full bg-gray-600 rounded-full h-2">
                                            <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Services & Specializations */}
                        <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg border border-gray-600 mb-6">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                <FaProjectDiagram className="text-2xl mr-3 text-purple-400" />
                                What I Do Best
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg text-white">
                                    <FaLaptopCode className="text-3xl mb-3" />
                                    <h4 className="font-semibold mb-2">Frontend Development</h4>
                                    <p className="text-sm opacity-90">Building responsive, performant web applications with modern frameworks</p>
                                </div>
                                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-lg text-white">
                                    <FaPalette className="text-3xl mb-3" />
                                    <h4 className="font-semibold mb-2">UI/UX Design</h4>
                                    <p className="text-sm opacity-90">Creating intuitive and beautiful user interfaces that users love</p>
                                </div>
                                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-lg text-white">
                                    <FaMobile className="text-3xl mb-3" />
                                    <h4 className="font-semibold mb-2">Mobile-First Design</h4>
                                    <p className="text-sm opacity-90">Ensuring perfect experiences across all devices and screen sizes</p>
                                </div>
                                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-lg text-white">
                                    <FaBolt className="text-3xl mb-3" />
                                    <h4 className="font-semibold mb-2">Performance Optimization</h4>
                                    <p className="text-sm opacity-90">Making websites lightning-fast with advanced optimization techniques</p>
                                </div>
                                <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-lg text-white">
                                    <FaTools className="text-3xl mb-3" />
                                    <h4 className="font-semibold mb-2">Technical Consulting</h4>
                                    <p className="text-sm opacity-90">Helping teams choose the right technologies and architectures</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact & Social */}
                        <div className="bg-gray-700 bg-opacity-50 p-6 rounded-lg border border-gray-600">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                <FaPhone className="text-2xl mr-3 text-green-400" />
                                Let's Connect
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                                            <MdEmail className="text-white text-lg" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">Email</div>
                                            <div className="text-white">thomaschacko180@gmail.com</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                                            <MdPhone className="text-white text-lg" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">Phone</div>
                                            <div className="text-white">+91 8330811956</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                                            <MdLocationOn className="text-white text-lg" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400">Location</div>
                                            <div className="text-white">Kochi, Kerala</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-400 mb-4">Follow me on social media</div>
                                    <div className="flex flex-wrap gap-3">
                                        <a 
                                            href="https://www.linkedin.com/in/thomas-chacko" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                                        >
                                            <FaLinkedin className="mr-2" /> LinkedIn
                                        </a>
                                        <a 
                                            href="https://github.com/thomas-chacko" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-gray-800 cursor-pointer hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                                        >
                                            <FaGithub className="mr-2" /> GitHub
                                        </a>
                                        <a 
                                            href="https://www.facebook.com/thomas.chacko" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                                        >
                                            <FaFacebook className="mr-2" /> Facebook
                                        </a>
                                        <a 
                                            href="https://www.instagram.com/thomas.chacko" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center"
                                        >
                                            <FaInstagram className="mr-2" /> Instagram
                                        </a>
                                    </div>
                                </div>
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
                    <GameCenter />
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
                    <div className="p-4 lg:p-6">
                        {/* Header Section */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-6 mb-6 text-white">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                <div className="mb-4 lg:mb-0">
                                    <h1 className="text-2xl lg:text-3xl font-bold mb-2">Thomas Chacko</h1>
                                    <p className="text-blue-100 text-lg mb-3">Front-End Developer</p>
                                    <div className="flex flex-wrap gap-4 text-sm">
                                        <div className="flex items-center">
                                            <FaMapPin className="mr-2" />
                                            Kochi, India
                                        </div>
                                        <div className="flex items-center">
                                            <FaPhone className="mr-2" />
                                            8330811956
                                        </div>
                                        <div className="flex items-center">
                                            <MdEmail className="mr-2" />
                                            thomaschacko180@gmail.com
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium hover:bg-blue-50 transition-colors flex items-center justify-center">
                                        <FaDownload className="mr-2" />
                                        Download Resume
                                    </button>
                                    <div className="flex gap-2">
                                        <a href="https://thomaschacko.com" className="bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded text-sm transition-colors flex items-center">
                                            <FaExternalLinkAlt className="mr-1" />
                                            Portfolio
                                        </a>
                                        <a href="https://linkedin.com/in/thomas-chacko" className="bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded text-sm transition-colors flex items-center">
                                            <FaLinkedin className="mr-1" />
                                            LinkedIn
                                        </a>
                                        <a href="https://github.com/thomas-chacko" className="bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded text-sm transition-colors flex items-center">
                                            <FaGithub className="mr-1" />
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Summary Section */}
                        <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <FaUser className="mr-3 text-blue-400" />
                                Professional Summary
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Self-taught Front-End Developer passionate about building responsive, user-friendly web applications.
                                Proficient in React.js, JavaScript, HTML, CSS, and Tailwind CSS, with expertise in component-based
                                architecture and state management. Dedicated to writing clean, efficient code, optimizing performance,
                                and continuous learning.
                            </p>
                        </div>

                        {/* Experience Section */}
                        <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                <FaBriefcase className="mr-3 text-green-400" />
                                Professional Experience
                            </h3>

                            <div className="border-l-4 border-blue-500 pl-6 relative">
                                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold text-white mb-2">Front End Developer</h4>
                                    <div className="flex flex-wrap items-center gap-4 mb-3">
                                        <span className="text-blue-400 font-medium">StratAgile, Kochi</span>
                                        <span className="bg-green-600 bg-opacity-20 text-green-400 px-2 py-1 rounded text-sm">On-site</span>
                                        <div className="flex items-center text-gray-400 text-sm">
                                            <FaCalendarAlt className="mr-1" />
                                            March 2024 – Present
                                        </div>
                                    </div>
                                    <ul className="text-gray-300 space-y-2 text-sm">
                                        <li>• Developed an HRMS application using React.js, integrating APIs and collaborating with backend teams to deliver a responsive, mobile-friendly solution</li>
                                        <li>• Built an AI-powered template generation application using Next.js with TypeScript and Tailwind CSS, implementing efficient state management</li>
                                        <li>• Designed an interactive internal platform using React.js, Tailwind CSS, and GSAP with Node.js and Express.js backend and MySQL database</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Projects Section */}
                        <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6 mb-6">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                                <FaCode className="mr-3 text-purple-400" />
                                Featured Projects
                            </h3>

                            <div className="space-y-6">
                                {/* Threads Clone */}
                                <div className="border border-gray-600 rounded-lg p-4">
                                    <h4 className="text-lg font-semibold text-white mb-2">Threads Clone</h4>
                                    <p className="text-gray-300 text-sm mb-3">
                                        Full-stack social media platform built with MERN stack, featuring user authentication,
                                        thread creation, and social interactions with secure JWT authentication and bcrypt password hashing.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-slate-600 bg-opacity-40 text-slate-300 px-2 py-1 rounded text-xs border border-slate-500">React.js</span>
                                        <span className="bg-emerald-700 bg-opacity-40 text-emerald-300 px-2 py-1 rounded text-xs border border-emerald-600">Node.js</span>
                                        <span className="bg-emerald-700 bg-opacity-40 text-emerald-300 px-2 py-1 rounded text-xs border border-emerald-600">MongoDB</span>
                                        <span className="bg-indigo-700 bg-opacity-40 text-indigo-300 px-2 py-1 rounded text-xs border border-indigo-600">Chakra UI</span>
                                    </div>
                                </div>

                                {/* Portfolio */}
                                <div className="border border-gray-600 rounded-lg p-4">
                                    <h4 className="text-lg font-semibold text-white mb-2">Personal Portfolio</h4>
                                    <p className="text-gray-300 text-sm mb-3">
                                        Responsive portfolio website built with Next.js and Tailwind CSS, deployed on Vercel
                                        for optimal performance and scalability.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-slate-600 bg-opacity-40 text-slate-300 px-2 py-1 rounded text-xs border border-slate-500">Next.js</span>
                                        <span className="bg-indigo-700 bg-opacity-40 text-indigo-300 px-2 py-1 rounded text-xs border border-indigo-600">Tailwind CSS</span>
                                        <span className="bg-amber-700 bg-opacity-40 text-amber-300 px-2 py-1 rounded text-xs border border-amber-600">Vercel</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Education & Skills */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Education */}
                            <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <FaGraduationCap className="mr-3 text-yellow-400" />
                                    Education
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-white">Full Stack Development Internship</h4>
                                        <p className="text-blue-400 text-sm">Luminar TechnoLab, Kochi</p>
                                        <p className="text-gray-400 text-sm">July 2023 – January 2024</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Bachelor of Computer Application (BCA)</h4>
                                        <p className="text-blue-400 text-sm">University of Kerala</p>
                                        <p className="text-gray-400 text-sm">June 2020 – March 2023</p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills */}
                            <div className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                    <FaTools className="mr-3 text-orange-400" />
                                    Technical Skills
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-300 mb-2">Frontend</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Redux'].map(skill => (
                                                <span key={skill} className="bg-slate-600 bg-opacity-40 text-slate-300 px-2 py-1 rounded text-xs border border-slate-500">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-300 mb-2">Styling & UI</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['Tailwind CSS', 'SASS', 'Bootstrap', 'Chakra UI', 'Material UI'].map(skill => (
                                                <span key={skill} className="bg-indigo-700 bg-opacity-40 text-indigo-300 px-2 py-1 rounded text-xs border border-indigo-600">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-300 mb-2">Backend & Database</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['Node.js', 'Express.js', 'MongoDB', 'MySQL'].map(skill => (
                                                <span key={skill} className="bg-emerald-700 bg-opacity-40 text-emerald-300 px-2 py-1 rounded text-xs border border-emerald-600">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-300 mb-2">Tools & Deployment</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['Git', 'GitHub', 'Vercel'].map(skill => (
                                                <span key={skill} className="bg-amber-700 bg-opacity-40 text-amber-300 px-2 py-1 rounded text-xs border border-amber-600">
                                                    {skill}
                                                </span>
                                            ))}
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
            id: 'my-works',
            name: 'Works',
            icon: suitcaseIcon,
            content: {
                title: 'My Works',
                type: 'portfolio',
                icon: suitcaseIcon,
                content: (
                    <div className="p-4 lg:p-8">
                        {/* Header Section */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 flex items-center">
                                        <FaBriefcase className="mr-3 text-blue-400" />
                                        My Portfolio
                                    </h2>
                                    <p className="text-gray-300 text-sm lg:text-base">
                                        A collection of my recent projects showcasing modern web development
                                    </p>
                                </div>
                                <div className="hidden lg:flex items-center gap-3">
                                    <div className="bg-blue-500 bg-opacity-20 px-4 py-2 rounded-lg border border-blue-400">
                                        <span className="text-blue-300 text-sm font-medium">{projects.length} Projects</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                        </div>

                        {/* Projects Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="group bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                                    style={{
                                        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                                    }}
                                >
                                    {/* Project Image */}
                                    <div className="relative h-48 lg:h-56 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Project Details */}
                                    <div className="p-6">
                                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm lg:text-base mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="bg-gray-700 bg-opacity-60 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600 hover:border-blue-400 hover:text-blue-300 transition-colors"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Links */}
                                        <div className="flex gap-3 pt-4 border-t border-gray-600">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center gap-2 text-sm"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FaExternalLinkAlt className="text-xs" /> View Live
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-gray-700 bg-opacity-60 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-600 transition-all flex items-center justify-center gap-2 text-sm border border-gray-600"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FaGithub className="text-sm" /> GitHub
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer Stats */}
                        <div className="mt-12 pt-8 border-t border-gray-600">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div className="bg-gradient-to-br from-blue-500 to-blue-600 bg-opacity-20 p-4 rounded-lg border border-blue-500 border-opacity-30 text-center">
                                    <div className="text-3xl font-bold text-blue-400 mb-1">{projects.length}</div>
                                    <div className="text-sm text-gray-300">Total Projects</div>
                                </div>
                                <div className="bg-gradient-to-br from-green-500 to-green-600 bg-opacity-20 p-4 rounded-lg border border-green-500 border-opacity-30 text-center">
                                    <div className="text-3xl font-bold text-green-400 mb-1">100%</div>
                                    <div className="text-sm text-gray-300">Responsive</div>
                                </div>
                                <div className="bg-gradient-to-br from-purple-500 to-purple-600 bg-opacity-20 p-4 rounded-lg border border-purple-500 border-opacity-30 text-center">
                                    <div className="text-3xl font-bold text-purple-400 mb-1">10+</div>
                                    <div className="text-sm text-gray-300">Technologies</div>
                                </div>
                                <div className="bg-gradient-to-br from-pink-500 to-pink-600 bg-opacity-20 p-4 rounded-lg border border-pink-500 border-opacity-30 text-center">
                                    <div className="text-3xl font-bold text-pink-400 mb-1">Live</div>
                                    <div className="text-sm text-gray-300">All Deployed</div>
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
                        <h3 className="text-lg lg:text-xl font-semibold mb-6 text-white">Personalization Settings</h3>
                        <div className="space-y-6">
                            {/* Wallpaper Customization */}
                            <div className="bg-gray-700 bg-opacity-50 p-4 lg:p-6 rounded-lg border border-gray-600">
                                <div className="flex items-center mb-4">
                                    <h4 className="font-semibold text-base lg:text-lg text-white">Wallpaper</h4>
                                </div>
                                <p className="text-sm text-gray-300 mb-4">Choose your desktop wallpaper</p>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                    {wallpapers.map((wallpaper) => (
                                        <div
                                            key={wallpaper.id}
                                            onClick={() => onChangeWallpaper(wallpaper.id)}
                                            className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                                                localStorage.getItem('selectedWallpaper') === wallpaper.id || (!localStorage.getItem('selectedWallpaper') && wallpaper.id === 'default')
                                                    ? `border-${currentTheme.id}-500 ring-2 ring-${currentTheme.id}-400 scale-105`
                                                    : 'border-gray-500 hover:border-gray-400'
                                            }`}
                                            style={{
                                                borderColor: localStorage.getItem('selectedWallpaper') === wallpaper.id || (!localStorage.getItem('selectedWallpaper') && wallpaper.id === 'default') ? currentTheme.color : undefined
                                            }}
                                        >
                                            <div className="aspect-video relative">
                                                {wallpaper.type === 'image' ? (
                                                    <img
                                                        src={wallpaper.image}
                                                        alt={wallpaper.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className={`w-full h-full ${wallpaper.gradient}`}></div>
                                                )}
                                                {(localStorage.getItem('selectedWallpaper') === wallpaper.id || (!localStorage.getItem('selectedWallpaper') && wallpaper.id === 'default')) && (
                                                    <div className="absolute top-1 right-1 bg-white rounded-full p-1">
                                                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentTheme.color }}></div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-2 bg-gray-800 bg-opacity-50">
                                                <p className="text-xs text-white text-center truncate">{wallpaper.name}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* System Info */}
                            <div className="bg-gray-700 bg-opacity-50 p-3 lg:p-4 rounded-lg border border-gray-600">
                                <div className="flex items-center mb-3">
                                    <div className="text-xl lg:text-2xl mr-3">⚙️</div>
                                    <h4 className="font-semibold text-sm lg:text-base text-white">System Information</h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                                        <p className="text-xs lg:text-sm font-medium text-white">Version</p>
                                        <p className="text-xs text-gray-300">Portfolio OS v1.0</p>
                                    </div>
                                    <div className="bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                                        <p className="text-xs lg:text-sm font-medium text-white">Build</p>
                                        <p className="text-xs text-gray-300">React 19.0.0</p>
                                    </div>
                                    <div className="bg-gray-600 bg-opacity-50 p-3 rounded border border-gray-500">
                                        <p className="text-xs lg:text-sm font-medium text-white">Last Updated</p>
                                        <p className="text-xs text-gray-300">Today</p>
                                    </div>
                                </div>
                            </div>

                            {/* Tips */}
                            <div className="bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-lg p-4">
                                <div className="flex items-start">
                                    <div className="text-2xl mr-3">💡</div>
                                    <div>
                                        <h5 className="font-semibold text-white mb-2">Personalization Tips</h5>
                                        <ul className="text-sm text-gray-300 space-y-1">
                                            <li>• Your preferences are automatically saved</li>
                                            <li>• Try different wallpapers to match your mood</li>
                                            <li>• Changes apply instantly across the portfolio</li>
                                        </ul>
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
                    <RecycleBinContent />
                )
            }
        },

    ]

    return (
        <div className="absolute inset-0 py-4 px-3">
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