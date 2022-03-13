import "./App.css";
import NewPost from "./components/NewPost";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App dark">
      <Navbar />
      <NewPost />
    </div>
  );
}

export default App;
