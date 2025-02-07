import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const StyledFooter = styled("footer")({
  backgroundColor: "#f4f0ff",
  padding: "40px 0",
  color: "#3a2f76",
});

export const StyledColumn = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  "& h6": {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  "& p": {
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const StyledBottom = styled(Box)({
  marginTop: "40px",
  textAlign: "center",
  paddingTop: "20px",
  borderTop: "1px solid #d1c4e9",
  "& h6": {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  "& p": {
    fontSize: "14px",
    color: "#6a5eab",
  },
});

export const StyledIcon = styled("span")({
  margin: "0 8px",
  cursor: "pointer",
  fontSize: "30px",
  color: "#3a2f76",
  "&:hover": {
    color: "#6a5eab",
  },
});

export const StyledPaymentIcons = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "10px",
  "& img": {
    width: "50px",
    height: "30px",
  },
});
