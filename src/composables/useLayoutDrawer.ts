import { computed, ref } from "vue";
import { useRoute } from "vue-router";

// 布局视图控制
const useLayout = () => {
  const route = useRoute();

  const showLeftDrawer = computed(() => route.meta.showLeftDrawer);

  setTimeout(() => {
    route.meta.showLeftDrawer = true;
    console.log(route.meta.showLeftDrawer);
  }, 3000);

  return {
    showLeftDrawer,
  };
};

export default useLayout;
