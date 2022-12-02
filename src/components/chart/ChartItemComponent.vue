<script setup lang="ts">
import type { ChartOption } from "@/stores/chartStore";

defineProps<{ chart: ChartOption }>();
</script>

<template>
  <div
    class="bg-primary chart-item"
    :style="{ height: chart.height, width: chart.with }"
  >
    {{ chart.name }}
  </div>
</template>
