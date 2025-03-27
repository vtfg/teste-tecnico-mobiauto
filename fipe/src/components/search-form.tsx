"use client"

import { useState } from "react"
import { Autocomplete, Button, Stack, TextField } from "@mui/material"

import { Brand, Model } from "@/services/fipe"
import { useCarModelsAndYears as useCarModels } from "@/services/queries/models"

interface SearchFormProps {
  initialData: {
    brands?: Brand[]
  }
}

export function SearchForm({ initialData }: SearchFormProps) {
  const [brand, setBrand] = useState<Brand>()
  const [model, setModel] = useState<Model>()

  const { data: models, isLoading } = useCarModels({
    brandCode: brand?.codigo,
  })

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{ alignItems: "center", marginTop: 3 }}
    >
      <Autocomplete
        disablePortal
        options={initialData.brands}
        getOptionLabel={(option) => option.nome}
        getOptionKey={(option) => option.codigo}
        renderInput={(params) => <TextField {...params} label="Marca" />}
        onChange={(_, value) => setBrand(value)}
        loading={!initialData.brands}
        fullWidth
      />

      <Autocomplete
        disablePortal
        options={models}
        getOptionLabel={(option) => option.nome}
        getOptionKey={(option) => option.codigo}
        renderInput={(params) => <TextField {...params} label="Modelo" />}
        onChange={(_, value) => setModel(value)}
        loading={isLoading}
        disabled={!brand}
        fullWidth
      />

      {model && (
        <Autocomplete
          disablePortal
          options={[]}
          renderInput={(params) => <TextField {...params} label="Ano" />}
          disabled
          fullWidth
        />
      )}

      <Button variant="contained" sx={{ width: "50%" }} disabled>
        Consultar preço
      </Button>
    </Stack>
  )
}
