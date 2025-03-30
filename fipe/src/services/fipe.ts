import { AxiosError, HttpStatusCode } from "axios"

import { axios } from "@/lib/axios"
import { ApplicationError } from "@/types"

export interface Brand {
  codigo: string
  nome: string
}

export interface Model {
  codigo: number
  nome: string
}

export interface Year {
  codigo: string
  nome: string
}

export interface Car {
  AnoModelo: number
  CodigoFipe: string
  Combustivel: string
  Marca: string
  MesReferencia: string
  Modelo: string
  SiglaCombustivel: string
  TipoVeiculo: number
  Valor: string
}

type GetCarBrandsResponse = {
  data: Brand[]
  error?: ApplicationError
}

export async function getCarBrands(): Promise<GetCarBrandsResponse> {
  try {
    const { data } = await axios.get("/carros/marcas")

    return { data, error: null }
  } catch (error) {
    if (!(error instanceof AxiosError)) {
      return { data: null, error: "INTERNAL_SERVER_ERROR" }
    }

    const { status } = error as AxiosError

    if (status === HttpStatusCode.TooManyRequests) {
      return { data: null, error: "TOO_MANY_REQUESTS" }
    }

    return { data: null, error: "INTERNAL_SERVER_ERROR" }
  }
}

type GetCarModelsByBrandRequest = {
  brandCode: string
}

type GetCarModelsByBrandResponse = {
  data: Model[]
  error?: ApplicationError
}

export async function getCarModelsByBrand({
  brandCode,
}: GetCarModelsByBrandRequest): Promise<GetCarModelsByBrandResponse> {
  try {
    const { data } = await axios.get(`/carros/marcas/${brandCode}/modelos`)

    return { data: data.modelos, error: null }
  } catch (error) {
    if (!(error instanceof AxiosError)) {
      return { data: null, error: "INTERNAL_SERVER_ERROR" }
    }

    const { status } = error as AxiosError

    if (status === HttpStatusCode.TooManyRequests) {
      return { data: null, error: "TOO_MANY_REQUESTS" }
    }

    return { data: null, error: "INTERNAL_SERVER_ERROR" }
  }
}

type GetCarYearsByBrandAndModelRequest = {
  brandCode: string
  modelCode: number
}

type GetCarYearsByBrandAndModelResponse = {
  data: Year[]
  error?: ApplicationError
}

export async function getCarYearsByBrandAndModel({
  brandCode,
  modelCode,
}: GetCarYearsByBrandAndModelRequest): Promise<GetCarYearsByBrandAndModelResponse> {
  try {
    const { data } = await axios.get(
      `/carros/marcas/${brandCode}/modelos/${modelCode}/anos`,
    )

    return { data, error: null }
  } catch (error) {
    if (!(error instanceof AxiosError)) {
      return { data: null, error: "INTERNAL_SERVER_ERROR" }
    }

    const { status } = error as AxiosError

    if (status === HttpStatusCode.TooManyRequests) {
      return { data: null, error: "TOO_MANY_REQUESTS" }
    }

    return { data: null, error: "INTERNAL_SERVER_ERROR" }
  }
}

type GetCarRequest = {
  brandCode: string
  modelCode: number
  yearCode: string
}

type GetCarResponse = {
  data: Car
  error?: ApplicationError
}

export async function getCar({
  brandCode,
  modelCode,
  yearCode,
}: GetCarRequest): Promise<GetCarResponse> {
  try {
    const { data } = await axios.get(
      `/carros/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`,
    )

    return { data, error: null }
  } catch (error) {
    if (!(error instanceof AxiosError)) {
      return { data: null, error: "INTERNAL_SERVER_ERROR" }
    }

    const { status } = error as AxiosError

    if (status === HttpStatusCode.TooManyRequests) {
      return { data: null, error: "TOO_MANY_REQUESTS" }
    }

    if (status === HttpStatusCode.InternalServerError) {
      // The API returns 500 if the car is not found
      return { data: null, error: "NOT_FOUND" }
    }

    return { data: null, error: "INTERNAL_SERVER_ERROR" }
  }
}
