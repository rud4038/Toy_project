import React from 'react';
import './Findpassword.css';
import { Link } from 'react-router-dom';

function Findpassword() {
    return (
        <div>
                        <div className='Findpassword-title'>비밀번호 찾기</div>
            <div className='Findpassword-box'>
                <input type="text" className='Findpassword-id click' placeholder='아이디를 입력하세요'/>
                <input type="text" className='Findpassword-id click' placeholder='이름을 입력하세요'/>
                <input type="password" className='Findpassword-password click' placeholder='연락처를 입력하세요'/>
                <button className='Findpassword-btn'>비밀번호 찾기</button>
                <div className='Findpassword-info-box'>
                    <Link to={'/Member'}><div className='Findpassword-info active'>회원가입</div></Link>
                    <Link to={'/Login'}><div className='Login-info active'>로그인</div></Link>
                    <Link to={'/Finid'}><div className='Login-info'>아이디 찾기</div></Link>
                </div>
            </div>
        </div>
    );
}

export default Findpassword;