import React, { useEffect, useState } from 'react';
import './Main.css'
import cookImg from '../../assest/imgs/books.jpg';
import { faThumbsUp as solidfaThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as regularfaThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import loadPageStore from '../../stores/loadpage.store';

function Main() {

    const [variables, SetVariables] = useState<any[]>([]);
    const { setContents_number } = loadPageStore();

    const requestToServer = async () => {
        await axios.get('http://localhost:4040/contents/LoadPostList')
        .then((response) => {
            console.log(response.data.data);
            SetVariables(response.data.data);
        })
        console.log(variables);
    }

    useEffect(() => {
        requestToServer();
        console.log(variables);
    },[])   

    return (
        <div className='main'>
            <div className='main-box'>
                {variables.map((item : any) => (
                    <div className='contents-box'>
                        <div className='contents-img-box'>
                            <FontAwesomeIcon icon={regularfaThumbsUp}  className='info-btn'/>
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