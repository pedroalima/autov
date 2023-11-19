"use client"

import { useState } from 'react';
import * as M from "@mui/material"
import { Menu } from '@mui/icons-material';
import Drawer from './drawer';

const navItems = ["Home"];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    return (
        <M.Box>
            <M.AppBar component="nav">
                <M.Toolbar>
                    <M.Typography
                        variant="h6"
                        component="div"
                        textTransform="uppercase"
                        sx={{ flexGrow: 1 }}
                    >
                        Auto V
                    </M.Typography>

                    <M.IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </M.IconButton>
                    
                    <M.Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                        <M.Button key={item} sx={{ color: '#fff' }}>
                            {item}
                        </M.Button>
                        ))}
                    </M.Box>
                </M.Toolbar>
            </M.AppBar>
            <nav>
                <Drawer navItems={navItems} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            </nav>
        </M.Box>
    )
}