import StatusCar from "@/components/status-car";
import { DataElementType } from "@/utils/data";
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
import * as M from "@mui/material";
import Image from "next/image";

export default function PageCar({ dataCar } : { dataCar: DataElementType}) {
	// const theme = useTheme();
	// const smDown = useMediaQuery(theme.breakpoints.down("sm"));
	
	return (
		<M.Box component="main">
			<M.Grid container>
				<M.Grid 
					item xs={12} 
					sm={6} 
					display="flex" 
					justifyContent="center" 
					alignItems="center"
					minHeight={325}
					paddingTop="40vh"
					textAlign="center"
				>
					<Image
						src={`/${dataCar.name}.png`}
						priority
						width={430}
						height={250}
						alt="Picture of the author"
					/>
				</M.Grid>

				<M.Grid 
					item xs={12} 
					sm={6} 
					display="flex" 
					flexDirection="column" 
					justifyContent="center" 
					alignItems="center"
					gap="2rem"
				>
					<M.Card sx={{ width: "85%", padding: "2rem 0.5rem", margin: "2rem 2rem"}}>
						<M.Box textAlign="center">
							<M.Typography component="h2" variant="h4" textTransform="capitalize">{`${dataCar.name}`}</M.Typography>
							<M.Typography component="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</M.Typography>
							<M.Typography component="a">Site</M.Typography>
						</M.Box>
						<StatusCar data={dataCar} />
					</M.Card>

					
				</M.Grid>
			</M.Grid>
		</M.Box>
	);
}