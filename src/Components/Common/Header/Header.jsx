import React from "react";
import { StyledAppBar, StyledToolbar, StyledLogo, StyledDropdown, StyledButton, NavLinks, SalesBar, SaleButton } from "./Style/Header";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuType, setMenuType] = useState("");

  const handleClick = (event, type) => {
    setAnchorEl(event.currentTarget);
    setMenuType(type);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuType("");
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <div style={{display: "flex", alignItems: "center",gap: "20px",justifyContent: "center"}}>
        <StyledLogo>
          <Typography variant="h6">HOSTINGER</Typography>
        </StyledLogo>

        <Typography variant="body2">English</Typography>
        </div>
      <NavLinks>
        <StyledDropdown>
          <Button 
            onClick={(e) => handleClick(e, "wordpress")}
            endIcon={<ExpandMore />}
            style={{color: "black"}}
          >
            WordPress
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={menuType === "wordpress"}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Themes</MenuItem>
            <MenuItem onClick={handleClose}>Plugins</MenuItem>
            <MenuItem onClick={handleClose}>Hosting</MenuItem>
          </Menu>
        </StyledDropdown>

        <StyledDropdown>
          <Button
            onClick={(e) => handleClick(e, "websiteBuilder")}
            endIcon={<ExpandMore />}
            style={{color: "black"}}
          >
            Website builder
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={menuType === "websiteBuilder"}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Templates</MenuItem>
            <MenuItem onClick={handleClose}>Features</MenuItem>
          </Menu>
        </StyledDropdown>

        <StyledDropdown>
          <Button
            onClick={(e) => handleClick(e, "hosting")}
            endIcon={<ExpandMore />}
            style={{color: "black"}}
          >
            Hosting
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={menuType === "hosting"}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Shared Hosting</MenuItem>
            <MenuItem onClick={handleClose}>Cloud Hosting</MenuItem>
          </Menu>
        </StyledDropdown>

        <Typography style={{marginRight:"10px"}}>Pro</Typography>
        <Typography style={{marginRight:"10px"}}>Domain</Typography>

        <StyledButton variant="outlined">Log in</StyledButton>
        </NavLinks>
      </StyledToolbar>
      <SalesBar>
        <Typography>GIANT HOST SALE</Typography>
        <SaleButton variant="outlined">GRAB NOW</SaleButton>
      </SalesBar>
    </StyledAppBar>
  );
};

export default Header;
