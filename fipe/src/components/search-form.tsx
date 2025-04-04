"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Autocomplete, Button, Stack, TextField } from "@mui/material"
import { enqueueSnackbar } from "notistack"

import { Brand, Model, Year } from "@/services/fipe"
import { useCarModels } from "@/services/queries/models"
import { useCarYears } from "@/services/queries/years"

interface SearchFormProps {
  initialData: {
    brands?: Brand[]
  }
}

export function SearchForm({ initialData }: SearchFormProps) {
  const router = useRouter()

  const [brand, setBrand] = useState<Brand | null>(null)
  const [model, setModel] = useState<Model | null>(null)
  const [year, setYear] = useState<Year | null>(null)

  const {
    data: models,
    isLoading: isModelsLoading,
    error: modelsError,
  } = useCarModels({
    brandCode: brand?.codigo,
  })

  const {
    data: years,
    isLoading: isYearsLoading,
    error: yearsError,
  } = useCarYears({
    brandCode: brand?.codigo,
    modelCode: model?.codigo,
  })

  const allFieldsFilled = !!brand && !!model && !!year

  useEffect(() => {
    if (modelsError) {
      enqueueSnackbar(modelsError.message, {
        variant: "error",
      })
    }
  }, [modelsError])

  useEffect(() => {
    if (yearsError) {
      enqueueSnackbar(yearsError.message, {
        variant: "error",
      })
    }
  }, [yearsError])

  function handleSubmit() {
    if (!allFieldsFilled) {
      enqueueSnackbar("Preencha todos os campos para concluir a pesquisa.", {
        variant: "error",
      })
      return
    }

    const query = new URLSearchParams({
      brand: brand.codigo,
      model: model.codigo.toString(),
      year: year.codigo,
    })

    router.push("/price?" + query.toString())
  }

  return (
    <Stack direction="column" spacing={2} sx={{ alignItems: "center" }}>
      <Autocomplete
        id="brand"
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
        disabled={!initialData.brands}
        fullWidth
      />

      <Autocomplete
        id="model"
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
        disabled={!brand || !models}
        fullWidth
      />

      {model && (
        <Autocomplete
          id="year"
          disablePortal
          options={years}
          getOptionLabel={(option) => option.nome}
          getOptionKey={(option) => option.codigo}
          value={year}
          onChange={(_, value) => setYear(value)}
          renderInput={(params) => <TextField {...params} label="Ano" />}
          noOptionsText="Ano não encontrado."
          loading={isYearsLoading}
          disabled={!years}
          fullWidth
        />
      )}

      <Button
        variant="contained"
        sx={{ width: "50%" }}
        onClick={handleSubmit}
        disabled={!allFieldsFilled}
      >
        Consultar preço
      </Button>
    </Stack>
  )
}
