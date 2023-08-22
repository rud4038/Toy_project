import './Contents.css';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import {ImageResize} from 'quill-image-resize-module-ts';
import React, { useMemo, useRef, useState } from 'react';
import axios from 'axios';
function Contents() {
    const [value,SetValue] = useState<any>('');
    const [img,SetImg] = useState<any>(null);
    const [imgResult, SetImgResult] = useState<any>('');
    const quillRef = useRef<any>(null);

    const imageHendler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept','image/*');
        input.click();

        input.addEventListener('change', async (event : any) => {
            const file: File = event?.target?.files[0];
            const formData = new FormData();
            formData.append('file', file);
            try {
                const result = await axios.post(`http://localhost:4040/file/upload`,formData,{
                    headers: {
                        'Content-Type': `multipart/form-data;`,
                      },
            })
            console.log(result.data);
            const IMG_URL = await axios.get(`http://localhost:4040/file/${result.data}`);
            console.log(IMG_URL.data.url);
            const editor = quillRef.current.getEditor();
            console.log(editor);
            const range = editor.getSelection();
            console.log(range);
            editor.insertEmbed(range.index, 'image', IMG_URL.data);
            } catch (error) {
                console.log('실패');
                console.log(error);
            }

        })

    }

    const modules = useMemo(() => {
        return{
            toolbar: {
                container: [
                  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                  [{ 'font': [] }],
                  [{ 'align': [] }],
                  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                  [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
                  [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
                  ['image', 'video'],
                  ['clean']  
                ],
                handlers : {
                    image: imageHendler
                }
            }
        }
    },[])

    const test = ()=>{
        console.log(value);
    }

    return (
        <div>
            <div className='con-main-box'>
                <div className='con-title-box'>
                    <textarea className='con-title' placeholder='제목을 입력하세요.'></textarea>
                </div>
                <ReactQuill 
                    ref={quillRef}
                    className='con-box'
                    onChange={SetValue}
                    value={value}
                    modules={modules}
                />
                <div className='con-btn-box'>
                    <button className='save-btn' onClick={() => test()}>저장</button>
                </div>
            </div>
        </div>
    );
}

export default Contents;