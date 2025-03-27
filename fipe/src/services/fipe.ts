import { axios } from "@/lib/axios"

export type GetCarBrandsResponse = {
  codigo: string
  nome: string
}[]

export async function getCarBrands() {
  const response = await axios.get<GetCarBrandsResponse>("/carros/marcas")

  return response.data
}
