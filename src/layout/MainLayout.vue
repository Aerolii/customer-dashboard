<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>New Dashboards</q-toolbar-title>
        <q-btn flat round dense label="save" class="q-mr-sm" />
        <q-btn flat round dense label="cancel" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
