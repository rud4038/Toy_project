import { FormControl, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent, Tab, Box, Tabs } from "@mui/material";
import React, { useEffect, useState } from 'react';
import './Main.css'
import cookImg from '../../assest/imgs/books.jpg';
import { faThumbsUp as solidfaThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as regularfaThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import loadPageStore from '../../stores/loadpage.store';
import { memberStore } from '../../stores';
import categoryNumberStore from "../../stores/categorynumber.store";

function Main() {

    const [variables, SetVariables] = useState<any[]>([]);
    const [value, setValue] = React.useState(0);
    const [rcList, SetRcList] = useState<number[]>([]);
    const { setContents_number } = loadPageStore();
    const { member } = memberStore();
    const { categoryNumber, setcategoryNumber } = categoryNumberStore();
    const navigator = useNavigate();

    const requestToServer = async (number : number) => {
        if(number === 0){
            await axios.get('http://localhost:4040/contents/LoadPostList')
            .then((response) => {
                console.log(response.data.data);
                SetVariables(response.data.data);
            })
            console.log(variables);
        }else if(number === 1){
            await axios.get('http://localhost:4040/contents/LoadPostListViews')
            .then((response) => {
                console.log(response.data.data);
                SetVariables(response.data.data);
            })
            console.log(variables);
        }else if(number === 2){
            await axios.get('http://localhost:4040/contents/LoadPostListRecommendation')
            .then((response) => {
                console.log(response.data.data);
                SetVariables(response.data.data);
            })
            console.log(variables);
        }else if(number === 3){
            if(member === null){
                return alert('로그인 후 이용 할 수 있습니다.')
            }else{
                const nickname = member.nickname;
                await axios.get(`http://localhost:4040/contents/LoadPostListMyRecommendation/${nickname}`)
                .then((response) => {
                    console.log(response.data.data);
                    SetVariables(response.data.data);
                })
                console.log(variables);
            }
        }
        if(member != null){
            recommendationListLoad();
        }
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
        RecommendationCountUp(contents_number);
    }

    const recommendationDelete = async (contents_number : any) => {

        const nickname = member.nickname;
        const data = {
            contents_number,
            nickname
        }
        await axios.post('http://localhost:4040/recommendation/delete',data);
        RecommendationCountDown(contents_number);
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

    const LoadContents = async (contents_number : any) => {
        await axios.get(`http://localhost:4040/contents/ViewsCount/${contents_number}`);
        setContents_number(contents_number);
        navigator('/ViewContents');
    }

    const RecommendationCountUp = async (contents_number : any) => {

        if(member === null) {
            return alert('로그인 후 추천 할 수 있습니다.')
        }

        await axios.get(`http://localhost:4040/contents/RecommendationCountUp/${contents_number}`);
        requestToServer(categoryNumber);
        recommendationListLoad();
    }

    const RecommendationCountDown = async (contents_number : any) => {
        await axios.get(`http://localhost:4040/contents/RecommendationCountDown/${contents_number}`);
        requestToServer(categoryNumber);
        recommendationListLoad();
    }

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(newValue);
        setcategoryNumber(newValue);
        requestToServer(newValue);
        setValue(newValue);
      };


    useEffect(() => {
        requestToServer(categoryNumber);
        setValue(categoryNumber);
        console.log(variables);
    },[])   

    return (
        <div className='main'>
                <Box className="navigate-box" >
                    <Tabs value={value} onChange={handleChange} centered className="" TabIndicatorProps={{style : {background : 'none'}}}>
                        <Tab label="메인"  className="navi" sx={{fontSize : '20px', fontWeight : 'bold'}} />
                        <Tab label="조회수순" className="navi"sx={{fontSize : '20px', fontWeight : 'bold'}} />
                        <Tab label="추천순" className="navi" sx={{fontSize : '20px', fontWeight : 'bold'}}/>
                        <Tab label="나의 추천목록" className="navi" sx={{fontSize : '20px', fontWeight : 'bold'}}/>
                    </Tabs>
                </Box>
            <div className='main-box'>
                {variables.map((item : any) => (
                    <div className='contents-box'>
                        <div className='contents-img-box'>
                            <img src={"http://localhost:4040/file/"+ item.contents_mainimg} alt=""  className='contents-img' onClick={() => LoadContents(item.contents_number)}/>
                        </div>
                        <p className='contents-title'>{item.contents_title}</p>
                        <div className='info-box'>
                            <p className='contents-nick'>{item.contents_nickname}</p>
                            <p className='date'>{item.contents_date}</p>
                        </div>
                        <div className='info-box2'>
                            <div className='views-box'>
                                <div>조회수</div>
                                <div className='views-count'>{item.contents_views}</div>
                            </div>
                            <div className='recommendation-box'>
                                {
                                    ((rcList.includes(item.contents_number)) && member != null) ? (<><FontAwesomeIcon icon={solidfaThumbsUp} onClick={() => recommendationDelete(item.contents_number)} className='recommendation-btn'/></>) 
                                    : (<><FontAwesomeIcon icon={regularfaThumbsUp} className='recommendation-btn'  onClick={() => recommendationUpload(item.contents_number)}/></>)
                                }
                                <div className='recommendation-count'>{item.contents_recommendation}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;