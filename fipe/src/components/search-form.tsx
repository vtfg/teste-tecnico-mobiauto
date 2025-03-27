"use client"

import { useState } from "react"
import { Autocomplete, Button, Stack, TextField } from "@mui/material"

import { Brand, Model, Year } from "@/services/fipe"
import { useCarModels } from "@/services/queries/models"
import { useCarYears } from "@/services/queries/years"

interface SearchFormProps {
  initialData: {
    brands?: Brand[]
  }
}

export function SearchForm({ initialData }: SearchFormProps) {
  const [brand, setBrand] = useState<Brand | null>(null)
  const [model, setModel] = useState<Model | null>(null)
  const [year, setYear] = useState<Year | null>(null)

  const { data: models, isLoading: isModelsLoading } = useCarModels({
    brandCode: brand?.codigo,
  })

  const { data: years, isLoading: isYearsLoading } = useCarYears({
    brandCode: brand?.codigo,
    modelCode: model?.codigo,
  })

  const shouldButtonBeDisabled = !brand || !model || !year

  function handleSubmit() {
    console.table({ brand, model, year })
  }

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
        value={brand}
        onChange={(_, value) => {
          setModel(null)
          setYear(null)
          setBrand(value)
        }}
        renderInput={(params) => <TextField {...params} label="Marca" />}
        noOptionsText="Marca não encontrada."
        loading={!initialData.brands}
        fullWidth
      />

      <Autocomplete
        disablePortal
        options={models}
        getOptionLabel={(option) => option.nome}
        getOptionKey={(option) => option.codigo}
        value={model}
        onChange={(_, value) => {
          setYear(null)
          setModel(value)
        }}
        renderInput={(params) => <TextField {...params} label="Modelo" />}
        noOptionsText="Modelo não encontrado."
        loading={isModelsLoading}
        disabled={!brand}
        fullWidth
      />

      {model && (
        <Autocomplete
          disablePortal
          options={years}
          getOptionLabel={(option) => option.nome}
          getOptionKey={(option) => option.codigo}
          value={year}
          onChange={(_, value) => setYear(value)}
          renderInput={(params) => <TextField {...params} label="Ano" />}
          noOptionsText="Ano não encontrado."
          loading={isYearsLoading}
          fullWidth
        />
      )}

      <Button
        variant="contained"
        sx={{ width: "50%" }}
        onClick={handleSubmit}
        disabled={shouldButtonBeDisabled}
      >
        Consultar preço
      </Button>
    </Stack>
  )
}
