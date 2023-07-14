import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <div className='Login-title'>로그인</div>
            <div className='Login-box'>
                <input type="text" className='Login-id click' placeholder='아이디를 입력하세요'/>
                <input type="password" className='Login-password click' placeholder='비밀번호를 입력하세요'/>
                <button className='Login-btn'>로그인</button>
                <div className='Login-info-box'>
                    <Link to={'/Member'}><div className='Login-info active'>회원가입</div></Link>
                    <Link to={'/Findid'}><div className='Login-info active'>아이디찾기</div></Link>
                    <Link to={'/Findpassword'}><div className='Login-info'>비밀번호찾기</div></Link>
                </div>
            </div>
        </div>
    );
}

export default Login;