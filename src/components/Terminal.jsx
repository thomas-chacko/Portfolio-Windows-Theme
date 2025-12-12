import React, { useState, useEffect, useRef } from 'react'
import { FaTerminal } from 'react-icons/fa'

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'output', text: 'Portfolio Terminal [Version 1.0.0]' },
        { type: 'output', text: '(c) Thomas Chacko. All rights reserved.' },
        { type: 'output', text: '' },
        { type: 'output', text: 'Type "help" for available commands.' },
        { type: 'output', text: '' }
    ])
    const [currentInput, setCurrentInput] = useState('')
    const [commandHistory, setCommandHistory] = useState([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const terminalEndRef = useRef(null)
    const inputRef = useRef(null)

    const commands = {
        help: {
            description: 'Display available commands',
            execute: () => [
                'Available commands:',
                '  help       - Display this help message',
                '  about      - About Thomas Chacko',
                '  skills     - List technical skills',
                '  projects   - View featured projects',
                '  contact    - Get contact information',
                '  education  - View education background',
                '  experience - View work experience',
                '  social     - Social media links',
                '  clear      - Clear terminal screen',
                '  date       - Display current date and time',
                '  echo       - Echo a message (usage: echo <message>)',
                ''
            ]
        },
        about: {
            description: 'About Thomas Chacko',
            execute: () => [
                '╔════════════════════════════════════════════════════════╗',
                '║                   THOMAS CHACKO                        ║',
                '║                Front-End Developer                     ║',
                '╚════════════════════════════════════════════════════════╝',
                '',
                'Self-taught Front-End Developer passionate about building',
                'responsive, user-friendly web applications. Proficient in',
                'React.js, JavaScript, and modern web technologies.',
                '',
                'Location: Kochi, Kerala, India',
                'Experience: 2 years',
                ''
            ]
        },
        skills: {
            description: 'List technical skills',
            execute: () => [
                'TECHNICAL SKILLS:',
                '',
                '├─ Frontend:',
                '│  ├─ HTML5, CSS3, JavaScript (ES6+)',
                '│  ├─ TypeScript',
                '│  ├─ React.js, Next.js',
                '│  └─ Redux, Context API',
                '│',
                '├─ Styling & UI:',
                '│  ├─ Tailwind CSS',
                '│  ├─ SASS/SCSS',
                '│  ├─ Bootstrap',
                '│  ├─ Chakra UI',
                '│  └─ Material UI',
                '│',
                '├─ Backend:',
                '│  ├─ Node.js, Express.js',
                '│  └─ MongoDB, MySQL',
                '│',
                '└─ Tools & Others:',
                '   ├─ Git, GitHub',
                '   ├─ VS Code',
                '   ├─ Figma',
                '   └─ Vercel, Netlify',
                ''
            ]
        },
        projects: {
            description: 'View featured projects',
            execute: () => [
                'FEATURED PROJECTS:',
                '',
                '1. Threads Clone',
                '   Full-stack social media platform built with MERN stack',
                '   Tech: React.js, Node.js, MongoDB, Chakra UI',
                '   Features: User auth, thread creation, social interactions',
                '',
                '2. Personal Portfolio',
                '   Responsive portfolio website with modern design',
                '   Tech: Next.js, Tailwind CSS, Vercel',
                '   Features: Project showcase, contact form, blog',
                '',
                '3. HRMS Application',
                '   Human Resource Management System',
                '   Tech: React.js, API Integration',
                '   Features: Employee management, responsive design',
                ''
            ]
        },
        contact: {
            description: 'Get contact information',
            execute: () => [
                'CONTACT INFORMATION:',
                '',
                '📧 Email:    thomaschacko180@gmail.com',
                '📱 Phone:    +91 8330811956',
                '📍 Location: Kochi, Kerala, India',
                '',
                'Feel free to reach out for collaborations or opportunities!',
                ''
            ]
        },
        education: {
            description: 'View education background',
            execute: () => [
                'EDUCATION:',
                '',
                '🎓 Full Stack Development Internship',
                '   Luminar TechnoLab, Kochi',
                '   July 2023 – January 2024',
                '',
                '🎓 Bachelor of Computer Application (BCA)',
                '   University of Kerala',
                '   June 2020 – March 2023',
                ''
            ]
        },
        experience: {
            description: 'View work experience',
            execute: () => [
                'WORK EXPERIENCE:',
                '',
                '💼 Front End Developer',
                '   StratAgile, Kochi',
                '   March 2024 – Present (On-site)',
                '',
                '   • Developed HRMS application using React.js',
                '   • Built AI-powered template generation app with Next.js',
                '   • Designed interactive internal platform with GSAP',
                ''
            ]
        },
        social: {
            description: 'Social media links',
            execute: () => [
                'SOCIAL MEDIA:',
                '',
                '🔗 LinkedIn:  linkedin.com/in/thomas-chacko-7003a9283/',
                '🐙 GitHub:    github.com/thomas-chacko',
                '📘 Facebook:  facebook.com/thomas chacko',
                '📷 Instagram: instagram.com/thomaschacko.in',
                ''
            ]
        },
        clear: {
            description: 'Clear terminal screen',
            execute: () => 'CLEAR'
        },
        date: {
            description: 'Display current date and time',
            execute: () => [
                new Date().toString(),
                ''
            ]
        },
        echo: {
            description: 'Echo a message',
            execute: (args) => [
                args.join(' '),
                ''
            ]
        }
    }

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [history])

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim()
        if (!trimmedCmd) return

        // Add command to history
        setHistory(prev => [...prev, { type: 'input', text: trimmedCmd }])
        setCommandHistory(prev => [...prev, trimmedCmd])
        setHistoryIndex(-1)

        // Parse command and arguments
        const parts = trimmedCmd.split(' ')
        const command = parts[0].toLowerCase()
        const args = parts.slice(1)

        // Execute command
        if (commands[command]) {
            const output = commands[command].execute(args)
            if (output === 'CLEAR') {
                setHistory([])
            } else {
                setHistory(prev => [
                    ...prev,
                    ...output.map(line => ({ type: 'output', text: line }))
                ])
            }
        } else {
            setHistory(prev => [
                ...prev,
                { type: 'error', text: `'${command}' is not recognized as a command. Type 'help' for available commands.` },
                { type: 'output', text: '' }
            ])
        }

        setCurrentInput('')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(currentInput)
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            if (commandHistory.length > 0) {
                const newIndex = historyIndex === -1
                    ? commandHistory.length - 1
                    : Math.max(0, historyIndex - 1)
                setHistoryIndex(newIndex)
                setCurrentInput(commandHistory[newIndex])
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            if (historyIndex !== -1) {
                const newIndex = historyIndex + 1
                if (newIndex >= commandHistory.length) {
                    setHistoryIndex(-1)
                    setCurrentInput('')
                } else {
                    setHistoryIndex(newIndex)
                    setCurrentInput(commandHistory[newIndex])
                }
            }
        }
    }

    const handleTerminalClick = () => {
        inputRef.current?.focus()
    }

    return (
        <div
            className="h-full bg-black p-4 font-mono text-sm overflow-y-auto cursor-text"
            onClick={handleTerminalClick}
        >
            <div className="text-green-400">
                {history.map((entry, index) => (
                    <div key={index} className="mb-1">
                        {entry.type === 'input' ? (
                            <div className="flex">
                                <span className="text-yellow-400 mr-2">C:\Portfolio&gt;</span>
                                <span className="text-white">{entry.text}</span>
                            </div>
                        ) : entry.type === 'error' ? (
                            <div className="text-red-400">{entry.text}</div>
                        ) : (
                            <div className="text-green-400">{entry.text}</div>
                        )}
                    </div>
                ))}

                {/* Current Input Line */}
                <div className="flex">
                    <span className="text-yellow-400 mr-2">C:\Portfolio&gt;</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent outline-none text-white caret-green-400"
                        spellCheck="false"
                        autoComplete="off"
                    />
                </div>

                <div ref={terminalEndRef} />
            </div>
        </div>
    )
}

export default Terminal
