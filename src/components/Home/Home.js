import "./Home.css";
import DisplayPost from "../DisplayPost";

const Home = () => {
  return (
    <div id="home">
      {/* I dont know if this should be a component */}
      <section id="content-display">
        <DisplayPost />
        <DisplayPost />
        <DisplayPost />
        <DisplayPost />
        <DisplayPost />
        <DisplayPost />
        <DisplayPost />
        <DisplayPost />
        <DisplayPost />
        <DisplayPost />
      </section>
      {/* This should bea  component. */}
      <aside id="side-nav"></aside>
    </div>
  );
};

export default Home;
