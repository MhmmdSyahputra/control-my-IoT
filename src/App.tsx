import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, UkurJarak } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/measure-distance" element={<UkurJarak />} />
      </Routes>
    </>
  );
}

export default App;
