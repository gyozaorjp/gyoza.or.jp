<script setup lang="ts">
const error = useError();
</script>

<template>
  <main>
    <h1>HTTP 404</h1>
    <p class="error-message">{{ error?.message }}</p>
  </main>
</template>