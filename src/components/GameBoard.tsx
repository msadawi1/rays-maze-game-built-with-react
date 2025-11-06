import type { JSX } from "react";

type GameBoardProps = {
    isStarted: boolean
    isWon: boolean
    isLost: boolean
}

export default function GameBoard({ isStarted, isWon, isLost }: GameBoardProps): JSX.Element | null {
    const grid = Array.from({ length: 100 }, (_, i) => <div key={i} className="tile transition" />);
    return (
        isStarted ? 
    <div className="game-board">
        {grid}
    </div> : null
    )
}