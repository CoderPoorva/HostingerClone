import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Button } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  color: "black",
  boxShadow: "none",
  borderBottom: "1px solid #ddd",
});

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "30px 20px",
  height: "80px",
});

export const NavLinks = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
});

export const StyledLogo = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: "20px",
  cursor: "pointer",
});

export const StyledDropdown = styled("div")({
  display: "inline-block",
  margin: "0 10px",
});

export const StyledButton = styled(Button)({
  borderRadius: "5px",
  border: "2px solid black",
  padding: "5px 15px",
  textTransform: "none",
  color: "black",
});
export const SalesBar = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#6a71ea",
  height: "50px",
    color: "white",
    gap: "15px",
});
export const SaleButton = styled(Button)({
  borderRadius: "5px",
  border: "2px solid white",
  padding: "5px 15px",
  textTransform: "none",
  color: "white",
});
