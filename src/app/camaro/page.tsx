import StatusCar from "@/components/statusCar";
import { data } from "@/utils/data";
import * as M from "@mui/material";
import Image from "next/image";

export default function Camaro() {
	const dataCamaro = data[1];

	return (
		<M.Box component="main">
			<M.Grid container minHeight="90vh">
				<M.Grid 
					item xs={12} 
					sm={6} 
					display="flex" 
					justifyContent="center" 
					alignItems="center"
					minHeight={325}
				>
					<Image
						src="/camaro.png"
						priority
						width={360}
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
					<M.Box textAlign="center">
						<M.Typography component="h3">{data[1].name}</M.Typography>
						<M.Typography component="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</M.Typography>
						<M.Typography component="a">Site</M.Typography>
					</M.Box>

					<StatusCar data={dataCamaro} />
				</M.Grid>
			</M.Grid>
		</M.Box>
	);
}