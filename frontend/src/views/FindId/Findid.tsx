import React from 'react';
import './Findid.css';
import { Link } from 'react-router-dom';
function Findid() {
    return (
        <div>
                        <div className='Login-title'>아이디 찾기</div>
            <div className='Login-box'>
                <input type="text" className='Login-id click' placeholder='이름을 입력하세요'/>
                <input type="text" className='Login-password click' placeholder='연락처를 입력하세요'/>
                <button className='Login-btn'>아이디 찾기</button>
                <div className='Login-info-box'>
                    <Link to={'/Member'}><div className='Login-info active'>회원가입</div></Link>
                    <Link to={'/Login'}><div className='Login-info active'>로그인</div></Link>
                    <Link to={'/Findpassword'}><div className='Login-info'>비밀번호찾기</div></Link>
                </div>
            </div>
        </div>
    );
}

export default Findid;