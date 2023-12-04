"use client";

import { createTheme } from "@mui/material";

export const Theme = createTheme({
	palette: {
		primary: {
			light: "#515761",
			main: "#333942",
			dark: "#131921",
			contrastText: "#FFFFFF",
		},
		secondary: {
			light: "#ffffff",
			main: "#fafafa",
			dark: "#f5f5f5",
			contrastText: "#203447",
		},
		background: {
			default: "#F7F6F3",
			paper: "#FFFFFF",
		}
	}
});