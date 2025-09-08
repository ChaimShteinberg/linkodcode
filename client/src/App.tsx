import { BrowserRouter } from "react-router";
import "./App.css";
import Content from "./components/application-layout/Content.tsx";
import Header from "./components/application-layout/Header.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    </>
  );
}

export default App;
