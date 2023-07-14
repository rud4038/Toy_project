import React from 'react';
import './Member.css'
import { Link } from 'react-router-dom';
function Member() {

    return (
        <div>
            <div className='Member-title'>회원가입</div>
            <div className='Member-box'>
                <input type="text" className='Member-id click' placeholder='이름을 입력하세요'/>
                <input type="text" className='Member-id click' placeholder='연락처를 -없이 입력하세요'/>
                <input type="text" className='Member-id click' placeholder='아이디를 입력하세요'/>
                <input type="password" className='Member-id click' placeholder='비밀번호를 영문,숫자 조합 10자리 이상 입력하세요'/>
                <input type="password" className='Member-password click' placeholder='비밀번호를 다시 한번 입력하세요'/>
                <button className='Member-btn'>회원가입</button>
                <div className='Member-info-box'>
                    <Link to={'/Login'}><div className='Member-info active'>로그인</div></Link>
                    <Link to={'/Findid'}><div className='Login-info active'>아이디찾기</div></Link>
                    <Link to={'/Findpassword'}><div className='Login-info'>비밀번호찾기</div></Link>
                </div>
            </div>
        </div>
    );
}

export default Member;