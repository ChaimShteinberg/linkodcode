import "../../styles/Content.css";
import Homepage from "../../pages/Homepage";
import { Route, Routes } from "react-router";

function Content() {
  // Location of the main content of the page
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default Content;
