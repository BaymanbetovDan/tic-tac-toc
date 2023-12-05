import React, { FC } from 'react';
import './Square.css'

interface ISquareProps {
    value: string | null
    onClick : () => void
}

const Square : FC<ISquareProps> = ({onClick,value}) => {
    return (
        <button className='square' onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;