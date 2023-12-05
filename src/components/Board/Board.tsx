import React, { FC } from 'react';
import './Board.css'
import Square from '../Square/Square';

interface IBoard {
    squares: Array<string|null>
    click :(index : number) => void
}

const Board : FC<IBoard> = ({click,squares}) => {
    return (
        <div className='board'>
            {
                squares.map((square,index)=>(
                    <Square key={index} value ={square} onClick = {()=>click(index)}/>
                ))
            }
        </div>
    );
};

export default Board;