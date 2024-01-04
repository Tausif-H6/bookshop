import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginScreen from "./components/LoginScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
