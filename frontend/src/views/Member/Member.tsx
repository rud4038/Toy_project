import React, { useState } from 'react';
import './Member.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Member() {
    const [id, setId] = useState<string>('');
    const [nickname, setNickName] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [number, setNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');
    const [nicknamemesage, setNicknameMesage] = useState<string>(''); 
    const [nicknameresult, setNicknameResult] = useState<boolean>(true);
    const [passwordmesage, setPasswordMesage] = useState<string>('');
    const [passwordresult, setPasswordResult] = useState<boolean>(true);
    const [numberresult, setNumberResult] = useState<string>('');
    const [numbermesage, setNumberMesage] = useState<boolean>(true);
    const navigator = useNavigate();

    const inputCheck = async () => {

        if(!number || !name || ! nickname || !id || !password || !password2){
            alert('모두 입력하세요.');
            return;
          }
        if(password != password2){
            alert('입력한 비밀번호가 동일하지 않습니다.');
            return;
        }
        if(!(nicknameresult && passwordresult)){
            alert('입력정보가 잘못 되었습니다.');
            return;
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
        if(response.data.result){
            navigator('/')
        }
    }

    const nicknameConfirm = (e : string) => {
        if(e.length > 10 || e.length === 0) {
          setNicknameMesage('닉네임 형식이 맞지 않습니다.');
          setNicknameResult(false);
          return
        }
        setNicknameMesage('');
        setNicknameResult(true);
        setNickName(e);
      }

      const numberConfirm = (e : React.ChangeEvent<HTMLInputElement>) => {
        const numberCheck = e.target.value.replace(/[^0-9]/g, '')

        setNumber(numberCheck);
      }



      const passwordConfirm = (e : string) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
        if (!passwordRegex.test(e)) {
          setPasswordMesage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
          setPasswordResult(false);
          return
        } else {
          setPasswordMesage('');
          setPasswordResult(true);
          setPassword(e);
          return
        }
      }

    return (
        <div>
            <div className='Member-title'>회원가입</div>
            <div className='Member-box'>
                <input type="text" className='Member-id click' placeholder='아이디를 입력하세요'onChange={(e) => setId(e.target.value)}/>
                <input type="text" className='Member-id click' placeholder='닉네임을 10자리 이하로 입력하세요'onChange={(e) => nicknameConfirm(e.target.value)}/>
                <p className='input-msg'>{nicknamemesage}</p>
                <input type="text" className='Member-id click' placeholder='이름을 입력하세요'onChange={(e) => setName(e.target.value)}/>
                <input type="text" className='Member-id click' placeholder='연락처를 -없이 입력하세요' maxLength={ 11 } onChange={numberConfirm} value={number}/>
                <input type="password" className='Member-id click' placeholder='비밀번호를 영문,숫자,특수문자 조합 8자리 이상 입력하세요' maxLength={ 16 } onChange={(e) => passwordConfirm(e.target.value)}/>
                <p className='input-msg'>{passwordmesage}</p>
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