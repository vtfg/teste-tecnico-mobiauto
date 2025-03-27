import { default as Axios } from "axios"

export const axios = Axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1",
})
