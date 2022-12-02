<script setup lang="ts">
import useAppSettings from "@/stores/appSettings.store";

const appSettings = useAppSettings();
</script>

<template>
  <q-drawer
    show-if-above
    v-model="appSettings.leftDrawerOpen"
    side="left"
    class="q-pa-md"
  >
    <!-- drawer content -->
  </q-drawer>
</template>
