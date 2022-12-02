import { defineStore } from "pinia";
import { reactive } from "vue";

export interface SelectWidget {
  type: string;
  value: string;
  options: string[];
}

export const useWidgetStore = defineStore("widgetStore", () => {
  const selectWidgets: SelectWidget[] = [
    {
      type: "select",
      value: "",
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"],
    },
  ];

  const selectedWidgets = reactive<any[]>([]);

  const add = (widget: any) => selectedWidgets.push(Object.assign({}, widget));

  const setWidget = (index: number, val: string) =>
    (selectedWidgets[index].value = val);

  return {
    selectWidgets,
    selectedWidgets,
    add,
    setWidget,
  };
});
