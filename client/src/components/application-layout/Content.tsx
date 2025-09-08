import "../../styles/Content.css";
import Homepage from "../../pages/Homepage";
import { Route, Routes } from "react-router";
import PostPage from "../../pages/PostPage";
import AppPostPage from "../../pages/AddPostPage";

function Content() {
  // Location of the main content of the page
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/addPost" element={<AppPostPage/>}/>
      </Routes>
    </main>
  );
}

export default Content;
