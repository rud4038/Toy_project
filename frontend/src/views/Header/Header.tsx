import React, { useEffect } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { memberStore } from '../../stores';
import categoryNumberStore from '../../stores/categorynumber.store';
import { useCookies } from 'react-cookie';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    const {member, removeMember} = memberStore();
    const{ setcategoryNumber } = categoryNumberStore();
    const [cookies , setCookies] = useCookies();
    const navigator = useNavigate();

    const mainNavigate= () => {
        setcategoryNumber(0);
        navigator('/');
    }

    const logOutHandler = () => {
        setCookies('token','',{expires : new Date()});
        removeMember();
        navigator('/')
        alert('로그아웃 되었습니다.')
    }

    useEffect(() => {
        console.log(member);
    })
    return (
        <div className='Header'>
            <header className='nav-box'>
                <div className='nav-left'>
                    <div onClick={() => mainNavigate()} className='main-btn'>community</div>
                </div>
                <div className='nav-right'>
                    {
                        (member === null) ? (<><Link to={'/Login'}>Login</Link></>) 
                        : 
                        (<><div>{member.nickname + "님"}</div>
                        <div className='head-icon-box'>
                            <Link to={'/MemberInfo'}><FontAwesomeIcon icon= {faUser}></FontAwesomeIcon></Link>
                            <Link to={'/Contents'}><FontAwesomeIcon icon= {faPen}></FontAwesomeIcon></Link>
                            <div onClick={logOutHandler} className='logout-btn'><FontAwesomeIcon icon= {faUnlock}></FontAwesomeIcon></div>
                        </div>
                        </>)
                    }
                    
                </div>
            </header>
        </div>
    );
}

export default Header;