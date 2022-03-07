import "./TextEditor.css";

const TextEditor = ({
  postContent,
  textAreaHandler,
  customRef: textAreaRef,
  onScrollHandler,
}) => {
  return (
    <div id="text-editor">
      <textarea
        value={postContent}
        onChange={textAreaHandler}
        onScroll={onScrollHandler("text-area")}
        id="text-area"
        ref={textAreaRef}
        spellCheck={false}
      ></textarea>
    </div>
  );
};

export default TextEditor;
