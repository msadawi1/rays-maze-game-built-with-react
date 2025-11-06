import { useState } from 'react';
import type { JSX } from 'react';
import SelectLevel from './SelectLevels';
import GameBoard from './GameBoard';

export default function MainMenu(): JSX.Element {
    const [started, setStarted] = useState<boolean>(false);
    const [won, setWon] = useState<boolean>(false);
    const [lost, setLost] = useState<boolean>(false);
    function start(): void {
        setStarted(true);
    }
    return (
        <div className='menu'>
            {
                !started &&
            <>
                <div className='header'>
                    <h1 className='transition gradient-text text-glow'>RAYS</h1>
                    <h2>GUIDE THE LIGHT TO ITS DESTINATION</h2>
                </div>
                <div className='menu-controls'>
                    <button className='transition' onClick={start}>START GAME</button>
                </div>
            </>
            }
            <GameBoard isStarted={started} isLost={lost} isWon={won} />
            { !started && <SelectLevel /> }
            <p className='secondary'>click to place mirrors • reflect the beam • reach the goal</p>
        </div>
    )
}