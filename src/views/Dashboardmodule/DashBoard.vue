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
        <div class="border-div h-100">
            <div>
                <h6>--Default Carousels</h6>
                <div class="row gap-2">
                    <div class="col-4">
                        <v-carousel>
                            <template v-slot:prev="{ props }">
                                <button class="arrows" @click="props.onClick">
                                    <i class="ri-arrow-left-circle-fill"></i>
                                </button>
                            </template>
                            <template v-slot:next="{ props }">
                                <button class="arrows" @click="props.onClick">
                                    <i class="ri-arrow-right-circle-fill"></i>
                                </button>
                            </template>
                            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                cover></v-carousel-item>

                            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                                cover></v-carousel-item>

                            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                cover></v-carousel-item>
                        </v-carousel>
                    </div>
                    <div class="col-4">
                        <v-carousel hide-delimiters>
                            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                cover></v-carousel-item>

                            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                                cover></v-carousel-item>

                            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                cover></v-carousel-item>
                        </v-carousel>
                    </div>
                    <div class="col-4">
                        <v-carousel cycle show-arrows="hover">
                            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                cover></v-carousel-item>

                            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
                                cover></v-carousel-item>

                            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                cover></v-carousel-item>
                        </v-carousel>
                    </div>
                    <div class="col-4">
                        <v-carousel height="400" progress="primary" hide-delimiters>
                            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                                <v-sheet height="100%">
                                    <div class="d-flex fill-height justify-center align-center">
                                        <div class="text-h2">{{ slide }} Slide</div>
                                    </div>
                                </v-sheet>
                            </v-carousel-item>
                        </v-carousel>
                    </div>
                    <div class="col-4">
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" class="d-block w-100"
                                        alt="img" />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" class="d-block w-100"
                                        alt="img" />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" class="d-block w-100"
                                        alt="img" />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h5>--Charts</h5>
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
