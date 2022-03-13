import { useState, useRef } from "react";
import TextEditor from "./TextEditor";
import Previewer from "./Previewer";
import "./NewPost.css";

const DEFAULT_TEXTAREA = `# This is a title
## This is a sub-title
### Idk another title but even smaller

This is inline code \`<p>Hello world</p>\` and **here** is a _spooky_ [link](https://facebook.com)

\`\`\`
// too lazy to write more stuff here
console.log("multine codeblock")
\`\`\`

- this
  - is
    - a
      - list

> Practice makes the master.

![Vaporwave](https://i.pinimg.com/originals/4a/71/61/4a7161de9f2939090c2b6aea0ca967da.jpg)
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
