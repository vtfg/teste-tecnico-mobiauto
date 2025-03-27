import { useQuery } from "@tanstack/react-query"

import { getCarModelsByBrand } from "@/services/fipe"

interface UseCarModelsParams {
  brandCode?: string
}

export function useCarModels({ brandCode }: UseCarModelsParams) {
  return useQuery({
    queryKey: ["models", brandCode],
    queryFn: async () => {
      if (!brandCode) return []

      const models = await getCarModelsByBrand({ brandCode })

      return models
    },
  })
}
