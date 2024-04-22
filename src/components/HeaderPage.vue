<template>
  <div>
    <v-app-bar elevation="1">
      <v-app-bar-nav-icon variant="text"></v-app-bar-nav-icon>

      <v-toolbar-title>Ezy POS</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn class="Profile-icon" v-bind="props">
            P
          </v-btn>
        </template>
        <v-list>
          <v-list-item title="Profile" value="Profile">
          </v-list-item>
          <v-list-item>
            <v-btn variant="tonal" @click="logout()">
              Log Out
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script setup>
import ApiUrls from "@/auth/apiUrls";
import axiosInstance from "@/auth/interceptors";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";


function logout() {
  axiosInstance.get(ApiUrls.logout).then((res) => {
    localStorage.removeItem("user")
    console.log(res);
    window.location.reload();

  }).catch((error) => {
    toast.error(error.message);
  });
}



</script>
