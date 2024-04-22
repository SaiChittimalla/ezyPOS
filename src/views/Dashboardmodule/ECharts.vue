<template>
  <div>
    <div class="header-div d-flex justify-space-between">
      <div>
        <h4 class="page-name">Dash Board</h4>
      </div>
      <div class="actions-btn">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn class="actions-btn" v-bind="props"> Actions </v-btn>
          </template>
          <v-list>
            <v-list-item prepend-icon="mdi-reload" title="Re-Upload" value="Re-Upload">
            </v-list-item>
            <v-list-item prepend-icon="mdi-trash-can-outline" title="Delete" value="Delete">
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div class="border-div">
      <v-chart class="chart" :option="option" autoresize />
    </div>
  </div>
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, LegendComponent } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);

provide(THEME_KEY, "dark");

const option = ref({
  title: {
    text: "Traffic Sources",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
  },
  series: [
    {
      name: "Traffic Sources",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 234, name: "Ad Networks" },
        { value: 135, name: "Video Ads" },
        { value: 1548, name: "Search Engines" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});
</script>

<style scoped>
.chart {
  height: 100vh;
}
</style>
