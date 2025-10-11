import { useState, useEffect } from 'react'

const MemoryGame = () => {
  const emojis = ['🎮', '🎯', '🎲', '🎪', '🎨', '🎭', '🎸', '🎺']
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const [gameWon, setGameWon] = useState(false)

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const shuffledCards = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji }))
    
    setCards(shuffledCards)
    setFlipped([])
    setMatched([])
    setMoves(0)
    setGameWon(false)
  }

  const handleCardClick = (id) => {
    if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) return

    const newFlipped = [...flipped, id]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      const [first, second] = newFlipped
      const firstCard = cards.find(card => card.id === first)
      const secondCard = cards.find(card => card.id === second)

      if (firstCard.emoji === secondCard.emoji) {
        setMatched([...matched, first, second])
        setFlipped([])
        
        if (matched.length + 2 === cards.length) {
          setGameWon(true)
        }
      } else {
        setTimeout(() => setFlipped([]), 1000)
      }
    }
  }

  return (
    <div className="flex flex-col items-center p-6">
      <div className="mb-6 flex items-center justify-between w-full max-w-xs">
        <div className="bg-gray-600 bg-opacity-50 px-4 py-2 rounded">
          <span className="text-sm text-gray-300">Moves: </span>
          <span className="text-white font-semibold">{moves}</span>
        </div>
        {gameWon && (
          <div className="bg-green-600 bg-opacity-20 border border-green-500 px-4 py-2 rounded">
            <span className="text-green-400 font-semibold">Won in {moves}!</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-2 mb-6 bg-gray-600 bg-opacity-30 p-3 rounded-lg">
        {cards.map((card) => (
          <button
            key={card.id}
            className={`w-14 h-14 text-xl rounded transition-all duration-300 cursor-pointer ${
              flipped.includes(card.id) || matched.includes(card.id)
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-500'
            }`}
            onClick={() => handleCardClick(card.id)}
          >
            {flipped.includes(card.id) || matched.includes(card.id) ? card.emoji : '?'}
          </button>
        ))}
      </div>

      <button
        onClick={initializeGame}
        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded font-medium transition-colors cursor-pointer"
      >
        New Game
      </button>
    </div>
  )
}

export default MemoryGame