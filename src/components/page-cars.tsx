"use client";
import StatusCar from "@/components/status-car";
import { DataElementType } from "@/utils/data";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as M from "@mui/material";
import Image from "next/image";

export default function PageCar({ dataCar } : { dataCar: DataElementType}) {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down("sm"));
	
	return (
		<M.Box component="main">
			<M.Grid container>
				<M.Grid 
					item xs={12} 
					sm={12} 
					display="flex" 
					justifyContent="center"
					alignItems="end"
					minHeight={smDown ? 325 : "110vh"}
					paddingTop={smDown ? "40vh" : 0}
				>
					<Image
						src={`/${dataCar.name}.png`}
						priority
						width={smDown ? 430 : 750}
						height={smDown ? 250 : 370}
						alt="Picture of the author"
					/>
				</M.Grid>

				<M.Grid 
					item xs={12} 
					sm={12} 
					display="flex" 
					flexDirection="column" 
					justifyContent="center" 
					alignItems="center"
				>
					<M.Card sx={{ 
						width: smDown ? "85%" : "60%", 
						padding: smDown ? "2rem 0.5rem" : "1.5rem", 
						margin: smDown ? "2rem 2rem" : "0 0 5rem"
					}}>
						<M.Box textAlign="center" paddingBottom="2rem">
							<M.Typography component="h2" variant="h2" textTransform="capitalize">{dataCar.name}</M.Typography>
							<M.Typography component="p" variant="h6">{dataCar.description}</M.Typography>
						</M.Box>
						<StatusCar data={dataCar} />
					</M.Card>
				</M.Grid>
			</M.Grid>
		</M.Box>
	);
}