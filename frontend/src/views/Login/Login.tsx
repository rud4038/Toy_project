import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import { memberStore } from '../../stores';

function Login() {
    const[id,SetId] = useState<string>('');
    const[password,SetPassword] = useState<string>('');
    const[cookie, SetCookies] = useCookies();

    const {setMember} = memberStore();

    const LoginHandler = async () => {
        if(id.length === 0 || password.length === 0){
            alert('아이디, 비밀번호를 입력하세요')
            return
        }
        const data = {
            id,
            password
        }
        await axios.post('http://localhost:4040/member/LogIn',data)
        .then((response) => {
            const responseData = response.data;
            
            if(!responseData.result){
                alert(responseData.message);
                return;
            }
            console.log(response.data);

            const { exprTime, member, token} = responseData.data;
            console.log(exprTime);
            console.log(token);
            const expires = new Date();
            expires.setMilliseconds(exprTime);
            SetCookies('token', token, { expires });
            setMember(member);
            console.log(member);
        })
    }
    return (
        <div>
            <div className='Login-title'>로그인</div>
            <div className='Login-box'>
                <input type="text" className='Login-id click' placeholder='아이디를 입력하세요' onChange={(e) => SetId(e.target.value)}/>
                <input type="password" className='Login-password click' placeholder='비밀번호를 입력하세요' onChange={(e) => SetPassword(e.target.value)}/>
                <Link to={'/'}><button className='Login-btn' onClick={() => LoginHandler()}>로그인</button></Link>
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