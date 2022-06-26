import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/aboutme";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" exact element={<AboutMe />} />
    </Routes>
  );
}

export default App;
