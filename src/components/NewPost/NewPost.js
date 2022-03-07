import { useState, useRef } from "react";
import ButtonHandler from "./ButtonHandler";
import TextEditor from "./TextEditor";
import Previewer from "./Previewer";
import "./NewPost.css";

const DEFAULT_TEXTAREA = `# Enter your title here

Add some text here
`;

const NewPost = () => {
  const [postContent, setPostContent] = useState(DEFAULT_TEXTAREA);

  const textAreaRef = useRef(null);
  const previewerRef = useRef(null);

  const textAreaHandler = (e) => {
    setPostContent(e.target.value);
  };

  // curried function, thanks new knowledge
  // https://andrewnoske.com/wiki/JavaScript_-_Synchronize_Two_Scroll_Areas
  const onScrollHandler = (id) => {
    return (e) => {
      const {
        target: { scrollTop: scrollValue },
      } = e;
      if (id === "text-area") previewerRef.current.scrollTop = scrollValue;
      else textAreaRef.current.scrollTop = scrollValue;
    };
  };

  return (
    <section id="editor">
      <ButtonHandler />
      <TextEditor
        postContent={postContent}
        textAreaHandler={textAreaHandler}
        customRef={textAreaRef}
        onScrollHandler={onScrollHandler}
      />
      <Previewer
        postContent={postContent}
        customRef={previewerRef}
        onScrollHandler={onScrollHandler}
      />
    </section>
  );
};

export default NewPost;
