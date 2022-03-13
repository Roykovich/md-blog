import { marked } from "marked";
import "./Previewer.css";

marked.setOptions({ gfm: true, breaks: true });

const renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Previewer = ({
  postContent,
  customRef: previewerRef,
  onScrollHandler,
}) => {
  return (
    <div
      id="previewer"
      dangerouslySetInnerHTML={{
        __html: marked(postContent, { renderer }),
      }}
      ref={previewerRef}
      onScroll={onScrollHandler("previewer")}
    />
  );
};

export default Previewer;
