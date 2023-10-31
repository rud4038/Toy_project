import React, { useState } from 'react';
import './Member.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Member() {
    const [id, setId] = useState<String>('');
    const [nickname, setNickName] = useState<String>('');
    const [name, setName] = useState<String>('');
    const [number, setNumber] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const [password2, setPassword2] = useState<String>('');
    const navigator = useNavigate();

    const inputCheck = async () => {
        if(password != password2){
            return alert('입력한 비밀번호가 동일하지 않습니다.')
        }
        SignUpRequest();
    }
    const SignUpRequest = async() => {
        const data = {
            id,
            nickname,
            name,
            number,
            password
        };
        const response = await axios.post('http://localhost:4040/member/SignUp', data)
        alert(response.data.message);
        navigator('/')
    }

    return (
        <div>
            <div className='Member-title'>회원가입</div>
            <div className='Member-box'>
                <input type="text" className='Member-id click' placeholder='아이디를 입력하세요'onChange={(e) => setId(e.target.value)}/>
                <input type="text" className='Member-id click' placeholder='닉네임을 입력하세요'onChange={(e) => setNickName(e.target.value)}/>
                <input type="text" className='Member-id click' placeholder='이름을 입력하세요'onChange={(e) => setName(e.target.value)}/>
                <input type="text" className='Member-id click' placeholder='연락처를 -없이 입력하세요'onChange={(e) => setNumber(e.target.value)}/>
                <input type="password" className='Member-id click' placeholder='비밀번호를 영문,숫자 조합 10자리 이상 입력하세요'onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" className='Member-password click' placeholder='비밀번호를 다시 한번 입력하세요'onChange={(e) => setPassword2(e.target.value)}/>
                <button className='Member-btn' onClick={() => inputCheck()}>회원가입</button>
                <div className='Member-info-box'>
                    <Link to={'/Login'}><div className='Login-info active'>로그인</div></Link>
                    <Link to={'/Findid'}><div className='Login-info active'>아이디찾기</div></Link>
                    <Link to={'/Findpassword'}><div className='Login-info'>비밀번호찾기</div></Link>
                </div>
            </div>
        </div>
    );
}

export default Member;