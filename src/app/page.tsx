import * as M from "@mui/material";
import Head from "next/head";
import { Memory } from "@mui/icons-material";

export default function Home() {
	return (
		<>
			<Head>
				<title>AutoV</title>
			</Head>
			<M.Box>
				<M.Grid container>
					<M.Grid 
						item xs={12} 
						sm={6} 
						display="flex" 
						justifyContent="center" 
						alignItems="center"
						minHeight={325}
						paddingTop="70vh"
						marginBottom="5rem"
						textAlign="center"
					>
						<M.Typography variant="h4" textTransform="uppercase" color="white">Potência e elegancia</M.Typography>
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
						<M.Card sx={{ width: "90%", textAlign: "center", paddingY: "3rem", marginBottom: "2rem" }}>
							<M.Typography variant="h5" textTransform="uppercase" paddingBottom="2rem">Encontre sua força</M.Typography>
							<M.CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem"}}>
								<Memory />
								<M.Typography component="span">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</M.Typography>
							</M.CardContent>
							<M.CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem"}}>
								<Memory />
								<M.Typography component="span">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</M.Typography>
							</M.CardContent>
							<M.CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem"}}>
								<Memory />
								<M.Typography component="span">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</M.Typography>
							</M.CardContent>
						</M.Card>
					</M.Grid>
				</M.Grid>
			</M.Box>
		</>
		
	);
}
