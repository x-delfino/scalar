<script lang="ts" setup>
import content from '../../../../examples/web/src/fixtures/petstorev3.json'

useHead({
  title: 'Scalar API Reference',
})
</script>

<template>
  <ApiReference
    :configuration="{
      showSidebar: true,
      // spec: { url: 'https://petstore.swagger.io/v2/swagger.json' },
      spec: { content },
    }">
  </ApiReference>
</template>
