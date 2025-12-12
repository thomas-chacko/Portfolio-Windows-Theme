import React, { useState } from 'react';
import {
    FaBriefcase, FaLaptopCode, FaDatabase, FaExternalLinkAlt, FaGithub
} from 'react-icons/fa';
import { frontendProjects, fullstackProjects, projects } from '../data/projects';

const WorksContent = () => {
    const [activeTab, setActiveTab] = useState('frontend');
    const currentProjects = activeTab === 'frontend' ? frontendProjects : fullstackProjects;

    return (
        <div className="p-4 lg:p-8">
            {/* Header Section */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 flex items-center">
                            <FaBriefcase className="mr-3 text-blue-400" />
                            My Works
                        </h2>
                        <p className="text-gray-300 text-sm lg:text-base">
                            A collection of my recent projects showcasing modern web development
                        </p>
                    </div>
                    <div className="hidden lg:flex items-center gap-3">
                        <div className="bg-gray-600 bg-opacity-30 px-4 py-2 rounded-lg border border-gray-500">
                            <span className="text-gray-300 text-sm font-medium">{currentProjects.length} Projects</span>
                        </div>
                    </div>
                </div>
                <div className="h-1 bg-gray-600 rounded-full"></div>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-end gap-4 mb-6">
                <button
                    onClick={() => setActiveTab('frontend')}
                    className={`px-8 py-3 cursor-pointer rounded-lg font-semibold transition-all duration-300 ${activeTab === 'frontend'
                        ? 'bg-blue-500 text-white shadow-lg scale-105'
                        : 'bg-gray-700 bg-opacity-50 text-gray-300 hover:bg-gray-600 border border-gray-600'
                        }`}
                >
                    <div className="flex items-center gap-2">
                        <FaLaptopCode className="text-lg" />
                        <span>Frontend</span>
                        <span className="text-xs bg-black text-white px-2 py-1 rounded-full font-bold">{frontendProjects.length}</span>
                    </div>
                </button>
                <button
                    onClick={() => setActiveTab('fullstack')}
                    className={`px-8 py-3 cursor-pointer rounded-lg font-semibold transition-all duration-300${activeTab === 'fullstack'
                        ? 'bg-purple-500 text-white shadow-lg scale-105'
                        : 'bg-gray-700 bg-opacity-50 text-gray-300 hover:bg-gray-600 border border-gray-600'
                        }`}
                >
                    <div className="flex items-center gap-2">
                        <FaDatabase className="text-lg" />
                        <span>Full Stack</span>
                        <span className="text-xs bg-black text-white px-2 py-1 rounded-full font-bold">{fullstackProjects.length}</span>
                    </div>
                </button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {currentProjects.map((project, index) => (
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
                            <p className="text-gray-300 text-sm lg:text-base mb-4">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="bg-gray-700 bg-opacity-60 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-600 hover:border-gray-500 hover:text-gray-200 transition-colors"
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
                                    className="flex-1 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-sm border border-gray-500"
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
                    <div className="bg-gray-600 bg-opacity-50 p-4 rounded-lg border border-gray-500 text-center">
                        <div className="text-3xl font-bold text-gray-200 mb-1">{projects.length}</div>
                        <div className="text-sm text-gray-300">Total Projects</div>
                    </div>
                    <div className="bg-gray-600 bg-opacity-50 p-4 rounded-lg border border-gray-500 text-center">
                        <div className="text-3xl font-bold text-gray-200 mb-1">100%</div>
                        <div className="text-sm text-gray-300">Responsive</div>
                    </div>
                    <div className="bg-gray-600 bg-opacity-50 p-4 rounded-lg border border-gray-500 text-center">
                        <div className="text-3xl font-bold text-gray-200 mb-1">10+</div>
                        <div className="text-sm text-gray-300">Technologies</div>
                    </div>
                    <div className="bg-gray-600 bg-opacity-50 p-4 rounded-lg border border-gray-500 text-center">
                        <div className="text-3xl font-bold text-gray-200 mb-1">Live</div>
                        <div className="text-sm text-gray-300">All Deployed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksContent;
