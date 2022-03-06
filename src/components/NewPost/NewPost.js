import { useState } from "react";
import ButtonHandler from "./ButtonHandler";
import TextEditor from "./TextEditor";
import Previewer from "./Previewer";
import "./NewPost.css";

const DEFAULT_TEXTAREA = `# Enter your title here

Add some text here
`;

const NewPost = () => {
  const [postContent, setPostContent] = useState(DEFAULT_TEXTAREA);

  const textAreaHandler = (e) => {
    setPostContent(e.target.value);
  };

  return (
    <section id="editor">
      <ButtonHandler />
      <TextEditor postContent={postContent} textAreaHandler={textAreaHandler} />
      <Previewer postContent={postContent} />
    </section>
  );
};

export default NewPost;
