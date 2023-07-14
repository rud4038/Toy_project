import React from 'react';
import './Main.css'
import cookImg from '../../assect/imgs/books.jpg';

function Main() {
    return (
        <div className='main'>
            <div className='main-box'>
                <div className='contents-box'>
                    <p className='contents-title'>title</p>
                    <img src={cookImg} alt=""  className='contents-img'/>
                    <p className='contents-nick'>nickname</p>
                    <div className='info-box'>
                        <p className='date'>2023-01-07</p>
                        <p className='info-btn'>좋아요 버튼</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <p>title</p>
                    <img src="" alt="" />
                    <p>nickname</p>
                    <div>
                        <p>2023-01-07</p>
                        <p>좋아요 버튼</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <p>title</p>
                    <img src="" alt="" />
                    <p>nickname</p>
                    <div>
                        <p>2023-01-07</p>
                        <p>좋아요 버튼</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <p>title</p>
                    <img src="" alt="" />
                    <p>nickname</p>
                    <div>
                        <p>2023-01-07</p>
                        <p>좋아요 버튼</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <p>title</p>
                    <img src="" alt="" />
                    <p>nickname</p>
                    <div>
                        <p>2023-01-07</p>
                        <p>좋아요 버튼</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <p>title</p>
                    <img src="" alt="" />
                    <p>nickname</p>
                    <div>
                        <p>2023-01-07</p>
                        <p>좋아요 버튼</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <p>title</p>
                    <img src="" alt="" />
                    <p>nickname</p>
                    <div>
                        <p>2023-01-07</p>
                        <p>좋아요 버튼</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;