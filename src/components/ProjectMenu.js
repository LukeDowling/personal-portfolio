import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const buttonStyle = {
  color: "black",
  fontWeight: "bold",
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
};

function ProjectMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        style={buttonStyle}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-label="Projects"
        onClick={handleClick}
      >
        Projects
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link style={linkStyle} to="/randomquotemachine">
          <MenuItem onClick={handleClose}>Random Quote Machine</MenuItem>
        </Link>
        <Link style={linkStyle} to="/drummachine">
          <MenuItem onClick={handleClose}>Drum Machine</MenuItem>
        </Link>
        <Link style={linkStyle} to="/calculator">
          <MenuItem onClick={handleClose}>Calculator</MenuItem>
        </Link>
        <Link style={linkStyle} to="/Timer">
          <MenuItem onClick={handleClose}>Timer</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default ProjectMenu;
