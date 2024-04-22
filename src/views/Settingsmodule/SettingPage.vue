<template>
    <v-layout>
        <HeaderPage />
        <SideBar />
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-layout>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import SideBar from "../../components/SideBar.vue";

export default {
    name: "HomePage",
    data() {
        return {};
    },
    components: {
        HeaderPage,
        SideBar,
    },
};
</script>

<style scoped></style>
