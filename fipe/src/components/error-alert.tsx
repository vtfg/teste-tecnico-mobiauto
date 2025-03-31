"use client"

import { Alert } from "@mui/material"

import { errorMessages } from "@/lib/constants"

interface ErrorAlertProps {
  error?: string
}

export function ErrorAlert({ error }: ErrorAlertProps) {
  const message = errorMessages[error]

  if (!message) return null

  return <Alert severity="error">{message}</Alert>
}
