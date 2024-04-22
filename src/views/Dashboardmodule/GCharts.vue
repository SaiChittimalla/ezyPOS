<template>
  <div>
    <div class="border-div">
      <h5>--Google Charts</h5>
      <div class="row">
        <div class="col">
          <div>
            <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
            <GChart type="PieChart" :data="chartData" :options="chartOptions" />
            <GChart type="BarChart" :data="chartData" :options="chartOptions" />
            <GChart type="LineChart" :data="chartData" :options="chartOptions" />
            <GChart type="BubbleChart" :data="chartData" :options="chartOptions" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
  name: "DashBoard",
  data() {
    return {
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
    };
  },
  components: {
    GChart,
  },
};
</script>

<style scoped>
.v-btn--active {
  background-color: green !important;
}
</style>
