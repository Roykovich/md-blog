import { marked } from "marked";
import "./Previewer.css";

marked.setOptions({
  breaks: true,
  gfm: true,
});

const renderer = new marked.Renderer();
renderer.link = (href, title, text) => {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Previewer = ({ postContent }) => {
  return (
    <div
      id="previewer"
      dangerouslySetInnerHTML={{
        __html: marked(postContent, { renderer }),
      }}
    />
  );
};

export default Previewer;
