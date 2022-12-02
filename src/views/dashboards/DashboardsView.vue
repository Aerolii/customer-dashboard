<!-- <script setup lang="ts">
import ChartItemComponent from "@/components/chart/ChartItemComponent.vue";
import SelectWidget from "@/components/select/SelectWidget.vue";
import TabsComponent from "@/components/tabs/TabsComponent.vue";
import { useChartStore } from "@/stores/chartStore";
import { useWidgetStore } from "@/stores/widgetStore";
// import ChartItemComponent from "./../../components/chart/ChartItemComponent.vue";

const chartStore = useChartStore();
const widgetStore = useWidgetStore();
const widgets = widgetStore.selectedWidgets;
const { setWidget } = widgetStore;

// const charts = chartStore.activeCharts;

const handleChangeSelect = (
  val: string | number | null | undefined,
  index: number
) => {
  setWidget(index, val?.toString() || "");
  console.log(widgets[index]);
};
</script>

<template>
  <q-drawer show-if-above side="left" bordered>
    <TabsComponent />
  </q-drawer>

  <q-page>
    <div class="q-gutter-md">
      <ChartItemComponent
        v-for="(item, index) in chartStore.activeCharts"
        :key="index"
        :chart="item"
      />

      <template v-for="(item, index) in widgets" :key="index">
        <template v-if="item.type === 'select'">
          <SelectWidget
            :option="item"
            @change="handleChangeSelect($event, index)"
          />
        </template>
      </template>
    </div>
  </q-page>
</template>

<style scoped>
.chart-item {
  cursor: pointer;
}
</style> -->

<script setup lang="ts"></script>

<template>
  <div>hello world</div>
</template>
