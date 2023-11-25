import * as M from "@mui/material";
import Image from "next/image";

export default function Mustang() {
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
						src="/mustang.png"
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
						<M.Typography component="h3">Corvertt</M.Typography>
						<M.Typography component="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</M.Typography>
						<M.Typography component="a">Site</M.Typography>
					</M.Box>

					<M.Card sx={{ width: "90%"}}>
						<M.CardContent sx={{ display: "flex", justifyContent: "space-between"}}>
							<M.Typography component="h6">Exemplo</M.Typography>
							<M.Typography component="span">135415 km</M.Typography>
						</M.CardContent>
					</M.Card>
				</M.Grid>
			</M.Grid>
		</M.Box>
	);
}