"use client"

import { useState } from "react"
import { Autocomplete, Button, Stack, TextField } from "@mui/material"

import { GetCarBrandsResponse } from "@/services/fipe"

interface SearchFormProps {
  initialData: {
    brands?: GetCarBrandsResponse
  }
}

export function SearchForm({ initialData }: SearchFormProps) {
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
        loading={!initialData.brands}
        fullWidth
      />

      <Autocomplete
        disablePortal
        options={[]}
        renderInput={(params) => <TextField {...params} label="Modelo" />}
        disabled
        fullWidth
      />

      <Autocomplete
        disablePortal
        options={[]}
        renderInput={(params) => <TextField {...params} label="Ano" />}
        disabled
        fullWidth
      />

      <Button variant="contained" sx={{ width: "50%" }} disabled>
        Consultar preço
      </Button>
    </Stack>
  )
}
