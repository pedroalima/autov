"use client";
import * as M from "@mui/material";

type DataType = {
    name: string,
    horsepower: number,
    accelerationTime: number,
    maxSpeed: number
}

export default function StatusCar ({data} : { data: DataType}) {
	const theme = M.useTheme();
	const smDown = M.useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<M.Box sx={{ display: "flex", flexDirection: "column", gap: smDown ? "0.5rem" : "1rem"}}>
			<M.Box sx={{ display: "flex", justifyContent: "space-between", border: "1px solid #e2e2e2", borderRadius: "10px", padding: "0.5rem"}}>
				<M.Typography component="h6" variant="h6">Vel. Máxima</M.Typography>
				<M.Typography component="span" fontWeight={700}>{data.maxSpeed} KM</M.Typography>
			</M.Box>
			<M.Box sx={{ display: "flex", justifyContent: "space-between", border: "1px solid #e2e2e2", borderRadius: "10px", padding: "0.5rem"}}>
				<M.Typography component="h6" variant="h6">Cav. Potencia</M.Typography>
				<M.Typography component="span" fontWeight={700}>{data.horsepower}</M.Typography>
			</M.Box>
			<M.Box sx={{ display: "flex", justifyContent: "space-between", border: "1px solid #e2e2e2", borderRadius: "10px", padding: "0.5rem"}}>
				<M.Typography component="h6" variant="h6">Vai de 0 a 100</M.Typography>
				<M.Typography component="span" fontWeight={700}>{data.accelerationTime} /s</M.Typography>
			</M.Box>
		</M.Box>
	);
}