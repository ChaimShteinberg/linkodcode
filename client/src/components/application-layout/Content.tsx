import "../../styles/Content.css";
import { Route, Routes } from "react-router";
import Homepage from "../../pages/Homepage.tsx";
import PostPage from "../../pages/PostPage.tsx";
import AppPostPage from "../../pages/AddPostPage.tsx";
import LoginPage from "../../pages/LoginPage.tsx";

function Content() {
  // Location of the main content of the page
  return (
    <main>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/addPost" element={<AppPostPage />} />
      </Routes>
    </main>
  );
}

export default Content;
