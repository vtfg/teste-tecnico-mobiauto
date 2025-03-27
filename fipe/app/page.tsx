import { Card, CardContent, Typography, Container } from "@mui/material"

export default function Home() {
  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Tabela Fipe
          </Typography>
          <Typography variant="h5" component="div">
            Consulte o valor de um veículo de forma gratuita.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}
