"use client"

import { useSearchParams } from "next/navigation"
import { Alert } from "@mui/material"

import { errorMessages } from "@/lib/constants"

export function ErrorAlert() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error")

  const message = errorMessages[error]

  if (!message) return null

  return <Alert severity="error">{message}</Alert>
}
