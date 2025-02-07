import { styled } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

export const StyledSection = styled("section")({
  backgroundColor: "#ffffff",
  padding: "60px 0",
});

export const StyledLeft = styled(Box)({
  maxWidth: "50%",
  "& h3": {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#3a2f76",
    marginBottom: "10px",
  },
  "& h6": {
    fontSize: "20px",
    color: "#6a5eab",
    marginBottom: "5px",
  },
  "& p": {
    fontSize: "16px",
    color: "#6a5eab",
  },
});

export const StyledRight = styled(Box)({
  width: "50%",
  "& img": {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
  },
});

export const StyledTimerButton = styled(Button)({
  fontSize: "18px",
  padding: "10px 30px",
  backgroundColor: "#eff9ff",
  color: "#4c62ec",
  "&:hover": {
    backgroundColor: "#dadcef",
  },
});
