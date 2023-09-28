import React, { useEffect } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { memberStore } from '../../stores';
import categoryNumberStore from '../../stores/categorynumber.store';

function Header() {
    const {member, removeMember} = memberStore();
    const{ setcategoryNumber } = categoryNumberStore();
    const navigator = useNavigate();

    const mainNavigate= () => {
        setcategoryNumber(0);
        navigator('/');
    }

    useEffect(() => {
        console.log(member);
    })
    return (
        <div className='Header'>
            <header className='nav-box'>
                <div className='nav-left'>
                    <div onClick={() => mainNavigate()} className='main-btn'>cook</div>
                </div>
                <div className='nav-right'>
                    {
                        (member === null) ? (<><Link to={'/Login'}>Login</Link></>) 
                        : 
                        (<><div>{member.nickname + "님"}</div>
                        <Link to={'/Contents'}>글 작성</Link></>)
                    }
                    
                </div>
            </header>
        </div>
    );
}

export default Header;