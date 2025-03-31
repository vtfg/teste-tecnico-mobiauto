import { redirect } from "next/navigation"
import {
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material"
import { ArrowBack } from "@mui/icons-material"

import { getCar } from "@/services/fipe"

interface PriceProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Price({ searchParams }: PriceProps) {
  const params = await searchParams

  if (!Object.keys(params).length) {
    return redirect("/?error=BAD_REQUEST")
  }

  const brandCode = params.brand as string
  const modelCode = Number(params.model?.toString())
  const yearCode = params.year as string

  if (!brandCode || !modelCode || !yearCode) {
    return redirect("/?error=BAD_REQUEST")
  }

  const { data: car, error } = await getCar({ brandCode, modelCode, yearCode })

  if (error) {
    return redirect(`/?error=${error}`)
  }

  async function handleRedirectBack() {
    "use server"

    redirect("/")
  }

  return (
    <Card variant="outlined" sx={{ width: "100%", maxWidth: "sm" }}>
      <CardContent>
        <Button
          size="small"
          startIcon={<ArrowBack />}
          sx={{ marginBottom: 2 }}
          onClick={handleRedirectBack}
        >
          Voltar
        </Button>

        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          Tabela Fipe
        </Typography>
        <Typography variant="h5" component="h1" fontWeight="bold">
          {car.Marca} {car.Modelo} {car.AnoModelo}
        </Typography>

        <Stack spacing={2} sx={{ justifyContent: "center", marginTop: 2 }}>
          <Chip
            label={car.Valor}
            color="primary"
            component="h2"
            sx={{ fontSize: 16 }}
          />

          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Este é o preço de compra do veículo.
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
