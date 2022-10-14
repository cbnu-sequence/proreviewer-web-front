import styled from '@emotion/styled';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'

const QuillNoSSRWrapper = dynamic(() => import ('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const QuillWrapper = styled(QuillNoSSRWrapper)`
  height: 280px;
  padding: 0rem 0.9rem;
  margin: 0rem 0rem 3rem;
  font-size: 1rem;
  @media screen and (max-width: 1250px) {
    margin-bottom: 4.5rem;
  }
`

const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    [{ header: 1}, { header: 2}],
    [{ color : [] }, {background: [] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "background",
  "color",
  "link",
];

const QuillTextEditor = () => {
  return (
    <>
      <QuillWrapper placeholder={'내용을 입력하세요'} theme={"snow"} modules={modules} formats={formats} />
    </>
  );
};

export default QuillTextEditor;