import React, { useState } from 'react';
import './Findpassword.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Findpassword() {
    const[id,setId] = useState<String>('');
    const[name,setName] = useState<String>('');
    const[number,setNumber] = useState<String>('');

    const FindPassword = async () => {
        const data = {
            id,
            name,
            number
        };
        const response = await axios.post('http://localhost:4040/member/FindPassword',data)
        alert(response.data.message)
    }
    return (
        <div>
                        <div className='Findpassword-title'>비밀번호 찾기</div>
            <div className='Findpassword-box'>
                <input type="text" className='Findpassword-id click' placeholder='아이디를 입력하세요'onChange={(e) => setId(e.target.value)}/>
                <input type="text" className='Findpassword-id click' placeholder='이름을 입력하세요'onChange={(e) => setName(e.target.value)}/>
                <input type="text" className='Findpassword-password click' placeholder='연락처를 입력하세요'onChange={(e) => setNumber(e.target.value)}/>
                <button className='Findpassword-btn' onClick={() => FindPassword()}>비밀번호 찾기</button>
                <div className='Findpassword-info-box'>
                    <Link to={'/Member'}><div className='Login-info active'>회원가입</div></Link>
                    <Link to={'/Login'}><div className='Login-info active'>로그인</div></Link>
                    <Link to={'/Finid'}><div className='Login-info'>아이디 찾기</div></Link>
                </div>
            </div>
        </div>
    );
}

export default Findpassword;