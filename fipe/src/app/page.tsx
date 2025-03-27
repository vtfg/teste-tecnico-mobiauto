import { Card, CardContent, Typography, Container } from "@mui/material"

import { SearchForm } from "@/components/search-form"
import { getCarBrands } from "@/services/fipe"

export default async function Home() {
  const brands = await getCarBrands()

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card variant="outlined" sx={{ maxWidth: "sm" }}>
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

          <SearchForm initialData={{ brands }} />
        </CardContent>
      </Card>
    </Container>
  )
}
