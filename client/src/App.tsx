import "./App.css";
import Post from "./components/Post.tsx";
import Homepage from "./pages/Homepage.tsx";

function App() {
  return (
    <>
    <Homepage/>
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
