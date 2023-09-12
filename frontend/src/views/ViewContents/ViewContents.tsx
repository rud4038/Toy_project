import React, { useEffect, useState } from 'react';
import './ViewContents.css';
import axios from 'axios';
import loadPageStore from '../../stores/loadpage.store';
import { memberStore } from '../../stores';

function ViewContents() {
    const{ contents_number } = loadPageStore();
    const{ member } = memberStore();
    const[variables, SetVariables] = useState<any>('');
    const[commentCon,SetCommentCon] = useState<string>('');
    const[contentsNumber, SetContentsNumber] = useState<number>(0);
    const[nickname, SetNickname] = useState<string>('');
    const[commentList,SetCommentList] = useState<any[]>([]);

    const LoadPage = async() => {
        await axios.get(`http://localhost:4040/contents/LoadPage/${contents_number}`)
        .then((response) => {
            console.log(response);
            SetVariables(response.data.data);
        });
        LoadComment();
    }

    const LoadComment = () => {
        axios.get(`http://localhost:4040/comment/load/${contents_number}`)
        .then((response) => {
            SetCommentList(response.data.data);
            console.log(response.data.data);
        })
    }

    const UploadComment = () => {
        
        const data = {
            contentsNumber,
            nickname,
            commentCon
        }
            
        axios.post('http://localhost:4040/comment/upload',data)
        .then((response) => {
            alert(response.data.message);
        })

    }

    useEffect(() => {
        LoadPage();
        SetContentsNumber(variables.contents_number);
        if(member != null){
            SetNickname(member.nickname);
        }
    },[])
    return (
        <div className='ViewContents'>
            <div className='view-full-box'>
                <div dangerouslySetInnerHTML={ {__html: variables.contents_con}} className='view-contents-box'></div>
                <div className='view-comments-box'>
                    <div className='comments-small-box'>
                        <div className='comments-upload-box'>
                            <textarea  className='comments-input-box' placeholder='댓글 작성 하기' onChange={(e) => SetCommentCon(e.target.value.replace(/(?:\r\n|\r|\n)/g, '<br />'))}></textarea>
                            <button className='comments-input-btn' onClick={() => UploadComment()}>등록</button>
                        </div>
                        <div className='comment-title'>
                            <div>요리 후기 </div>
                            <div className='comment-count'>{commentList.length}</div>
                        </div>
                        {commentList.map((item : any) => (
                            <div className='comment-contents-box'>
                                <div className='comment-contents-head'>
                                    <div className='comment-contents-nickname'>{item.nickname}</div>
                                    <div className='comment-contents-date'>{item.commentDate}</div>
                                </div>
                                <div className='comment-contents-con'>{item.commentCon.replaceAll("<br>", "\r\n")}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewContents;