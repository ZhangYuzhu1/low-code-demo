<script setup lang="ts">
const { updateAppHead } = useApp()

onBeforeMount(() => {
  const { VITE_APP_NAME } = import.meta.env

  updateAppHead(VITE_APP_NAME)
})
</script>

<template>
  <div class="">
    Client
  </div>
</template>
