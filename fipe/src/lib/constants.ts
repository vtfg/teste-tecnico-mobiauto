import { ApplicationError } from "@/types"

type ErrorMessages = {
  [key in ApplicationError]: string
}

export const errorMessages: ErrorMessages = {
  BAD_REQUEST:
    "Você precisa preencher todos os campos antes de consultar o preço.",
  NOT_FOUND: "Carro não encontrado. Realize a pesquisa novamente.",
  TOO_MANY_REQUESTS:
    "Você fez muitas pesquisas em um curto período de tempo. Tente novamente mais tarde.",
  INTERNAL_SERVER_ERROR:
    "Um erro desconhecido ocorreu. Tente novamente mais tarde.",
}
