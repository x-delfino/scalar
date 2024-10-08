<script setup lang="ts">
import type { TransformedOperation } from '@scalar/types/legacy'

import { ExampleRequest } from '../../../features/ExampleRequest'
import { ExampleResponses } from '../../../features/ExampleResponses'
import { Anchor } from '../../Anchor'
import { Badge } from '../../Badge'
import {
  Section,
  SectionColumn,
  SectionColumns,
  SectionContent,
  SectionHeader,
} from '../../Section'
import EndpointDetails from './EndpointDetails.vue'
import EndpointPath from './EndpointPath.vue'
import TestRequestButton from './TestRequestButton.vue'

defineProps<{
  id?: string
  operation: TransformedOperation
}>()
</script>
<template>
  <Section
    :id="id"
    :label="operation.name">
    <SectionContent>
      <SectionColumns>
        <SectionColumn>
          <Badge v-if="operation.information?.deprecated"> Deprecated </Badge>
          <div :class="operation.information?.deprecated ? 'deprecated' : ''">
            <SectionHeader :level="3">
              <Anchor :id="id ?? ''">
                {{ operation.name }}
              </Anchor>
            </SectionHeader>
          </div>
          <EndpointDetails :operation="operation" />
        </SectionColumn>
        <SectionColumn>
          <div class="examples">
            <ExampleRequest :operation="operation">
              <template #header>
                <EndpointPath
                  class="example-path"
                  :deprecated="operation.information?.deprecated"
                  :path="operation.path" />
              </template>
              <template #footer>
                <TestRequestButton :operation="operation" />
              </template>
            </ExampleRequest>
            <ExampleResponses
              :operation="operation"
              style="margin-top: 12px" />
          </div>
        </SectionColumn>
      </SectionColumns>
    </SectionContent>
  </Section>
</template>

<style scoped>
.examples {
  position: sticky;
  top: calc(var(--refs-header-height) + 24px);
}
.deprecated * {
  text-decoration: line-through;
}
.example-path {
  color: var(--scalar-color-2);
  font-family: var(--scalar-font-code);
}
.example-path :deep(em) {
  color: var(--scalar-color-1);
  font-style: normal;
}
</style>
