<script lang="ts" setup>
import MainHeaderComponent from "./MainHeaderComponent.vue";
import MainDrawerLayout from "./MainDrawerLayout.vue";
import { APP_INFO_CONFIG } from "@/config/app.config";
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <MainHeaderComponent title="hello" />
    <MainDrawerLayout />
    <q-page-container>
      <q-page class="q-pa-md">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
