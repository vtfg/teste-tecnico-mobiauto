import { redirect } from "next/navigation"
import { Card, CardContent, Typography, Stack } from "@mui/material"

import { ErrorAlert } from "@/components/error-alert"
import { SearchForm } from "@/components/search-form"
import { getCarBrands } from "@/services/fipe"

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams

  const { data: brands, error } = await getCarBrands()

  if (error && params.error !== error) {
    redirect(`/?error=${error}`)
  }

  // Removes the error from the query if the API returns data
  if (!error && params.error) {
    redirect("/")
  }

  return (
    <Card variant="outlined" sx={{ width: "100%", maxWidth: "sm" }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
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
  )
}
