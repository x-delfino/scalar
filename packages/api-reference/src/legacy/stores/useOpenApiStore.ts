import type { OpenAPIV3, OpenAPIV3_1 } from '@scalar/openapi-types'
import type { TransformedOperation } from '@scalar/types/legacy'
import { reactive } from 'vue'

export type OpenApiState = {
  operation: Partial<TransformedOperation>
  globalSecurity:
    | OpenAPIV3.SecurityRequirementObject[]
    | OpenAPIV3_1.SecurityRequirementObject[]
}

export const createEmptyOpenApiState = (): OpenApiState => ({
  operation: {},
  globalSecurity: [],
})

const openApi = reactive<OpenApiState>(createEmptyOpenApiState())

const setOperation = (newOperation: TransformedOperation | undefined) => {
  Object.assign(openApi, {
    ...openApi,
    operation: newOperation,
  })
}

const setGlobalSecurity = (
  newGlobalSecurity: OpenAPIV3_1.SecurityRequirementObject[] | undefined,
) => {
  Object.assign(openApi, {
    ...openApi,
    globalSecurity: newGlobalSecurity,
  })
}

export const useOpenApiStore = () => ({
  openApi,
  setOperation,
  setGlobalSecurity,
})
