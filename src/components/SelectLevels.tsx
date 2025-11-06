import type { JSX } from 'react';

export default function SelectLevels(): JSX.Element {
    return (
        <div className='select-levels'>
            <h3 className='text-glow'>Select Level</h3>
            <div className='level-container'>
                <button className="level transition">1</button>
                <button className="level transition">2</button>
                <button className="level transition">3</button>
                <button className="level transition">4</button>
                <button className="level transition">5</button>
            </div>
        </div>
    )
}