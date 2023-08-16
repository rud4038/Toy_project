import React, { useState } from 'react';
import './Findid.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Findid() {
    const [nickname,setNickname] = useState<String>('');
    const [name,setName] = useState<String>('');
    const [number,setNumber] = useState<String>('');
    const findId = async () => {
        const data = {
            nickname,
            name,
            number
        };
        const response = await axios.post('http://localhost:4040/member/FindId',data)
        alert(response.data.message);

    }
    return (
        <div>
            <div className='Login-title'>아이디 찾기</div>
            <div className='Login-box'>
                <input type="text" className='Login-id click' placeholder='닉네임을 입력하세요' onChange={(e) => setNickname(e.target.value)}/>
                <input type="text" className='Login-id click' placeholder='이름을 입력하세요' onChange={(e) => setName(e.target.value)}/>
                <input type="text" className='Login-password click' placeholder='연락처를 입력하세요'onChange={(e) => setNumber(e.target.value)}/>
                <button className='Login-btn' onClick={() => findId()}>아이디 찾기</button>
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