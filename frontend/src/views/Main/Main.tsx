import React, { useEffect, useState } from 'react';
import './Main.css'
import cookImg from '../../assest/imgs/books.jpg';
import { faThumbsUp as solidfaThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as regularfaThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import loadPageStore from '../../stores/loadpage.store';
import { memberStore } from '../../stores';

function Main() {

    const [variables, SetVariables] = useState<any[]>([]);
    const [rcList, SetRcList] = useState<number[]>([]);
    const { setContents_number } = loadPageStore();
    const { member } = memberStore();

    const requestToServer = async () => {
        await axios.get('http://localhost:4040/contents/LoadPostList')
        .then((response) => {
            console.log(response.data.data);
            SetVariables(response.data.data);
        })
        console.log(variables);
    }

    const recommendationUpload = async (contents_number : any) => {
        if(member === null){
            return alert('로그인 후 추천 할 수 있습니다.');
        }
        const nickname = member.nickname;
        const data = {
            contents_number,
            nickname
        }
        await axios.post('http://localhost:4040/recommendation/upload',data)
        .then((response) => {
            console.log(response.data);
        })
    }

    const recommendationListLoad = () => {
        if(member === null){
            return
        }
        const nickname = member.nickname;
        axios.get(`http://localhost:4040/recommendation/load/${nickname}`)
        .then((response) => {
            console.log('추천목록');
            console.log(response.data.data);
            SetRcList(response.data.data);
            return
        })
        return
    }

    const test = () => {
        console.log(rcList.includes(3));
    } 

    useEffect(() => {
        requestToServer();
        recommendationListLoad();
        console.log(variables);
    },[])   

    return (
        <div className='main'>
            <div className='main-box'>
                {variables.map((item : any) => (
                    <div className='contents-box'>
                        <div className='contents-img-box'>
                            {
                                ((rcList.includes(item.contents_number)) && member != null) ? (<><FontAwesomeIcon icon={solidfaThumbsUp}  className='info-btn'/></>) 
                                : (<><FontAwesomeIcon icon={regularfaThumbsUp}  className='info-btn' onClick={() => recommendationUpload(item.contents_number)}/></>)
                            }
                            <Link to = { '/ViewContents' } onClick={() => setContents_number(item.contents_number)}> <img src={"http://localhost:4040/file/"+ item.contents_mainimg} alt=""  className='contents-img'/></Link>
                        </div>
                        <p className='contents-title'>{item.contents_title}</p>
                        <div className='info-box'>
                            <p className='contents-nick'>{item.contents_nickname}</p>
                            <p className='date'>{item.contents_date}</p>
                        </div>
                    </div>
                ))}
                <div className='contents-box'>
                    <div className='contents-img-box'>
                        <FontAwesomeIcon icon={regularfaThumbsUp}  className='info-btn'  onClick={() => test()}/>
                        <img src={cookImg} alt=""  className='contents-img'/>
                    </div>
                    <p className='contents-title'>title</p>
                    <p className='contents-detail'>내용~~~~~~~~~~~~</p>
                    <div className='info-box'>
                        <p className='contents-nick'>nickname</p>
                        <p className='date'>2023-01-07</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <div className='contents-img-box'>
                        <FontAwesomeIcon icon={regularfaThumbsUp}  className='info-btn'/>
                        <img src={cookImg} alt=""  className='contents-img'/>
                    </div>
                    <p className='contents-title'>title</p>
                    <p className='contents-detail'>내용~~~~~~~~~~~~</p>
                    <div className='info-box'>
                        <p className='contents-nick'>nickname</p>
                        <p className='date'>2023-01-07</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <div className='contents-img-box'>
                        <FontAwesomeIcon icon={regularfaThumbsUp}  className='info-btn'/>
                        <img src={cookImg} alt=""  className='contents-img'/>
                    </div>
                    <p className='contents-title'>title</p>
                    <p className='contents-detail'>내용~~~~~~~~~~~~</p>
                    <div className='info-box'>
                        <p className='contents-nick'>nickname</p>
                        <p className='date'>2023-01-07</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <div className='contents-img-box'>
                        <FontAwesomeIcon icon={regularfaThumbsUp}  className='info-btn'/>
                        <img src={cookImg} alt=""  className='contents-img'/>
                    </div>
                    <p className='contents-title'>title</p>
                    <p className='contents-detail'>내용~~~~~~~~~~~~</p>
                    <div className='info-box'>
                        <p className='contents-nick'>nickname</p>
                        <p className='date'>2023-01-07</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <div className='contents-img-box'>
                        <FontAwesomeIcon icon={regularfaThumbsUp}  className='info-btn'/>
                        <img src={cookImg} alt=""  className='contents-img'/>
                    </div>
                    <p className='contents-title'>title</p>
                    <p className='contents-detail'>내용~~~~~~~~~~~~</p>
                    <div className='info-box'>
                        <p className='contents-nick'>nickname</p>
                        <p className='date'>2023-01-07</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <div className='contents-img-box'>
                        <FontAwesomeIcon icon={regularfaThumbsUp}  className='info-btn'/>
                        <img src={cookImg} alt=""  className='contents-img'/>
                    </div>
                    <p className='contents-title'>title</p>
                    <p className='contents-detail'>내용~~~~~~~~~~~~</p>
                    <div className='info-box'>
                        <p className='contents-nick'>nickname</p>
                        <p className='date'>2023-01-07</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <div className='contents-img-box'>
                        <FontAwesomeIcon icon={regularfaThumbsUp}  className='info-btn'/>
                        <img src={cookImg} alt=""  className='contents-img'/>
                    </div>
                    <p className='contents-title'>title</p>
                    <p className='contents-detail'>내용~~~~~~~~~~~~</p>
                    <div className='info-box'>
                        <p className='contents-nick'>nickname</p>
                        <p className='date'>2023-01-07</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <div className='contents-img-box'>
                        <FontAwesomeIcon icon={regularfaThumbsUp}  className='info-btn'/>
                        <img src={cookImg} alt=""  className='contents-img'/>
                    </div>
                    <p className='contents-title'>title</p>
                    <p className='contents-detail'>내용~~~~~~~~~~~~</p>
                    <div className='info-box'>
                        <p className='contents-nick'>nickname</p>
                        <p className='date'>2023-01-07</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <div className='contents-img-box'>
                        <FontAwesomeIcon icon={regularfaThumbsUp}  className='info-btn'/>
                        <img src={cookImg} alt=""  className='contents-img'/>
                    </div>
                    <p className='contents-title'>title</p>
                    <p className='contents-detail'>내용~~~~~~~~~~~~</p>
                    <div className='info-box'>
                        <p className='contents-nick'>nickname</p>
                        <p className='date'>2023-01-07</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <div className='contents-img-box'>
                        <FontAwesomeIcon icon={regularfaThumbsUp}  className='info-btn'/>
                        <img src={cookImg} alt=""  className='contents-img'/>
                    </div>
                    <p className='contents-title'>title</p>
                    <p className='contents-detail'>내용~~~~~~~~~~~~</p>
                    <div className='info-box'>
                        <p className='contents-nick'>nickname</p>
                        <p className='date'>2023-01-07</p>
                    </div>
                </div>
                <div className='contents-box'>
                    <div className='contents-img-box'>
                        <FontAwesomeIcon icon={regularfaThumbsUp}  className='info-btn'/>
                        <img src={cookImg} alt=""  className='contents-img'/>
                    </div>
                    <p className='contents-title'>title</p>
                    <p className='contents-detail'>내용~~~~~~~~~~~~</p>
                    <div className='info-box'>
                        <p className='contents-nick'>nickname</p>
                        <p className='date'>2023-01-07</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;