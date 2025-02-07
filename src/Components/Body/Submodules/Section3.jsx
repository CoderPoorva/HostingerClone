import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import { buttonStyle, card, cardContainer, container, listStyle, priceStyle } from './Styles/Section3Style';

const plans = [
  {
    name: "Single",
    price: "₹69/month",
    features: [
      "1 Website",
      "50 GB SSD Storage",
      "100 GB Bandwidth",
      "1 Email Account",
      "Free SSL",
    ],
  },
  {
    name: "Premium",
    price: "₹149/month",
    features: [
      "100 Websites",
      "100 GB SSD Storage",
      "Unlimited Bandwidth",
      "Free Domain (1st Year)",
      "Free SSL",
      "24/7 Support",
    ],
  },
  {
    name: "Business",
    price: "₹249/month",
    features: [
      "100 Websites",
      "200 GB SSD Storage",
      "Daily Backups",
      "Free CDN",
      "Free Domain (1st Year)",
      "Priority Support",
    ],
  },
  {
    name: "Cloud Startup",
    price: "₹699/month",
    features: [
      "300 Websites",
      "200 GB NVMe Storage",
      "3 GB RAM",
      "Dedicated IP",
      "Free Domain (1st Year)",
      "24/7 Support",
    ],
  },
];

const Section3 = () => {
  return (
    <Box sx={container}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Choose Your Hosting Plan
      </Typography>
      <Box sx={cardContainer}>
        {plans.map((plan, index) => (
          <Box key={index} sx={card}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {plan.name}
            </Typography>
            <Typography sx={priceStyle}>{plan.price}</Typography>
            <List sx={listStyle}>
              {plan.features.map((feature, i) => (
                <ListItem key={i}>
                  <ListItemText primary={`• ${feature}`} />
                </ListItem>
              ))}
            </List>
            <Button sx={buttonStyle}>Purchase</Button>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Section3