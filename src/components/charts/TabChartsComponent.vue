<script setup lang="ts">
const charts = [{ name: "chart-1", value: 1, label: "Chart" }];
</script>

<template>
  <div v-for="(item, index) in charts" :key="index" class="chart-item">
    {{ item.name }}
  </div>
</template>


