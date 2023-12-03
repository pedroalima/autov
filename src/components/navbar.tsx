"use client";

import { useState } from "react";
import * as M from "@mui/material";
import { Menu } from "@mui/icons-material";
import Drawer from "./drawer";
import Link from "next/link";
import Image from "next/image";

const navItems = ["corvett", "mustang", "camaro"];

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	return (
		<>
			<M.AppBar component="nav" color="transparent" sx={{ boxShadow: "none"}}>
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
								width={82}
								height={24}
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
								<M.Button variant="outlined" color="primary">
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