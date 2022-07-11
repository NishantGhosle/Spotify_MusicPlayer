import "./App.css";
import Navbar from "./Components/Navbar";
import Addsong from "./Components/Addsong";
import Home from "./Components/Home";
import Edit from "./Components/Edit";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/addsong" element={<Addsong />} />
        <Route exact path="*" element={<Navigate to="/home" />} />
        <Route exact path="/users/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
