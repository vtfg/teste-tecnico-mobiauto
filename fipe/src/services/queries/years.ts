import { useQuery } from "@tanstack/react-query"

import { errorMessages } from "@/lib/constants"
import { getCarYearsByBrandAndModel } from "@/services/fipe"

interface UseCarYearsParams {
  brandCode?: string
  modelCode?: number
}

export function useCarYears({ brandCode, modelCode }: UseCarYearsParams) {
  return useQuery({
    queryKey: ["years", brandCode, modelCode],
    queryFn: async () => {
      if (!brandCode || !modelCode) return []

      const { data, error } = await getCarYearsByBrandAndModel({
        brandCode,
        modelCode,
      })

      if (error) {
        throw new Error(errorMessages[error])
      }

      return data
    },
    retry: false,
  })
}
