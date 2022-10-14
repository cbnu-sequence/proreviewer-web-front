import {StyledWriteBoard, Block } from './styles';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import QuillTextEditor from './QuillTextEditor'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const WriteBoard = () => {
  return (
      <Block>
        <StyledWriteBoard>
          <p className="title">What I studied🍀</p>
            <div className='subTitleDiv'>
              <label className='subTitle' htmlFor="inputSubTitle">제목 : </label>
              <div className='inputBox'>
                <input id="inputSubTitle" className='subTitleInput' placeholder="제목을 입력하세요"/>
              </div>
            </div>
            <div className='subTitleDiv'>
              <label className='subTitle'>내용 : </label>
              <div className='inputBox'>
                <QuillTextEditor />
              </div>
            </div>
            <div>
              <label className='subTitle' htmlFor="inputFile">파일 : </label>
              <AiOutlinePlusCircle className="filePlusIcon" type="file" id="file" size="26" />
              <input id="inputFile" className='inputBox_file' placeholder="파일을 업로드하세요" />
            </div>
            <button className='button' type="submit">등록</button>
          </StyledWriteBoard>
        </Block>
  );
};

export default WriteBoard;