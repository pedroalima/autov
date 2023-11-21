import * as M from "@mui/material"

export default function Home() {
  return (
    <M.Box component="main" position="relative">
      <M.Grid container minHeight="90vh">
        <M.Grid item xs={12} sm={6}>
          <M.Typography>Imagem</M.Typography>
        </M.Grid>

        <M.Grid item xs={12} sm={6}>
          <M.Typography>Descrição</M.Typography>
        </M.Grid>
      </M.Grid>
    </M.Box>
  )
}
