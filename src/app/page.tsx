import * as M from "@mui/material";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>AutoV</title>
			</Head>
			<M.Box>
				<M.Grid container minHeight="90vh">
					<M.Grid 
						item xs={12} 
						sm={6} 
						display="flex" 
						justifyContent="center" 
						alignItems="center"
						minHeight={325}
						paddingTop="50vh"
						textAlign="center"
					>
						<M.Typography variant="h4" color="white">Potência e elegancia</M.Typography>
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
		</>
		
	);
}
