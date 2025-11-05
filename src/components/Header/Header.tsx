import type { JSX } from 'react';

export default function Header(): JSX.Element {
    return (
        <header className='header'>
            <a href='#' className='transition gradient-text'>RAYS</a>
            <div className='header-controls'>
                <button className='transition'>START</button>
                <button className='transition'>MENU</button>
                <button className='transition reset-btn'>RESET</button>
            </div>
        </header>
    )
}