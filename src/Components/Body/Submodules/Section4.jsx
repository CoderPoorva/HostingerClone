import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import { List, FlashOn, CheckCircle } from "@mui/icons-material";
import { buttonStyle, card, cardContainer, container,iconStyle } from './Styles/Section4Style';

const migrationSteps = [
  {
    icon: <List sx={iconStyle} />,
    title: "3 simple steps",
    description:
      "Simply pick your plan, fill in the migration request form, submit it and then sit back and relax.",
  },
  {
    icon: <FlashOn sx={iconStyle} />,
    title: "Fast and secure",
    description:
      "95% of websites are migrated in under 20 minutes. The other 5% are quicker than the industry average. And, your site stays live the whole time too.",
  },
  {
    icon: <CheckCircle sx={iconStyle} />,
    title: "Free",
    description:
      "Whether you have 1 website to migrate or 100, migration is free with all of our plans.",
  },
];

const Section4 = () => {
  return (
    <Box sx={container}>
    <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
      Website migration. Made simple.
    </Typography>
    <Typography
      variant="body1"
      sx={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", mt: 2 }}
    >
      Currently hosting your website elsewhere? Join the 3+ million website
      owners who enjoy fast, secure and reliable web hosting here at
      Hostinger. Our expert team will handle everything while your site stays
      up and running throughout. That’s right – no downtime. No data loss. No
      problem.
    </Typography>

    <Box sx={cardContainer}>
      {migrationSteps.map((step, index) => (
        <Box key={index} sx={card}>
          {step.icon}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {step.title}
          </Typography>
          <Typography variant="body2">{step.description}</Typography>
        </Box>
      ))}
    </Box>

    <Button sx={buttonStyle}>Get started</Button>
  </Box>
  )
}

export default Section4