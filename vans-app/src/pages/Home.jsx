import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{
      background: "linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)) no-repeat center center",
      minHeight: "350px",
      color: "white",
      padding: "45px 23px",
    }}>
      <Box>
        <Typography sx={{ fontWeight: 700, fontSize: '2.25rem', lineHeight: '42px' }}>
          You got the travel plans, we got the travel vans.
        </Typography>
      </Box>

      <Typography sx={{ lineHeight: "24px" }}>
        Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
      </Typography>
      <Link to="vans">Find your van</Link>
    </Box>
  );
}

