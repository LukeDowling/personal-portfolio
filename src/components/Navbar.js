import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ProjectMenu from "./ProjectMenu.js";

const toolbarStyle = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "tan",
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontWeight: "bold",
};

function Navbar() {
  return (
    <div id="navbar">
      <AppBar position="sticky">
        <Toolbar style={toolbarStyle}>
          <img
            style={{ width: 40, height: 40 }}
            src={require("./images/logoblack.png")}
            alt="logo"
          />
          <Link style={linkStyle} to="/">
            <Button style={linkStyle}>home</Button>
          </Link>
          <ProjectMenu />
          <Link style={linkStyle} to="/contact">
            <Button style={linkStyle}>Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
