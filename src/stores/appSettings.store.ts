import { ref } from "vue";
import { defineStore } from "pinia";

const useAppSettings = defineStore("appSettings", () => {
  const leftDrawerOpen = ref(false);
  const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value;
  };

  return {
    leftDrawerOpen,
    toggleLeftDrawer,
  };
});

export default useAppSettings;
