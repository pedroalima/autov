"use client";
import * as M from "@mui/material";
import { Memory } from "@mui/icons-material";

export default function Home() {
	const theme = M.useTheme();
	const smDown = M.useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<M.Box>
			<M.Grid 
				container 
				display="flex" 
				justifyContent="space-evenly" 
				alignItems="center"
			>
				<M.Grid 
					item xs={12} 
					sm={12}
					minHeight={325}
					textAlign="center"
					height={smDown ? "70vh" : "95vh"}
					marginBottom={smDown ? "5rem" : "0rem"}
					display="flex"
					justifyContent={smDown ? "none" : "center"}
					alignItems={smDown ? "end" : "center"}
				>
					<M.Box 
						sx={{ background: "#00000084"}}
						padding="2rem 0"
					>
						<M.Typography 
							variant={smDown ? "h6" : "h3"} 
							textTransform="uppercase"
							color="white"
						>Explorando o Poder Sob o Capô: As Máquinas Mais Poderosas do Mercado!</M.Typography>
					</M.Box>
				</M.Grid>

				<M.Grid 
					item xs={12} 
					sm={12} 
					display="flex" 
					flexDirection="column" 
					justifyContent="center"
					alignItems="center"
					gap="2rem"
				>
					<M.Card sx={{ 
						width: smDown ? "90%" : "70%",
						textAlign: "center", 
						padding: smDown ? "0" : "3rem 5rem",
						marginBottom: "2rem",
					}}>
						<M.Typography 
							variant="h5" 
							textTransform="uppercase" 
							padding="2rem 0"
						>Encontre a força</M.Typography>
						<M.CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem"}}>
							<Memory />
							<M.Typography component="span" variant="h6">Desbrave o mundo automotivo e mergulhe no coração das máquinas mais poderosas do mercado. Descubra o que está sob o capô e sinta a adrenalina da verdadeira performance.</M.Typography>
						</M.CardContent>
						<M.CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem"}}>
							<Memory />
							<M.Typography component="span" variant="h6">Explore a revolução sob o capô dos carros modernos. De motores impressionantes a tecnologias avançadas, nossa cobertura detalhada levará você a uma jornada através da potência automotiva.</M.Typography>
						</M.CardContent>
						<M.CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem"}}>
							<Memory />
							<M.Typography component="span" variant="h6">Na busca pela excelência automotiva, mergulhamos fundo para revelar os segredos das máquinas mais potentes. Prepare-se para uma viagem emocionante pelo desempenho automotivo de última geração.</M.Typography>
						</M.CardContent>
					</M.Card>
				</M.Grid>
			</M.Grid>
		</M.Box>
	);
}
