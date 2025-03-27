import { axios } from "@/lib/axios"

export interface Brand {
  codigo: string
  nome: string
}

export interface Model {
  codigo: string
  nome: string
}

type GetCarBrandsResponse = Brand[]

export async function getCarBrands() {
  const response = await axios.get<GetCarBrandsResponse>("/carros/marcas")

  return response.data
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
