<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const handleClickToHome = () => router.push({ name: "Home" });
</script>

<template>
  <q-header>
    <q-toolbar class="text-primar shadow-2">
      <q-btn flat round dense icon="menu" />
      <q-btn flat label="Homepage" @click="handleClickToHome" />
      <q-space />
      <q-btn flat round dense icon="more_vert" />
    </q-toolbar>
  </q-header>
</template>
