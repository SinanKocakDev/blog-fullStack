import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill'in teması

const RichTextEditor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'align': [] }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image', 'code-block'], // Image and code block options
      ['clean']                                         // remove formatting button
    ],
  };

  const formats = [
    'header', 'font',
    'list', 'bullet',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'align',
    'color', 'background',
    'link', 'image', 'code-block'
  ];

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
    />
  );
};

export default RichTextEditor;

