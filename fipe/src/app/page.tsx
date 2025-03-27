import { redirect } from "next/navigation"
import { Card, CardContent, Typography, Container, Stack } from "@mui/material"

import { ErrorAlert } from "@/components/error-alert"
import { SearchForm } from "@/components/search-form"
import { getCarBrands } from "@/services/fipe"

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams

  const brands = await getCarBrands()

  // The API is rate limited
  if (!brands && params.error !== "TOO_MANY_REQUESTS") {
    redirect("/?error=TOO_MANY_REQUESTS")
  }

  // Removes the TOO_MANY_REQUESTS error from query if the API returns data
  if (brands && params.error === "TOO_MANY_REQUESTS") {
    redirect("/")
  }

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

          <Stack spacing={2} sx={{ marginTop: 3 }}>
            <ErrorAlert />
            <SearchForm initialData={{ brands }} />
          </Stack>
        </CardContent>
      </Card>
    </Container>
  )
}
