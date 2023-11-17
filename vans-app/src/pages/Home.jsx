import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)) no-repeat center center",
        minHeight: "350px",
        color: "white",
        padding: "45px 23px",
      }}
    >
      <Box  sx={{ display: "flex", height: '50px'}}>
        <Typography
          sx={{ fontWeight: 700, fontSize: "2.25rem", lineHeight: "42px" }}
        >
          You got the travel plans, we got the travel vans.
        </Typography>
      </Box>

      <Box sx={{ height: '200px'}}>
      <Typography sx={{ lineHeight: "24px" }}>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </Typography>
      </Box>

      <Box> 
      <Button
        sx={{
          display: "inline-block",
          textAlign: "center",
          padding: ".75rem 1.375rem",
          color: "initial",
          backgroundColor: "#FF8C38",
          fontWeight: 700,
          width: "100%" ,
          borderRadius: "5px",
          cursor: "pointer",
          transition: "transform .1s ease-in-out",
        }}
         href="vans" 
      >
          Find your van
      
      </Button>
      </Box>
    </Box>
  );
}

