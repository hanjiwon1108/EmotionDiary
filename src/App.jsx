import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Diary from "./components/Diary";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
