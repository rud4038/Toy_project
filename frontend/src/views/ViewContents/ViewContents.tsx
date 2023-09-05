import React, { useEffect, useState } from 'react';
import './ViewContents.css';
import axios from 'axios';
import loadPageStore from '../../stores/loadpage.store';

function ViewContents() {
    const[tex,Settex] = useState<string>('<p>ㄴㅁㅇㅁㄴㅇㄴㅁㅇ</p><p><br></p><p>ㄴㅁㅇㄴㅁㅇ<img src="http://localhost:4040/file/77f26288-f491-4f65-9767-c749095ca24c.png" width="600"></p><p class="ql-align-center">ㄴㅁㅇㄴㅁㅇㄴㅇㅁㄴㅇㅁㄴㅇㅇㄴㅇㅁㄴㅇㅁㄴ</p><p class="ql-align-right">ㅇㅁㄴㅇㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁㅇㄴㅁ</p>');
    const[variables, SetVariables] = useState<any>('');
    const{ contents_number } = loadPageStore();

    const LoadPage = () => {
        axios.get(`http://localhost:4040/contents/LoadPage/${contents_number}`)
        .then((response) => {
            console.log(response);
            SetVariables(response.data.data);
        })
    }

    useEffect(() => {
        LoadPage();
    },[])
    return (
        <div className='ViewContents'>
            <div className='view-full-box'>
                <div dangerouslySetInnerHTML={ {__html: variables.contents_con}} className='view-contents-box'></div>
                <div className='view-comments-box'>
                    <div className='comments-small-box'>
                        <div className='comment-title'>
                            <div>요리 후기 </div>
                            <div className='comment-count'>8</div>
                        </div>
                        <div className='comment-contents-box'>
                            <div className='comment-contents-head'>
                                <div className='comment-contents-nickname'>닉네임</div>
                                <div className='comment-contents-date'>작성날짜</div>
                            </div>
                            <div className='comment-contents-con'>내용</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewContents;