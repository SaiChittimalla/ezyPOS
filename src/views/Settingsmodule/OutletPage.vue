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
import { PieChart, BarChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, LegendComponent } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([
    CanvasRenderer,
    PieChart,
    BarChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
]);

provide(THEME_KEY, "dark");

const option = ref({
    backgroundColor: "#2c343c",
    title: {
        text: "Customized Pie",
        left: "center",
        top: 20,
        textStyle: {
            color: "#ccc",
        },
    },
    tooltip: {
        trigger: "item",
    },
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1],
        },
    },
    series: [
        {
            name: "Access From",
            type: "pie",
            radius: "55%",
            center: ["50%", "50%"],
            data: [
                { value: 335, name: "Direct" },
                { value: 310, name: "Email" },
                { value: 274, name: "Union Ads" },
                { value: 235, name: "Video Ads" },
                { value: 400, name: "Search Engine" },
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: "radius",
            label: {
                color: "rgba(255, 255, 255, 0.3)",
            },
            labelLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.3)",
                },
                smooth: 0.2,
                length: 10,
                length2: 20,
            },
            itemStyle: {
                color: "#c23531",
                shadowBlur: 200,
                shadowColor: "rgba(0, 0, 0, 0.5)",
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            // animationDelay: function (idx) {
            //     return Math.random() * 200;
            // },
        },
    ],
});
</script>

<style scoped>
.chart {
    height: 100vh;
}
</style>
