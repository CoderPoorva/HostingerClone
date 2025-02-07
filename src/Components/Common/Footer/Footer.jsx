import React from 'react';
import { Container, Grid2, Typography, Box } from "@mui/material";
import { StyledFooter, StyledColumn, StyledBottom, StyledIcon, StyledPaymentIcons } from "./Style/Footer";
import { Facebook, Instagram, LinkedIn, YouTube, X } from "@mui/icons-material";

const Footer = () => {
  return (
    <StyledFooter>
    <Container maxWidth="lg">
      <Grid2 container spacing={4}>
        {/* Hosting Section */}
        <Grid2 item xs={12} sm={4} md={2}>
          <StyledColumn>
            <Typography variant="h6">HOSTING</Typography>
            <Typography style={{fontSize:"15px"}}>Web hosting</Typography>
            <Typography style={{fontSize:"15px"}}>WordPress Hosting</Typography>
            <Typography style={{fontSize:"15px"}}>VPS hosting</Typography>
            <Typography style={{fontSize:"15px"}}>Business email</Typography>
            <Typography style={{fontSize:"15px"}}>Cloud hosting</Typography>
            <Typography style={{fontSize:"15px"}}>WooCommerce hosting</Typography>
            <Typography style={{fontSize:"15px"}}>Hosting for agencies</Typography>
            <Typography style={{fontSize:"15px"}}>Minecraft hosting</Typography>
            <Typography style={{fontSize:"15px"}}>Game server hosting</Typography>
            <Typography style={{fontSize:"15px"}}>Google Workspace</Typography>
          </StyledColumn>
        </Grid2>

        {/* Domain Section */}
        <Grid2 item xs={12} sm={4} md={2}>
          <StyledColumn>
            <Typography variant="h6">DOMAIN</Typography>
            <Typography style={{fontSize:"15px"}}>Domains</Typography>
            <Typography style={{fontSize:"15px"}}>Cheap domains</Typography>
            <Typography style={{fontSize:"15px"}}>Free Domain Name</Typography>
            <Typography style={{fontSize:"15px"}}>WHOIS Lookup</Typography>
            <Typography style={{fontSize:"15px"}}>Free SSL certificate</Typography>
            <Typography style={{fontSize:"15px"}}>Domain transfer</Typography>
            <Typography style={{fontSize:"15px"}}>Domain Extensions</Typography>
          </StyledColumn>
        </Grid2>

        {/* Tools Section */}
        <Grid2 item xs={12} sm={4} md={2}>
          <StyledColumn>
            <Typography variant="h6">TOOLS</Typography>
            <Typography style={{fontSize:"15px"}}>Website Builder</Typography>
            <Typography style={{fontSize:"15px"}}>AI Website Builder</Typography>
            <Typography style={{fontSize:"15px"}}>eCommerce Website Builder</Typography>
            <Typography style={{fontSize:"15px"}}>Business Name Generator</Typography>
            <Typography style={{fontSize:"15px"}}>AI Logo Generator</Typography>
            <Typography style={{fontSize:"15px"}}>Migrate to Hostinger</Typography>
          </StyledColumn>
        </Grid2>

        {/* Information Section */}
        <Grid2 item xs={12} sm={4} md={2}>
          <StyledColumn>
            <Typography variant="h6">INFORMATION</Typography>
            <Typography style={{fontSize:"15px"}}>Pricing</Typography>
            <Typography style={{fontSize:"15px"}}>Hostinger Reviews</Typography>
            <Typography style={{fontSize:"15px"}}>Affiliate program</Typography>
            <Typography style={{fontSize:"15px"}}>Referral program</Typography>
            <Typography style={{fontSize:"15px"}}>Roadmap</Typography>
            <Typography style={{fontSize:"15px"}}>Rewards</Typography>
            <Typography style={{fontSize:"15px"}}>System status</Typography>
            <Typography style={{fontSize:"15px"}}>Sitemap</Typography>
          </StyledColumn>
        </Grid2>

        {/* Company Section */}
        <Grid2 item xs={12} sm={4} md={2}>
          <StyledColumn>
            <Typography variant="h6">COMPANY</Typography>
            <Typography style={{fontSize:"15px"}}>About Hostinger</Typography>
            <Typography style={{fontSize:"15px"}}>Our technology</Typography>
            <Typography style={{fontSize:"15px"}}>Blog</Typography>
          </StyledColumn>
        </Grid2>

        {/* Support Section */}
        <Grid2 item xs={12} sm={4} md={2}>
          <StyledColumn>
            <Typography variant="h6">SUPPORT</Typography>
            <Typography style={{fontSize:"15px"}}>Tutorials</Typography>
            <Typography style={{fontSize:"15px"}}>Knowledge Base</Typography>
            <Typography style={{fontSize:"15px"}}>Contact us</Typography>
            <Typography style={{fontSize:"15px"}}>Report Online Abuse</Typography>
          </StyledColumn>
        </Grid2>
      </Grid2>

      {/* Bottom Section */}
      <StyledBottom>
        <Box>
          <Typography variant="h6">HOSTINGER</Typography>
          <StyledPaymentIcons>
            
          </StyledPaymentIcons>
        </Box>

        {/* Social Icons */}
        <Box>
          <StyledIcon>
            <LinkedIn style={{fontSize:"30px"}}/>
          </StyledIcon>
          <StyledIcon>
            <Facebook style={{fontSize:"30px"}}/>
          </StyledIcon>
          <StyledIcon>
            <Instagram style={{fontSize:"30px"}}/>
          </StyledIcon>
          <StyledIcon>
            <X style={{fontSize:"30px"}}/>
          </StyledIcon>
          <StyledIcon>
            <YouTube style={{fontSize:"30px"}}/>
          </StyledIcon>
        </Box>

        {/* Policies */}
        <Box>
          <Typography>Privacy policy</Typography>
          <Typography>Refund policy</Typography>
          <Typography>Terms of service</Typography>
        </Box>

        {/* Copyright */}
        <Box>
          <Typography>
            © 2004-2025 hostinger.in – Premium Web Hosting, Cloud, VPS, AI Website Builder & Domain Registration Services.
          </Typography>
          <Typography>Prices are listed without GST</Typography>
        </Box>
      </StyledBottom>
    </Container>
  </StyledFooter>
  );
};

export default Footer