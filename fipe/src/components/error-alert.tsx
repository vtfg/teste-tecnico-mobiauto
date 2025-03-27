"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Alert, Collapse, IconButton } from "@mui/material"
import { Close } from "@mui/icons-material"

export function ErrorAlert() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  const [open, setOpen] = useState(true)

  const errorMessage = {
    BAD_REQUEST:
      "Você precisa preencher todos os campos antes de consultar o preço.",
    NOT_FOUND: "Item não encontrado. Realize a pesquisa novamente.",
    TOO_MANY_REQUESTS:
      "Você fez muitas pesquisas em um curto período de tempo. Tente novamente mais tarde.",
  }[error]

  if (!errorMessage) return null

  return (
    <Collapse in={open}>
      <Alert
        severity="error"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen(false)
            }}
          >
            <Close fontSize="inherit" />
          </IconButton>
        }
      >
        {errorMessage}
      </Alert>
    </Collapse>
  )
}
