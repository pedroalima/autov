"use client";
import { useState } from "react";
import * as M from "@mui/material";
import { Menu } from "@mui/icons-material";
import Drawer from "./drawer";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const navItems = ["corvett", "mustang", "camaro"];

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down("sm"));

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	return (
		<>
			<M.AppBar 
				component="nav"  
				color="transparent"
				sx={{ 
					boxShadow: "0px 5px 0.8rem #0000005b",
					background: "#0000005b"
				}}>
				<M.Toolbar>
					<M.Typography
						variant="h6"
						component="div"
						textTransform="uppercase"
						fontWeight={700}
						sx={{ flexGrow: 1 }}
					>
						<Link href="/" >
							<Image
								src="/logo.png"
								priority
								width={smDown ? 82 : 78}
								height={smDown ? 24 : 20}
								alt="Picture of the author"
							/>
						</Link>
					</M.Typography>

					<M.IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<Menu />
					</M.IconButton>
                    
					<M.Box sx={{ display: { xs: "none", sm: "flex" }, gap: "2rem" }}>
						{navItems.map((item) => (
							<Link href={`/${item}`} key={item}>
								<M.Button variant="outlined" color="secondary">
									{item}
								</M.Button>
							</Link>
						))}
					</M.Box>
				</M.Toolbar>
			</M.AppBar>
			<nav>
				<Drawer navItems={navItems} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
			</nav>
		</>
	);
}