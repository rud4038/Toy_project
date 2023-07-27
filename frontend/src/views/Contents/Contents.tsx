import './Contents.css';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import {ImageResize} from 'quill-image-resize-module-ts';
Quill.register('modules/ImageResize', ImageResize);
function Contents() {
    const modules = {
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
        ImageResize: {
                parchment: Quill.import('parchment'),
                modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
            }
        }

    }
    const onChangeContents = (con : any) => {
        console.log(con)
    }
    return (
        <div>
            <div className='con-main-box'>
                <div className='con-title-box'>
                    <textarea className='con-title' placeholder='제목을 입력하세요.'></textarea>
                </div>
                <ReactQuill 
                    className='con-box'
                    onChange={onChangeContents}
                    modules={modules}
                />
                <div className='con-btn-box'>
                    <button className='save-btn'>저장</button>
                </div>
            </div>
        </div>
    );
}

export default Contents;