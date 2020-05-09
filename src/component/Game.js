import React, { useState } from 'react';
import Tile from './Tile';
import '../App.css';
import StyleConstants from '../constants/StyleConstants';
import Constants from '../constants/Constants';

const Game = () => {
    const [state, setState] = useState({
        boardArray: Array(Constants.NUMBER_OF_TILES).fill('')
    });

    const renderBoard = () => {
        let tileList = [];
        for (let position = 0; position < Constants.NUMBER_OF_TILES; position++) {
            tileList.push(<li key={position}>
                <Tile onClick={() => handleTileClick(position)} value={state.boardArray[position]} />
            </li>);
        }
        return tileList;
    }

    const handleTileClick = (position) => {
        const boardArray = state.boardArray.slice();
        boardArray[position] = 'X';
        setState((prevState) => ({ ...prevState, boardArray: boardArray }));
    }

    return (
        <div>
            <ul className={StyleConstants.BOARD}>
                {renderBoard()}
            </ul>
        </div>
    );
}
export default Game;