import React,{useState} from "react";
import { AppBar, Toolbar, IconButton, Typography, Box,Button, Menu, MenuList, MenuItem } from "@mui/material";
import QuizIcon from '@mui/icons-material/Quiz';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export let Navbar = () => {
    const [anchorNav,setanchorNav] = useState(false);
    const openMenu = ()=>{
         setanchorNav(!anchorNav);
    }
    const closeMenu = ()=>{
        setanchorNav(!anchorNav);
   }
    return (
        <>
            <AppBar position="sticky" sx={{"@media(max-width:750px)":{width:"980px"}}}>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <QuizIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>My Quiz App</Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Button color="inherit" href="/">Home</Button>
                        <Button color="inherit" href="/quiz">My Quizes</Button>
                        <Button color="inherit" href="/playquiz">Play Quize</Button>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: 'none' } }}>
                        <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={openMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu open={anchorNav} onClose={closeMenu} sx={{ display: { xs: 'flex', md: 'none' }}}>
                            <MenuList>
                                <MenuItem component={Link} to="/" onClick={closeMenu}>Home</MenuItem>
                                <MenuItem component={Link} to="/quiz" onClick={closeMenu}>My Quizes</MenuItem>
                                <MenuItem component={Link} to="/playquiz" onClick={closeMenu}>Play Quiz</MenuItem>
                            </MenuList>
                        </Menu>
                        <IconButton size="large" edge="start" color="inherit" aria-label="logo" sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <QuizIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },marginTop:1}}>My Quiz App</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}