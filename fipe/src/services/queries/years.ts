import { useQuery } from "@tanstack/react-query"

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

      const years = await getCarYearsByBrandAndModel({ brandCode, modelCode })

      return years
    },
  })
}
