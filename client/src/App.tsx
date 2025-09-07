import "./App.css";
import Post from "./components/Post.tsx";

function App() {
  return (
    <>
      <Post
        imgUrl="../src/assets/images/IMG-20230206-WA0001.jpg"
        description="bla"
        name="chaim"
        time="8:00"
        likes={5}
      />
    </>
  );
}

export default App;
