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
    const[commentNum, SetCommentNum] = useState<number>(-1);
    const[nickname, SetNickname] = useState<string>('');
    const[commentList,SetCommentList] = useState<any[]>([]);
    const[commentUpdateValue, SetCommentUpdateValue] = useState<any>('');

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

    const UploadComment = async () => {
        if(member === null){
            alert('로그인 후 댓글을 작성 할 수 있습니다.')
            return
        }
        if(commentCon === ''){
            alert('댓글 내용을 작성해주세요.')
            return
        }
        const data = {
            contentsNumber,
            nickname,
            commentCon
        }
            
        await axios.post('http://localhost:4040/comment/upload',data)
        .then((response) => {
            alert(response.data.message);
        })
        LoadPage();

    }

    const UpdateComment = (comment_number : number ,commentCon : any) => {
        SetCommentNum(comment_number);
        SetCommentUpdateValue(commentCon.replaceAll("<br>", "\r\n"));
        LoadPage();
    }

    const UpdateCommentCancel = () => {
        SetCommentNum(-1);
        SetCommentUpdateValue('');
        LoadPage();
    }

    const UpdateCommentUpload = async (comment_number : number, commentCon : any) => {
        const comment_con = commentCon.replace(/(?:\r\n|\r|\n)/g, '<br>');
        const data = {
            comment_number,
            comment_con
        }
        await axios.post('http://localhost:4040/comment/update',data)
        .then((response) => {
            console.log(response.data);
            console.log(data);
        });
        SetCommentNum(-1);
        SetCommentUpdateValue('');
        LoadPage();
    }

    const DeleteComment = async(comment_number : any) => {
        await axios.delete(`http://localhost:4040/comment/delete/${comment_number}`)
        .then((response) => {
            alert(response.data.message);
        })
        LoadPage();
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
                            <textarea  className='comments-input-box' placeholder='댓글 작성 하기' onChange={(e) => SetCommentCon(e.target.value.replace(/(?:\r\n|\r|\n)/g, '<br>'))}></textarea>
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
                                    <span className='comment-float'>|</span>
                                    <div className='comment-btn'>답글</div>
                                    {(member != null && item.nickname === member.nickname) ? (<>
                                    <span className='comment-float'>|</span>
                                    {(commentNum === item.commentNumber) ? (<>
                                    <div className='comment-btn' onClick={() => UpdateCommentCancel()}>수정취소</div>
                                    </>) : 
                                    (<>
                                    <div className='comment-btn' onClick={() => UpdateComment(item.commentNumber,item.commentCon)}>수정</div>
                                    </>)}
                                    <span className='comment-float'>|</span>
                                    <div className='comment-btn' onClick={() => DeleteComment(item.commentNumber)}>삭제</div>
                                    </>) : (<></>)}
                                </div>
                                {(commentNum === item.commentNumber) ? 
                                (<>
                                <div className='comments-upload-box'>
                                <textarea className='comment-update-box' value={commentUpdateValue} onChange={(e) => SetCommentUpdateValue(e.target.value)} />
                                <button className='comments-input-btn' onClick={() => UpdateCommentUpload(item.commentNumber, commentUpdateValue)}>수정 완료</button>
                                </div>
                                </>) : 
                                (<>
                                <div className='comment-contents-con'>{item.commentCon.replaceAll("<br>", "\r\n")}</div>
                                </>)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewContents;