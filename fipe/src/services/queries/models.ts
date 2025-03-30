import { useQuery } from "@tanstack/react-query"

import { errorMessages } from "@/lib/constants"
import { getCarModelsByBrand } from "@/services/fipe"

interface UseCarModelsParams {
  brandCode?: string
}

export function useCarModels({ brandCode }: UseCarModelsParams) {
  return useQuery({
    queryKey: ["models", brandCode],
    queryFn: async () => {
      if (!brandCode) return []

      const { data, error } = await getCarModelsByBrand({ brandCode })

      if (error) {
        throw new Error(errorMessages[error])
      }

      return data
    },
    retry: false,
  })
}
