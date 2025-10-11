import { useState, useEffect } from 'react'

const NumberGuessing = () => {
  const [targetNumber, setTargetNumber] = useState(0)
  const [guess, setGuess] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [message, setMessage] = useState('')
  const [gameWon, setGameWon] = useState(false)
  const [gameHistory, setGameHistory] = useState([])

  useEffect(() => {
    startNewGame()
  }, [])

  const startNewGame = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1
    setTargetNumber(newNumber)
    setGuess('')
    setAttempts(0)
    setMessage('Guess a number between 1 and 100!')
    setGameWon(false)
    setGameHistory([])
  }

  const handleGuess = () => {
    const guessNumber = parseInt(guess)
    
    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
      setMessage('Please enter a valid number between 1 and 100!')
      return
    }

    const newAttempts = attempts + 1
    setAttempts(newAttempts)
    
    const newHistory = [...gameHistory, { guess: guessNumber, attempt: newAttempts }]
    setGameHistory(newHistory)

    if (guessNumber === targetNumber) {
      setMessage(`🎉 Congratulations! You guessed it in ${newAttempts} attempts!`)
      setGameWon(true)
    } else if (guessNumber < targetNumber) {
      setMessage('📈 Too low! Try a higher number.')
    } else {
      setMessage('📉 Too high! Try a lower number.')
    }

    setGuess('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGuess()
    }
  }

  return (
    <div className="flex flex-col items-center p-6">
      <div className="mb-6 text-center">
        <div className="bg-gray-600 bg-opacity-50 px-4 py-2 rounded mb-3">
          <span className="text-sm text-gray-300">Attempts: </span>
          <span className="text-white font-semibold">{attempts}</span>
        </div>
        <div className={`p-4 rounded-lg border ${gameWon ? 'bg-green-600 bg-opacity-20 border-green-500' : 'bg-blue-600 bg-opacity-20 border-blue-500'}`}>
          <p className={`text-sm ${gameWon ? 'text-green-400' : 'text-blue-400'}`}>
            {message}
          </p>
        </div>
      </div>

      {!gameWon && (
        <div className="mb-6 w-full max-w-sm">
          <div className="flex gap-2">
            <input
              type="number"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="1-100"
              min="1"
              max="100"
              className="flex-1 px-4 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-400 focus:outline-none"
            />
            <button
              onClick={handleGuess}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition-colors cursor-pointer"
            >
              Guess
            </button>
          </div>
        </div>
      )}

      {gameHistory.length > 0 && (
        <div className="mb-6 w-full max-w-sm">
          <h4 className="text-sm font-medium text-gray-300 mb-2">Previous Guesses:</h4>
          <div className="bg-gray-700 bg-opacity-50 rounded p-3 max-h-24 overflow-y-auto">
            <div className="flex flex-wrap gap-2">
              {gameHistory.map((entry, index) => (
                <span key={index} className="bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs">
                  {entry.guess}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={startNewGame}
        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded font-medium transition-colors cursor-pointer"
      >
        New Game
      </button>
    </div>
  )
}

export default NumberGuessing