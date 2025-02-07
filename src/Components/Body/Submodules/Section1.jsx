import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Container } from "@mui/material";
import { StyledSection, StyledLeft, StyledRight, StyledTimerButton } from './Styles/Section1Style';


const Section1 = () => {

  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <StyledSection>
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Left Section */}
        <StyledLeft>
          <Typography variant="h3">Up to 80% off: Everything you need to grow online</Typography>
          <Typography variant="h6">Launch your website from ₹129.00 /mo</Typography>
          <Typography variant="body1">+ 3 extra months & free domain</Typography>
          <Box sx={{ display: "flex", gap: 2, marginTop: "20px" }}>
            <Button variant="contained" color="primary" sx={{ fontSize: "18px", padding: "10px 30px" }}>
              Start Now
            </Button>
            <StyledTimerButton>{formatTime(timeLeft)}</StyledTimerButton>
          </Box>
          <Typography variant="caption" sx={{ marginTop: "10px", display: "block", color: "#6a5eab" }}>
            30-day money-back guarantee
          </Typography>
        </StyledLeft>

        {/* Right Section */}
        <StyledRight>
          <img src="/Images/pic1.png" 
          alt="Offer" />
        </StyledRight>
      </Box>
    </Container>
  </StyledSection>
  )
}

export default Section1