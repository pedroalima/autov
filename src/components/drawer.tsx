"use client";

import * as M from "@mui/material";
import Link from "next/link";

interface Props {
    window?: () => Window;
    navItems: string[];
    mobileOpen: boolean;
    handleDrawerToggle: ()=> void;
}

const drawerWidth = 240;

export default function Drawer(props: Props) {
	const { window, navItems, mobileOpen, handleDrawerToggle} = props;
	const container = window !== undefined ? () => window().document.body : undefined;

	const drawer = (
		<M.Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<M.List>
				{navItems.map((item) => (
					<Link key={item} href={`/${item}`}>
						<M.ListItem  disablePadding>
							<M.ListItemButton sx={{ textAlign: "center" }}>
								<M.ListItemText primary={item} />
							</M.ListItemButton>
						</M.ListItem>
					</Link>
				))}
			</M.List>
		</M.Box>
	);

	return (
		<M.Drawer
			container={container}
			anchor='right'
			variant="temporary"
			open={mobileOpen}
			onClose={handleDrawerToggle}
			ModalProps={{
				keepMounted: true,
			}}
			sx={{
				display: { xs: "block", sm: "none" },
				"& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
			}}
		>
			{drawer}
		</M.Drawer>
	);
}