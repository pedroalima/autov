import * as M from "@mui/material";

type DataType = {
    name: string,
    horsepower: number,
    accelerationTime: number,
    maxSpeed: number
}

export default function StatusCar ({data} : { data: DataType}) {
	return (
		<M.Box sx={{ width: "90%", display: "flex", flexDirection: "column", gap: "0.5rem"}}>
			<M.Box sx={{ display: "flex", justifyContent: "space-between", border: "1px solid #e2e2e2", borderRadius: "10px", padding: "0.5rem"}}>
				<M.Typography component="h6">Vel. Máxima</M.Typography>
				<M.Typography component="span">{data.maxSpeed} KM</M.Typography>
			</M.Box>
			<M.Box sx={{ display: "flex", justifyContent: "space-between"}}>
				<M.Typography component="h6">Cav. Potencia</M.Typography>
				<M.Typography component="span">{data.horsepower}</M.Typography>
			</M.Box>
			<M.Box sx={{ display: "flex", justifyContent: "space-between"}}>
				<M.Typography component="h6">Vai de 0 a 100</M.Typography>
				<M.Typography component="span">{data.accelerationTime} /s</M.Typography>
			</M.Box>
		</M.Box>
	);
}