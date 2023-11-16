import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import {Box, Typography} from '@mui/material'

export default function Layout() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
}
