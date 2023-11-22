import * as M from "@mui/material";
import Image from 'next/image'

export default function Home() {
	return (
		<M.Box component="main">
			<M.Grid container minHeight="90vh">
				<M.Grid item xs={12} sm={6}>
					<Image
						src="/corvett.png"
						width={350}
						height={250}
						alt="Picture of the author"
					/>
				</M.Grid>

				<M.Grid item xs={12} sm={6}>
					<M.Typography>Descrição</M.Typography>
				</M.Grid>
			</M.Grid>
		</M.Box>
	);
}
