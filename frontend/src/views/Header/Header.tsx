import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='Header'>
            <header className='nav-box'>
                <div className='nav-left'>
                    <Link to={'/'} className='main-btn'>cook</Link>
                </div>
                <div className='nav-right'>
                    <Link to={'/Login'}>Login</Link>
                    <Link to={'/Contents'}>글 작성</Link>
                </div>
            </header>
        </div>
    );
}

export default Header;