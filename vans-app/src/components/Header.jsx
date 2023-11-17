import { Box } from "@mui/material"
import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return (
   <Box sx={{ height: "110px", display: "flex", alignItems: "center", paddingBlock: "10px"}}>
   <Box sx ={{color: "black", marginRight: "auto", textTransform: "uppercase", fontWeight: "900", fontSize: "25px", padding:"10px"}}>
    <Link to="/">#VanLife</Link>
    </Box>
    <Box>   
     <Box sx={{ color: "#4D4D4D",fontWeight:"500",padding: "5px 20px"}}> 
        <NavLink 
            to="/host"
            style={({isActive}) => isActive ? activeStyles : null}
        >
            Host
        </NavLink>
        <NavLink 
            to="/about"
            style={({isActive}) => isActive ? activeStyles : null}
        >
            About
        </NavLink>
        <NavLink 
            to="/vans"
            style={({isActive}) => isActive ? activeStyles : null}
        >
            Vans
        </NavLink>
    </Box>
    </Box>
</Box>

    )
}