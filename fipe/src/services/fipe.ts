import { axios } from "@/lib/axios"

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

type GetCarBrandsResponse = Brand[]

export async function getCarBrands() {
  try {
    const response = await axios.get<GetCarBrandsResponse>("/carros/marcas")

    return response.data
  } catch {}
}

type GetCarModelsByBrandRequest = {
  brandCode: string
}

type GetCarModelsByBrandResponse = {
  modelos: Model[]
}

export async function getCarModelsByBrand({
  brandCode,
}: GetCarModelsByBrandRequest) {
  const response = await axios.get<GetCarModelsByBrandResponse>(
    `/carros/marcas/${brandCode}/modelos`,
  )

  return response.data.modelos
}

type GetCarYearsByBrandAndModelRequest = {
  brandCode: string
  modelCode: number
}

type GetCarYearsByBrandAndModelResponse = Year[]

export async function getCarYearsByBrandAndModel({
  brandCode,
  modelCode,
}: GetCarYearsByBrandAndModelRequest) {
  const response = await axios.get<GetCarYearsByBrandAndModelResponse>(
    `/carros/marcas/${brandCode}/modelos/${modelCode}/anos`,
  )

  return response.data
}

type GetCarRequest = {
  brandCode: string
  modelCode: number
  yearCode: string
}

type GetCarResponse = Car

export async function getCar({
  brandCode,
  modelCode,
  yearCode,
}: GetCarRequest) {
  try {
    const response = await axios.get<GetCarResponse>(
      `/carros/marcas/${brandCode}/modelos/${modelCode}/anos/${yearCode}`,
    )

    return response.data
  } catch {}
}
