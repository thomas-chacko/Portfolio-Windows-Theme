import { useState, useEffect } from 'react'
import {
    FaFigma,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaDatabase,
    FaFolder,
    FaChevronDown,
    FaChevronRight,
    FaRecycle,
    FaBriefcase,
    FaUser,
    FaFileAlt,
    FaImages,
    FaCog,
    FaPowerOff,
    FaGitlab
} from 'react-icons/fa'
import {
    SiTypescript,
    SiNextdotjs,
    SiRedux,
    SiExpress,
    SiMongodb,
    SiMysql
} from 'react-icons/si'

const StartMenu = ({ isOpen, onClose }) => {
    const [expandedFolders, setExpandedFolders] = useState({
        'UI/UX': false,
        'Frontend Development': true,
        'Backend Development': true,
        'Databases': true,
        'Version Control & Collaboration': true
    })
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 768) // md breakpoint
        }

        checkDevice()
        window.addEventListener('resize', checkDevice)
        return () => window.removeEventListener('resize', checkDevice)
    }, [])

    const toggleFolder = (folderName) => {
        setExpandedFolders(prev => ({
            ...prev,
            [folderName]: !prev[folderName]
        }))
    }

    if (!isOpen) return null

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40"
                onClick={onClose}
            />

            {/* Start Menu - Responsive Design */}
            <div
                className={`fixed bottom-12 left-0 bg-black bg-opacity-90 backdrop-blur-sm shadow-2xl z-50 animate-slideInUp flex ${isMobile
                    ? 'w-full h-full inset-0 bottom-0'
                    : 'w-[600px]'
                    }`}
                style={!isMobile ? { height: '83vh' } : {}}
            >

                {/* Desktop Layout */}
                {!isMobile && (
                    <>
                        {/* Far Left - System Icons */}
                        <div className="w-12 bg-gray-900 bg-opacity-90 flex flex-col items-center py-4 space-y-4">
                            <div className="flex items-center justify-center w-10 h-10 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                <FaUser className="text-white text-lg" />
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                <FaFileAlt className="text-white text-lg" />
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                <FaImages className="text-white text-lg" />
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                <FaCog className="text-white text-lg" />
                            </div>
                            <div className="flex-1"></div>
                            <div className="flex items-center justify-center w-10 h-10 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                <FaPowerOff className="text-white text-lg" />
                            </div>
                        </div>

                        {/* Middle - Skills List */}
                        <div className="w-80 bg-gray-800 bg-opacity-90 flex flex-col">
                            {/* Header */}
                            <div className="px-4 py-3 flex items-center">
                                <div className="flex flex-col space-y-1 mr-3">
                                    <div className="w-4 h-0.5 bg-white"></div>
                                    <div className="w-4 h-0.5 bg-white"></div>
                                    <div className="w-4 h-0.5 bg-white"></div>
                                </div>
                                <span className="text-white text-sm font-normal">My Skills</span>
                            </div>

                            {/* Skills List */}
                            <div className="flex-1 overflow-y-auto start-menu-scroll">
                                {/* 1) UI/UX Folder */}
                                <div
                                    className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer"
                                    onClick={() => toggleFolder('UI/UX')}
                                >
                                    <FaFolder className="text-yellow-500 text-base mr-3" size={23} />
                                    <span className="text-white text-sm flex-1">UI/UX</span>
                                    {expandedFolders['UI/UX'] ? (
                                        <FaChevronDown className="text-gray-400 text-xs" />
                                    ) : (
                                        <FaChevronRight className="text-gray-400 text-xs" />
                                    )}
                                </div>

                                {/* UI/UX Skills */}
                                <div className={`grid transition-all duration-300 ease-in-out ${expandedFolders['UI/UX'] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="ml-6">
                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <FaFigma className="text-purple-500 text-base mr-3" size={22} />
                                                <span className="text-white text-sm">Figma</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2) Frontend Development Folder */}
                                <div
                                    className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer"
                                    onClick={() => toggleFolder('Frontend Development')}
                                >
                                    <FaFolder className="text-yellow-500 text-base mr-3" size={23} />
                                    <span className="text-white text-sm flex-1">Frontend Development</span>
                                    {expandedFolders['Frontend Development'] ? (
                                        <FaChevronDown className="text-gray-400 text-xs" />
                                    ) : (
                                        <FaChevronRight className="text-gray-400 text-xs" />
                                    )}
                                </div>

                                {/* Frontend Development Skills */}
                                <div className={`grid transition-all duration-300 ease-in-out ${expandedFolders['Frontend Development'] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="ml-6">
                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <FaHtml5 className="text-orange-500 text-base mr-3" size={22} />
                                                <span className="text-white text-sm">HTML</span>
                                            </div>
                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <FaCss3Alt className="text-blue-500 text-base mr-3" size={22} />
                                                <span className="text-white text-sm">CSS</span>
                                            </div>
                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <FaJs className="text-yellow-500 text-base mr-3" size={22} />
                                                <span className="text-white text-sm">JavaScript</span>
                                            </div>
                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <SiTypescript className="text-blue-600 text-base mr-3" size={22} />
                                                <span className="text-white text-sm">TypeScript</span>
                                            </div>
                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <FaReact className="text-cyan-500 text-base mr-3" size={22} />
                                                <span className="text-white text-sm">React.js</span>
                                            </div>
                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <SiNextdotjs className="text-white text-base mr-3" size={22} />
                                                <span className="text-white text-sm">Next.js</span>
                                            </div>
                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <SiRedux className="text-purple-600 text-base mr-3" size={22} />
                                                <span className="text-white text-sm">Redux</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3) Backend Development Folder */}
                                <div
                                    className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer"
                                    onClick={() => toggleFolder('Backend Development')}
                                >
                                    <FaFolder className="text-yellow-500 text-base mr-3" size={23} />
                                    <span className="text-white text-sm flex-1">Backend Development</span>
                                    {expandedFolders['Backend Development'] ? (
                                        <FaChevronDown className="text-gray-400 text-xs" />
                                    ) : (
                                        <FaChevronRight className="text-gray-400 text-xs" />
                                    )}
                                </div>

                                {/* Backend Development Skills */}
                                <div className={`grid transition-all duration-300 ease-in-out ${expandedFolders['Backend Development'] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="ml-6">
                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <FaNodeJs className="text-green-600 text-base mr-3" size={22} />
                                                <span className="text-white text-sm">Node.js</span>
                                            </div>
                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <SiExpress className="text-gray-300 text-base mr-3" size={22} />
                                                <span className="text-white text-sm">Express.js</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 4) Databases Folder */}
                                <div
                                    className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer"
                                    onClick={() => toggleFolder('Databases')}
                                >
                                    <FaFolder className="text-yellow-500 text-base mr-3" size={23} />
                                    <span className="text-white text-sm flex-1">Databases</span>
                                    {expandedFolders['Databases'] ? (
                                        <FaChevronDown className="text-gray-400 text-xs" />
                                    ) : (
                                        <FaChevronRight className="text-gray-400 text-xs" />
                                    )}
                                </div>

                                {/* Database Skills */}
                                <div className={`grid transition-all duration-300 ease-in-out ${expandedFolders['Databases'] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="ml-6">
                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <SiMongodb className="text-green-500 text-base mr-3" size={22} />
                                                <span className="text-white text-sm">MongoDB</span>
                                            </div>
                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <SiMysql className="text-blue-600 text-base mr-3" size={22} />
                                                <span className="text-white text-sm">MySQL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 5) Version Control & Collaboration Folder */}
                                <div
                                    className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer"
                                    onClick={() => toggleFolder('Version Control & Collaboration')}
                                >
                                    <FaFolder className="text-yellow-500 text-base mr-3" size={23} />
                                    <span className="text-white text-sm flex-1">Version Control & Collaboration</span>
                                    {expandedFolders['Version Control & Collaboration'] ? (
                                        <FaChevronDown className="text-gray-400 text-xs" />
                                    ) : (
                                        <FaChevronRight className="text-gray-400 text-xs" />
                                    )}
                                </div>

                                {/* Version Control Skills */}
                                <div className={`grid transition-all duration-300 ease-in-out ${expandedFolders['Version Control & Collaboration'] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="ml-6">
                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <FaGitAlt className="text-[#F1502F] text-base mr-3" size={22} />
                                                <span className="text-white text-sm">Git</span>
                                            </div>

                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <FaGithub className="text-white text-base mr-3" size={22} />
                                                <span className="text-white text-sm">GitHub</span>
                                            </div>

                                            <div className="flex items-center px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer">
                                                <FaGitlab className="text-[#FC6D26] text-base mr-3" size={22} />
                                                <span className="text-white text-sm">GitLab</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Right Side - Tiles */}
                        <div className="flex-1 bg-gray-700 bg-opacity-60 p-6">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Row 1 */}
                                <div className="bg-gray-600 bg-opacity-50 hover:bg-opacity-70 cursor-pointer transition-all duration-200 flex flex-col items-center justify-center p-4 rounded h-20">
                                    <FaRecycle className="text-2xl text-gray-300 mb-1" />
                                    <span className="text-white text-xs text-center">Recycle</span>
                                </div>
                                <div className="bg-gray-600 bg-opacity-50 hover:bg-opacity-70 cursor-pointer transition-all duration-200 flex flex-col items-center justify-center p-4 rounded h-20">
                                    <FaBriefcase className="text-2xl text-orange-400 mb-1" />
                                    <span className="text-white text-xs text-center">Works</span>
                                </div>

                                {/* Row 2 */}
                                <div className="bg-gray-600 bg-opacity-50 hover:bg-opacity-70 cursor-pointer transition-all duration-200 flex flex-col items-center justify-center p-4 rounded h-20">
                                    <FaFileAlt className="text-2xl text-amber-600 mb-1" />
                                    <span className="text-white text-xs text-center">Careers</span>
                                </div>
                                <div className="bg-gray-600 bg-opacity-50 hover:bg-opacity-70 cursor-pointer transition-all duration-200 flex flex-col items-center justify-center p-4 rounded h-20">
                                    <FaCog className="text-2xl text-cyan-400 mb-1" />
                                    <span className="text-white text-xs text-center">Vision</span>
                                </div>

                                {/* Row 3 */}
                                <div className="bg-gray-600 bg-opacity-50 hover:bg-opacity-70 cursor-pointer transition-all duration-200 flex flex-col items-center justify-center p-4 rounded h-20">
                                    <FaFileAlt className="text-2xl text-purple-400 mb-1" />
                                    <span className="text-white text-xs text-center">Resume</span>
                                </div>
                                <div className="bg-gray-600 bg-opacity-50 hover:bg-opacity-70 cursor-pointer transition-all duration-200 flex flex-col items-center justify-center p-4 rounded h-20">
                                    <FaUser className="text-2xl text-red-400 mb-1" />
                                    <span className="text-white text-xs text-center">Profile</span>
                                </div>

                                {/* Row 4 - Single tile centered */}
                                <div className="col-span-1 bg-gray-600 bg-opacity-50 hover:bg-opacity-70 cursor-pointer transition-all duration-200 flex flex-col items-center justify-center p-4 rounded h-20">
                                    <FaImages className="text-2xl text-blue-500 mb-1" />
                                    <span className="text-white text-xs text-center">Gallery</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Mobile Layout - Just Skills Section */}
                {isMobile && (
                    <div className="w-full bg-gray-800 bg-opacity-90 flex flex-col">
                        {/* Header */}
                        <div className="px-4 py-3 flex items-center border-b border-gray-600">
                            <div className="flex flex-col space-y-1 mr-3">
                                <div className="w-4 h-0.5 bg-white"></div>
                                <div className="w-4 h-0.5 bg-white"></div>
                                <div className="w-4 h-0.5 bg-white"></div>
                            </div>
                            <span className="text-white text-base font-normal">My Skills</span>
                        </div>

                        {/* Skills List - Mobile Optimized */}
                        <div className="flex-1 overflow-y-auto start-menu-scroll p-2">
                            {/* 1) UI/UX Folder */}
                            <div
                                className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded"
                                onClick={() => toggleFolder('UI/UX')}
                            >
                                <FaFolder className="text-yellow-500 text-lg mr-4" />
                                <span className="text-white text-base flex-1">UI/UX</span>
                                {expandedFolders['UI/UX'] ? (
                                    <FaChevronDown className="text-gray-400 text-sm" />
                                ) : (
                                    <FaChevronRight className="text-gray-400 text-sm" />
                                )}
                            </div>

                            {/* UI/UX Skills */}
                            <div className={`grid transition-all duration-300 ease-in-out ${expandedFolders['UI/UX'] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="ml-8">
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <FaFigma className="text-purple-500 text-lg mr-4" />
                                            <span className="text-white text-base">Figma</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2) Frontend Development Folder */}
                            <div
                                className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded"
                                onClick={() => toggleFolder('Frontend Development')}
                            >
                                <FaFolder className="text-yellow-500 text-lg mr-4" />
                                <span className="text-white text-base flex-1">Frontend Development</span>
                                {expandedFolders['Frontend Development'] ? (
                                    <FaChevronDown className="text-gray-400 text-sm" />
                                ) : (
                                    <FaChevronRight className="text-gray-400 text-sm" />
                                )}
                            </div>

                            {/* Frontend Development Skills */}
                            <div className={`grid transition-all duration-300 ease-in-out ${expandedFolders['Frontend Development'] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="ml-8">
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <FaHtml5 className="text-orange-500 text-lg mr-4" />
                                            <span className="text-white text-base">HTML</span>
                                        </div>
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <FaCss3Alt className="text-blue-500 text-lg mr-4" />
                                            <span className="text-white text-base">CSS</span>
                                        </div>
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <FaJs className="text-yellow-500 text-lg mr-4" />
                                            <span className="text-white text-base">JavaScript</span>
                                        </div>
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <SiTypescript className="text-blue-600 text-lg mr-4" />
                                            <span className="text-white text-base">TypeScript</span>
                                        </div>
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <FaReact className="text-cyan-500 text-lg mr-4" />
                                            <span className="text-white text-base">React.js</span>
                                        </div>
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <SiNextdotjs className="text-white text-lg mr-4" />
                                            <span className="text-white text-base">Next.js</span>
                                        </div>
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <SiRedux className="text-purple-600 text-lg mr-4" />
                                            <span className="text-white text-base">Redux</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3) Backend Development Folder */}
                            <div
                                className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded"
                                onClick={() => toggleFolder('Backend Development')}
                            >
                                <FaFolder className="text-yellow-500 text-lg mr-4" />
                                <span className="text-white text-base flex-1">Backend Development</span>
                                {expandedFolders['Backend Development'] ? (
                                    <FaChevronDown className="text-gray-400 text-sm" />
                                ) : (
                                    <FaChevronRight className="text-gray-400 text-sm" />
                                )}
                            </div>

                            {/* Backend Development Skills */}
                            <div className={`grid transition-all duration-300 ease-in-out ${expandedFolders['Backend Development'] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="ml-8">
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <FaNodeJs className="text-green-600 text-lg mr-4" />
                                            <span className="text-white text-base">Node.js</span>
                                        </div>
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <SiExpress className="text-gray-300 text-lg mr-4" />
                                            <span className="text-white text-base">Express.js</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 4) Databases Folder */}
                            <div
                                className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded"
                                onClick={() => toggleFolder('Databases')}
                            >
                                <FaFolder className="text-yellow-500 text-lg mr-4" />
                                <span className="text-white text-base flex-1">Databases</span>
                                {expandedFolders['Databases'] ? (
                                    <FaChevronDown className="text-gray-400 text-sm" />
                                ) : (
                                    <FaChevronRight className="text-gray-400 text-sm" />
                                )}
                            </div>

                            {/* Database Skills */}
                            <div className={`grid transition-all duration-300 ease-in-out ${expandedFolders['Databases'] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="ml-8">
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <SiMongodb className="text-green-500 text-lg mr-4" />
                                            <span className="text-white text-base">MongoDB</span>
                                        </div>
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <SiMysql className="text-blue-600 text-lg mr-4" />
                                            <span className="text-white text-base">MySQL</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 5) Version Control & Collaboration Folder */}
                            <div
                                className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded"
                                onClick={() => toggleFolder('Version Control & Collaboration')}
                            >
                                <FaFolder className="text-yellow-500 text-lg mr-4" />
                                <span className="text-white text-base flex-1">Version Control & Collaboration</span>
                                {expandedFolders['Version Control & Collaboration'] ? (
                                    <FaChevronDown className="text-gray-400 text-sm" />
                                ) : (
                                    <FaChevronRight className="text-gray-400 text-sm" />
                                )}
                            </div>

                            {/* Version Control Skills */}
                            <div className={`grid transition-all duration-300 ease-in-out ${expandedFolders['Version Control & Collaboration'] ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="ml-8">
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <FaGitAlt className="text-orange-600 text-lg mr-4" />
                                            <span className="text-white text-base">Git</span>
                                        </div>
                                        <div className="flex items-center px-4 py-3 hover:bg-gray-700 hover:bg-opacity-50 cursor-pointer rounded">
                                            <FaGithub className="text-white text-lg mr-4" />
                                            <span className="text-white text-base">GitHub</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default StartMenu