import { useState } from 'react'
import TicTacToe from './games/TicTacToe'
import MemoryGame from './games/MemoryGame'
import NumberGuessing from './games/NumberGuessing'
import {
  FaGamepad,
  FaArrowLeft,
  FaTh,
  FaBrain,
  FaBullseye,
  FaPlay,
  FaTrophy,
  FaBolt,
  FaPalette,
  FaMobile
} from 'react-icons/fa'

const GameCenter = () => {
  const [selectedGame, setSelectedGame] = useState(null)

  const games = [
    {
      id: 'tic-tac-toe',
      name: 'Tic Tac Toe',
      description: 'Classic 3x3 grid strategy game for two players',
      icon: FaTh,
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      component: TicTacToe
    },
    {
      id: 'memory-game',
      name: 'Memory Game',
      description: 'Test your memory by matching card pairs',
      icon: FaBrain,
      bgColor: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700',
      component: MemoryGame
    },
    {
      id: 'number-guessing',
      name: 'Number Guessing',
      description: 'Guess the secret number between 1 and 100',
      icon: FaBullseye,
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      component: NumberGuessing
    }
  ]

  const handleGameSelect = (gameId) => {
    setSelectedGame(gameId)
  }

  const handleBackToMenu = () => {
    setSelectedGame(null)
  }

  if (selectedGame) {
    const game = games.find(g => g.id === selectedGame)
    const GameComponent = game.component

    return (
      <div className="p-4 lg:p-6">
        <div className="flex items-center mb-6">
          <button
            onClick={handleBackToMenu}
            className="bg-gray-600 cursor-pointer hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center mr-4"
          >
            <FaArrowLeft className="mr-2" />
            Back to Games
          </button>
          <h2 className="text-xl lg:text-2xl font-bold text-white">{game.name}</h2>
        </div>

        <div className="bg-gray-700 bg-opacity-50 rounded-lg border border-gray-600">
          <GameComponent />
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 lg:p-6">
      {/* Header */}
      <div className="flex items-center mb-6 pb-4 border-b border-gray-600">
        <FaGamepad className="text-2xl text-blue-400 mr-3" />
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-white">Game Center</h3>
          <p className="text-sm text-gray-400">Choose a game to play</p>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        {games.map((game) => {
          const IconComponent = game.icon
          return (
            <div
              key={game.id}
              className="bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg p-6 hover:bg-gray-600 hover:bg-opacity-50 transition-all duration-200"
            >
              <div className="flex items-start mb-4">
                <div className={`${game.bgColor} p-3 rounded-lg mr-4`}>
                  <IconComponent className="text-white text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-1">{game.name}</h4>
                  <p className="text-sm text-gray-300 leading-relaxed">{game.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 uppercase tracking-wide">Interactive Game</span>
                <button
                  onClick={() => handleGameSelect(game.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center cursor-pointer"
                >
                  <FaPlay className="mr-2 text-xs" />
                  Play Now
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* More Games Coming Soon Section */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 bg-opacity-50 border border-gray-600 rounded-lg p-6 mb-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-purple-600 p-4 rounded-full">
              <FaGamepad className="text-white text-2xl" />
            </div>
          </div>
          <h4 className="text-xl font-bold text-white mb-2">More Games Coming Soon!</h4>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We're working on exciting new games to add to the collection. Stay tuned for more interactive experiences!
          </p>

          {/* Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-600 bg-opacity-30 border border-gray-500 border-dashed rounded-lg p-4">
              <div className="text-3xl mb-2 opacity-50">🐍</div>
              <h5 className="font-medium text-gray-400 mb-1">Snake Game</h5>
              <p className="text-xs text-gray-500">Classic arcade snake game</p>
              <div className="mt-3">
                <span className="bg-yellow-600 bg-opacity-20 text-yellow-400 px-2 py-1 rounded text-xs">
                  In Development
                </span>
              </div>
            </div>

            <div className="bg-gray-600 bg-opacity-30 border border-gray-500 border-dashed rounded-lg p-4">
              <div className="text-3xl mb-2 opacity-50">🧩</div>
              <h5 className="font-medium text-gray-400 mb-1">Puzzle Solver</h5>
              <p className="text-xs text-gray-500">Interactive sliding puzzle</p>
              <div className="mt-3">
                <span className="bg-orange-600 bg-opacity-20 text-orange-400 px-2 py-1 rounded text-xs">
                  Planning
                </span>
              </div>
            </div>

            <div className="bg-gray-600 bg-opacity-30 border border-gray-500 border-dashed rounded-lg p-4">
              <div className="text-3xl mb-2 opacity-50">🎲</div>
              <h5 className="font-medium text-gray-400 mb-1">Dice Roller</h5>
              <p className="text-xs text-gray-500">Virtual dice for board games</p>
              <div className="mt-3">
                <span className="bg-blue-600 bg-opacity-20 text-blue-400 px-2 py-1 rounded text-xs">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-gray-600 text-gray-300 px-6 py-2 rounded font-medium cursor-not-allowed opacity-50">
              More Games Coming Soon
            </button>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gray-700 bg-opacity-30 border border-gray-600 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <FaTrophy className="text-xl text-yellow-400 mr-3" />
          <h4 className="text-lg font-semibold text-white">Game Features</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start">
            <div className="bg-orange-600 p-2 rounded mr-3 flex-shrink-0">
              <FaBolt className="text-white text-sm" />
            </div>
            <div>
              <h5 className="font-medium text-white mb-1">Fast Performance</h5>
              <p className="text-sm text-gray-400">Optimized React components for smooth gameplay</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-purple-600 p-2 rounded mr-3 flex-shrink-0">
              <FaPalette className="text-white text-sm" />
            </div>
            <div>
              <h5 className="font-medium text-white mb-1">Clean Design</h5>
              <p className="text-sm text-gray-400">Minimalist interface focused on gameplay</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-600 p-2 rounded mr-3 flex-shrink-0">
              <FaMobile className="text-white text-sm" />
            </div>
            <div>
              <h5 className="font-medium text-white mb-1">Responsive</h5>
              <p className="text-sm text-gray-400">Works perfectly on desktop and mobile devices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCenter