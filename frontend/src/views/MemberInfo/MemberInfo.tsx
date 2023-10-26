import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Dialog from '@mui/material/Dialog';
import './MemberInfo.css';
import { memberStore } from '../../stores';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MemberInfo() {

    const navigator = useNavigate();
    const [ nameOpen, setNameOpen ] = useState(false);
    const [ nickNameOpen, setNickNameOpen ] = useState(false);
    const [ numberOpen, setNumberOpen ] = useState(false);
    const [ passwordOpen, setPasswordOpen ] = useState(false);
    const { member } = memberStore();
    const [memberInfo, setMemberInfo] = useState<any>([]);
    const [ newName, setNewName] = useState<any>("");
    const [ newNickName, setNewNickName] = useState<any>("");
    const [ newNumber, setNewNumber] = useState<any>("");
    const [ oldPassword, setOldPassword] = useState<any>("");
    const [ newPassword, setNewPassword] = useState<any>("");
    const [ newPasswordCheck, setNewPasswordCheck] = useState<any>("");

    const nameHandleClickOpen = () => {
        setNameOpen(true);
    }

    const nameHandleClose = () => {
        setNameOpen(false);
    }

    const nickNameHandleClickOpen = () => {
        setNickNameOpen(true);
    }

    const nickNameHandleClose = () => {
        setNickNameOpen(false);
    }

    const numberHandleClickOpen = () => {
        setNumberOpen(true);
    }

    const numberHandleClose = () => {
        setNumberOpen(false);
    }

    const passwordHandleClickOpen = () => {
        setPasswordOpen(true);
    }

    const passwordHandleClose = () => {
        setPasswordOpen(false);
    }

    const loadMemberInfo = async() => {
        await axios.get(`http://localhost:4040/member/LoadInfo/${member.id}`)
        .then((response) => {
            setMemberInfo(response.data.data);
        })
    }

    const updateName = () => {
        if(newName.length === 0) {
            return alert('변경하실 이름을 입력해 주세요');
        }
        const id = member.id;
        const oldName = memberInfo.name;
        const data = {
            id,
            oldName,
            newName
        }

        axios.post('http://localhost:4040/member/UpdateName',data)
        .then((response) => {
            alert(response.data.message);
            member.name = newName;
        })
        navigator('/');
    }

    const updateNumber = () => {
        if(newNumber.length != 11) {
            return alert('전화번호를 잘못 입력하셨습니다.');
        }
        const id = member.id;
        const oldNumber = memberInfo.number;
        const data = {
            id,
            oldNumber,
            newNumber
        }

        axios.post('http://localhost:4040/member/UpdateNumber',data)
        .then((response) => {
            alert(response.data.message);
            member.number = newNumber;
        })
        navigator('/');
    }
    
    const updatePassword = () => {
        if(newPassword != newPasswordCheck) {
            return alert('변경 할 비밀번호를 다르게 입력하셨습니다.');
        }
        const id = member.id;
        const data = {
            id,
            oldPassword,
            newPassword
        }

        axios.post('http://localhost:4040/member/UpdatePassword',data)
        .then((response) => {
            alert(response.data.message);
        })
        navigator('/');

    }

    const updateMemberNickName = async() => {
        if(newNickName.length === 0) {
            return alert('변경하실 닉네임을 입력해 주세요');
        }
        const id = member.id;
        const oldNickName = memberInfo.nickname;
        const data = {
            id,
            oldNickName,
            newNickName
        }

        await axios.post('http://localhost:4040/member/UpdateNickname',data)
        .then((response) => {
            alert(response.data.message);
            if(response.data.result){
                updateCommentNickName();
                updateContentsNickName();
                updateRecommendationNickName();
                member.nickname = newNickName;
            }
        })
        navigator('/');
    }

    const updateCommentNickName =() => {
        const id = member.id;
        const oldNickName = memberInfo.nickname;
        const data = {
            id,
            oldNickName,
            newNickName
        }
        axios.post('http://localhost:4040/comment/updateNickname',data)
    }

    const updateContentsNickName =() => {
        const id = member.id;
        const oldNickName = memberInfo.nickname;
        const data = {
            id,
            oldNickName,
            newNickName
        }
        axios.post('http://localhost:4040/contents/UpdateNickname',data)
    }

    const updateRecommendationNickName =() => {
        const id = member.id;
        const oldNickName = memberInfo.nickname;
        const data = {
            id,
            oldNickName,
            newNickName
        }
        axios.post('http://localhost:4040/recommendation/updateNickname',data)
    }

    useEffect(() => {
        loadMemberInfo()
    },[])

    return (
        <div className='Memberinfo'>
            <div className='memberinfo-background'>
                <div className='memberinfo-box'>
                    <div className='memberinfo-title'>회원정보</div>
                    <div className='memberinfo-update-box'>
                        <div className='membername-box'>
                            <div className='memberinfo-update-name'>
                                <div className='memberinfo-name'>{memberInfo.name}</div>
                                <div>
                                    <button className='memberinfo-update-namebtn' onClick={nameHandleClickOpen}>이름수정</button>
                                    <Dialog open={nameOpen} onClose={nameHandleClose}>
                                        <div className='name-update-modal'>
                                            <div className='modal-xmark-box'>
                                                <button className='modal-xmark-btn' onClick={nameHandleClose}><FontAwesomeIcon icon = { faXmark }></FontAwesomeIcon></button>
                                            </div>
                                            <h4 className='modal-title'>변경하실 이름을 입력해 주세요.</h4>
                                            <input type="text" className='modal-input'  placeholder="이 름" onChange={(e) => setNewName(e.target.value)}/>
                                        </div>
                                        <div className='modal-btn-box'>
                                            <button onClick={nameHandleClose} className='modal-cansle-btn'>취소</button>
                                            <button onClick={ updateName } className='modal-success-btn'>확인</button>
                                        </div>
                                    </Dialog>
                                </div>
                            </div>
                            <div className='memberinfo-update-nickname'>
                                <div className='memberinfo-ncikname'>{memberInfo.nickname}</div>
                                <button className='memberinfo-update-namebtn' onClick={nickNameHandleClickOpen}>닉네임 수정</button>
                                <Dialog open={nickNameOpen} onClose={nickNameHandleClose}>
                                    <div className='name-update-modal'>
                                        <div className='modal-xmark-box'>
                                            <button className='modal-xmark-btn' onClick={nickNameHandleClose}><FontAwesomeIcon icon = { faXmark }></FontAwesomeIcon></button>
                                        </div>
                                        <h4 className='modal-title'>변경하실 닉네임을 입력해 주세요.</h4>
                                        <input type="text" className='modal-input'  placeholder="닉네임" onChange={(e) => setNewNickName(e.target.value)}/>
                                    </div>
                                    <div className='modal-btn-box'>
                                        <button onClick={nickNameHandleClose} className='modal-cansle-btn'>취소</button>
                                        <button onClick={ updateMemberNickName } className='modal-success-btn'>확인</button>
                                    </div>
                                </Dialog>
                            </div>
                        </div>
                        <div className='memberphonenumber-box'>
                            <div className='memberphonenumber-head'>
                                <div className='memberinfo-icon'><FontAwesomeIcon icon={faMobile}></FontAwesomeIcon></div>
                                <div>{memberInfo.number}</div>
                            </div>
                            <button className='memberinfo-update-btn'onClick={numberHandleClickOpen}>수정</button>
                            <Dialog open={numberOpen} onClose={numberHandleClose}>
                                <div className='name-update-modal'>
                                    <div className='modal-xmark-box'>
                                        <button className='modal-xmark-btn' onClick={numberHandleClose}><FontAwesomeIcon icon = { faXmark }></FontAwesomeIcon></button>
                                    </div>
                                    <h4 className='modal-title'>변경하실 전화번호를 입력해 주세요.</h4>
                                    <input type="text" className='modal-input'  placeholder="전화번호" onChange={(e) => setNewNumber(e.target.value)}/>
                                </div>
                                <div className='modal-btn-box'>
                                    <button onClick={numberHandleClose} className='modal-cansle-btn'>취소</button>
                                    <button onClick={ updateNumber } className='modal-success-btn'>확인</button>
                                </div>
                            </Dialog>
                        </div>
                        <div className='memberpassword-box'>
                            <div className='memberpassword-head'>
                                <div className='memberinfo-icon'><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></div>
                                <div>비밀번호</div>
                            </div>
                            <button className='memberinfo-update-btn'onClick={passwordHandleClickOpen}>수정</button>
                            <Dialog open={passwordOpen} onClose={passwordHandleClose}>
                                <div className='name-update-modal'>
                                    <div className='modal-xmark-box'>
                                        <button className='modal-xmark-btn' onClick={passwordHandleClose}><FontAwesomeIcon icon = { faXmark }></FontAwesomeIcon></button>
                                    </div>
                                    <h4 className='modal-title'> 변경 전 비밀번호와 변경하실 비밀번호를 입력해 주세요.</h4>
                                    <input type="password" className='modal-input'  placeholder="변경 전 비밀번호" onChange={(e) => setOldPassword(e.target.value)}/>
                                    <input type="password" className='modal-input'  placeholder="변경 할 비밀번호" onChange={(e) => setNewPassword(e.target.value)}/>
                                    <input type="password" className='modal-input'  placeholder="변경 할 비밀번호 확인" onChange={(e) => setNewPasswordCheck(e.target.value)}/>
                                </div>
                                <div className='modal-btn-box'>
                                    <button onClick={passwordHandleClose} className='modal-cansle-btn'>취소</button>
                                    <button onClick={ updatePassword } className='modal-success-btn'>확인</button>
                                </div>
                            </Dialog>
                        </div>
                        <div className='member-delete-box'>
                            <button className='member-delete-btn'>회원 탈퇴</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MemberInfo;