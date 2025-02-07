import React from 'react';
import { Box, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import { ratingBox, ratingsContainer, reviewText, starsRow } from './Styles/Section2Style';

const reviews = [
  {
    name: "Trustpilot",
    score: "4.7",
    reviews: "39,638",
    stars: 4.5,
  },
  {
    name: "Google",
    score: "4.8",
    reviews: "1,237",
    stars: 5,
  },
  {
    name: "hostadvice",
    score: "4.6",
    reviews: "2,432",
    stars: 5,
  },
  {
    name: "wpbeginner",
    score: "4.7",
    reviews: "874",
    stars: 5,
  },
];

const Section2 = () => {
  return (
    <Box sx={ratingsContainer}>
    <Typography variant="h6" sx={{ textAlign: "center", mb: 3 }}>
      Recommended by <strong>WordPress.org</strong>
    </Typography>
    <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
      {reviews.map((item, index) => (
        <Box key={index} sx={ratingBox}>
          <Typography variant="h6">{item.name}</Typography>
          <Box sx={starsRow}>
            {[...Array(Math.floor(item.stars))].map((_, i) => (
              <Star key={i} sx={{ color: "#00b67a" }} />
            ))}
            {item.stars % 1 !== 0 && (
              <Star sx={{ color: "#00b67a", opacity: 0.5 }} />
            )}
          </Box>
          <Typography sx={reviewText}>
            Rating: <strong>{item.score}</strong> {item.reviews} reviews
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
  )
}

export default Section2