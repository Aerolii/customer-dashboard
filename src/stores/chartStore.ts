import { ref } from "vue";
import { defineStore } from "pinia";

export interface ChartOption {
  name: string;
  value: number;
  label: string;
  color: string;
  height: string;
  with: string;
}

export const useChartStore = defineStore("chartStore", () => {
  const charts: Array<ChartOption> = [
    {
      name: "chart-1",
      value: 1,
      label: "Chart1",
      color: "primary",
      height: "90px",
      with: "260px",
    },
    {
      name: "chart-2",
      value: 2,
      label: "Chart2",
      color: "primary",
      height: "90px",
      with: "260px",
    },
    {
      name: "chart-3",
      value: 3,
      label: "Chart3",
      color: "primary",
      height: "90px",
      with: "260px",
    },
  ];

  const activeCharts = ref<Array<ChartOption>>([]);

  const add = (chart: ChartOption) => activeCharts.value.push(chart);

  return {
    charts,
    activeCharts,
    add,
  };
});
