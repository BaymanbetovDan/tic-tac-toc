import React, { useState } from 'react';
import './Game.css'
import Board from '../Board/Board';
import { calculateWinner } from '../../helper';

const Game = () => {
    const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState<boolean>(true)
    const [draw, setDraw] = useState<boolean>(false)
    const winner = calculateWinner(board)

    const handleClick = (index: number) => {
        const boardCopy = [...board]
        if (winner || boardCopy[index]) return

        boardCopy[index] = xIsNext ? 'X' : 'O'

        setBoard(boardCopy)
        setXisNext(!xIsNext)
    }
    React.useEffect(() => {
        
        if (board.every((el) => el !== winner)===draw){
            return setDraw(false)
        }


    }, [])

    const startNewGame = () => {
        return (
            <button className='reset-btn' onClick={() => setBoard(Array(9).fill(null))}>Начать новую игру</button>
        )

    }

    return (
        <div className='wrapper'>
            {startNewGame()}
            <Board squares={board} click={handleClick} />
            <p className='game-info'>
                {winner ? 'Победитель ' + winner : 'Ходит ' + (xIsNext ? 'X' : 'O')}
            </p>
        </div>
    );
};

export default Game;