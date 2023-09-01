import React, { useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { memberStore } from '../../stores';

function Header() {
    const {member, removeMember} = memberStore();

    useEffect(() => {
        console.log(member);
    })
    return (
        <div className='Header'>
            <header className='nav-box'>
                <div className='nav-left'>
                    <Link to={'/'} className='main-btn'>cook</Link>
                </div>
                <div className='nav-right'>
                    {
                        (member === null) ? (<><Link to={'/Login'}>Login</Link></>) 
                        : 
                        (<><div>{member.id + "님"}</div></>)
                    }
                    <Link to={'/Contents'}>글 작성</Link>
                </div>
            </header>
        </div>
    );
}

export default Header;