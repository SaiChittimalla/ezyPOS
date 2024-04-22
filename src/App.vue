<template>
  <loader-page v-if="loadValue"></loader-page>
  <router-view></router-view>
</template>

<script setup>
import "./styles/style.scss";
import { loadValue } from "./components/loader/loader";
import LoaderPage from "./components/loader/LoaderPage.vue";
</script>

<style lang="scss"></style>
