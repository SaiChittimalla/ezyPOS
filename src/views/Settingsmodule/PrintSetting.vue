<template>
    <div>
        <div class="border-div">
            <v-chart class="chart" :option="option" autoresize />
        </div>
    </div>
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GridComponent } from "echarts/components";
import { TitleComponent, TooltipComponent, LegendComponent } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

// Import specific chart types if needed
// import { PieChart } from "echarts/charts";

// Use necessary ECharts components and renderers
use([CanvasRenderer, TitleComponent, TooltipComponent, LegendComponent, GridComponent]);

// Provide theme key (make sure it matches a defined theme in your app)
provide(THEME_KEY, "dark");

const option = ref({
    xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
        type: "value",
    },
    series: [
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "bar",
        },
    ],
});
</script>

<style scoped>
.chart {
    height: 100vh;
}
</style>
