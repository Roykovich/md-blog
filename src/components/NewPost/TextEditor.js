import "./TextEditor.css";

const TextEditor = ({ postContent, textAreaHandler }) => {
  return (
    <div id="text-editor">
      <textarea value={postContent} onChange={textAreaHandler}></textarea>
    </div>
  );
};

export default TextEditor;
