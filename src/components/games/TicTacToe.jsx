import { useState } from 'react'

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [winner, setWinner] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ]
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (index) => {
    if (board[index] || winner || gameOver) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? 'X' : 'O'
    setBoard(newBoard)

    const gameWinner = checkWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
      setGameOver(true)
    } else if (newBoard.every(square => square !== null)) {
      setGameOver(true)
    } else {
      setIsXNext(!isXNext)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
    setGameOver(false)
  }

  const renderSquare = (index) => (
    <button
      key={index}
      className="w-16 h-16 bg-gray-800 hover:bg-gray-700 text-2xl font-bold text-white transition-colors rounded cursor-pointer"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  )

  return (
    <div className="flex flex-col items-center p-6">
      <div className="mb-6 text-center">
        {winner ? (
          <div className="bg-green-600 bg-opacity-20 border border-green-500 rounded-lg p-4">
            <p className="text-lg font-semibold text-green-400">Player {winner} Wins!</p>
          </div>
        ) : gameOver ? (
          <div className="bg-yellow-600 bg-opacity-20 border border-yellow-500 rounded-lg p-4">
            <p className="text-lg font-semibold text-yellow-400">It's a Draw!</p>
          </div>
        ) : (
          <div className="bg-blue-600 bg-opacity-20 border border-blue-500 rounded-lg p-4">
            <p className="text-lg font-semibold text-blue-400">Player {isXNext ? 'X' : 'O'}'s Turn</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-1 mb-6 bg-gray-600 p-2 rounded-lg">
        {Array(9).fill(null).map((_, index) => renderSquare(index))}
      </div>

      <button
        onClick={resetGame}
        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded font-medium transition-colors cursor-pointer"
      >
        New Game
      </button>
    </div>
  )
}

export default TicTacToe