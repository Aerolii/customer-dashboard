<script setup lang="ts">
import { useChartStore, type ChartOption } from "@/stores/chartStore";
import { useWidgetStore } from "@/stores/widgetStore";
import { ref } from "vue";
import ChartItemComponent from "../chart/ChartItemComponent.vue";
const tabs = [
  { name: "charts", label: "Charts" },
  { name: "widgets", label: "Widgets" },
];

const { charts, add } = useChartStore();

const { selectWidgets, add: addWidget } = useWidgetStore();

const tab = ref(tabs[0].name);

const model = ref(null);
const options = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

const chartLabel = ref("");

const handleAdd = (chart: ChartOption) => add(chart);

const handleAddWidget = (widget: any) => addWidget(widget);
</script>

<template>
  <q-tabs v-model="tab" inline-label class="bg-teal text-white shadow-2">
    <template v-for="(item, index) in tabs" :key="index">
      <q-tab :name="item.name" :label="item.label" />
    </template>
  </q-tabs>
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel name="charts">
      <div class="q-gutter-md">
        <ChartItemComponent
          v-for="(item, index) in charts"
          :key="index"
          :chart="item"
          @click="handleAdd(item)"
        />
      </div>
    </q-tab-panel>

    <q-tab-panel name="widgets">
      <div class="q-gutter-md">
        <template v-for="(item, index) in selectWidgets" :key="index">
          <div
            style="width: 260px; height: 56px; cursor: pointer"
            class="bg-primary"
            @click="handleAddWidget(item)"
          />
        </template>
        <!-- <ChartItemComponent
          v-for="(item, index) in widgets"
          :key="index"
          :chart="item"
          @click="handleAddWidget(item)"
        />
        <q-input outlined v-model="chartLabel" label="Outlined" /> -->
      </div>
    </q-tab-panel>
  </q-tab-panels>
</template>
