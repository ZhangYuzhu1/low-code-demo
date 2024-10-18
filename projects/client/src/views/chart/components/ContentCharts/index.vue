<script setup lang="ts">
import ChartList from './components/ChartList'
import ChartLayers from './components/ChartLayers'
</script>

<template>
  <div
    flex="~ gap1"
    b-r="1 grey-3"
    select-none
  >
    <ChartList />
    <ChartLayers />
  </div>
</template>
