import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './MemberInfo.css';

function MemberInfo() {
    return (
        <div className='Memberinfo'>
            <div className='memberinfo-background'>
                <div className='memberinfo-box'>
                    <div className='memberinfo-title'>회원정보</div>
                    <div className='memberinfo-update-box'>
                        <div className='membername-box'>
                            <div className='memberinfo-update-name'>
                                <div className='memberinfo-name'>이름</div>
                                <button className='memberinfo-update-namebtn'>이름수정</button>
                            </div>
                            <div className='memberinfo-update-nickname'>
                                <div className='memberinfo-ncikname'>닉네임</div>
                                <button className='memberinfo-update-namebtn'>닉네임 수정</button>
                            </div>
                        </div>
                        <div className='memberphonenumber-box'>
                            <div className='memberphonenumber-head'>
                                <div className='memberinfo-icon'><FontAwesomeIcon icon={faMobile}></FontAwesomeIcon></div>
                                <div>폰번호</div>
                            </div>
                            <button className='memberinfo-update-btn'>수정</button>
                        </div>
                        <div className='memberpassword-box'>
                            <div className='memberpassword-head'>
                                <div className='memberinfo-icon'><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></div>
                                <div>비밀번호</div>
                            </div>
                            <button className='memberinfo-update-btn'>수정</button>
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