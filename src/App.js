import "./App.css";
import Navbar from "./components/Navbar.js";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div id="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
