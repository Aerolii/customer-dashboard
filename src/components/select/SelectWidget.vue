<script setup lang="ts">
import type { SelectWidget } from "@/stores/widgetStore";
import { ref, watch } from "vue";

const props = defineProps<{ option: SelectWidget }>();
defineEmits<{ (e: "change", value: string): void }>();

const model = ref(props.option.value || "");

console.log(props.option.value);

// eslint-disable-next-line vue/no-setup-props-destructure
const options = props.option.options;

watch(model, (val) => {
  console.log("val", val);
});
</script>

<template>
  <q-select
    outlined
    v-model="model"
    :options="options"
    label="Outlined"
    @update:model-value="$emit('change', model)"
  />
</template>
