import * as M from "@mui/material";

export default function Footer() {
	return (
		<M.Box component="footer" sx={{ minHeight: "25vh", display: "flex", justifyContent: "center", alignItems: "center", background: "rgb(66, 66, 66)"}}>
			<M.Typography variant="caption" color="white" >© 2023 - Pedro Lima</M.Typography>
		</M.Box>
	);
}