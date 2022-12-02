<script lang="ts" setup>
import useAppSettings from "@/stores/appSettings.store";

defineProps<{ title: string }>();

const { toggleLeftDrawer } = useAppSettings();
</script>

<template>
  <q-header reveal elevated class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      <q-toolbar-title> {{ title }} </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
