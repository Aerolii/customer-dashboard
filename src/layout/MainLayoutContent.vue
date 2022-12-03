<script setup lang="ts">
import { RouterView } from "vue-router";
import MainLayoutDrawer from "./MainLayoutDrawer.vue";
import useLayout from "@/composables/useLayoutDrawer";

const { showLeftDrawer } = useLayout();
</script>

<template>
  <MainLayoutDrawer v-if="showLeftDrawer" />
  <q-page-container>
    <q-page>
      <RouterView />
    </q-page>
  </q-page-container>
</template>
