import { useState } from "react";
import "./DisplayPost.css";

const DisplayPost = () => {
  const [image, setImage] = useState(true);

  return (
    <article id="display-post">
      <div id="display-post-textcontainer">
        <h1>
          Titulo{" "}
          <span id="display-post-date">posted on 12th september, 2022</span>
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          accusantium ullam nesciunt dolore. Libero, sunt similique ab
          aspernatur molestias mollitia quas incidunt hic praesentium delectus,
          dolor quibusdam, rem fugiat enim?
          {/* Esto se volvera un <Link /> */}
          <button id="display-post-readmore">Read more</button>
        </p>
      </div>
      {image ? (
        <img
          src="https://w.wallhaven.cc/full/v9/wallhaven-v9v3r5.jpg"
          alt=""
          id="display-post-image"
        />
      ) : (
        ""
      )}
    </article>
  );
};

export default DisplayPost;
