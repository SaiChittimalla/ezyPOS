<template>
    <div>
        <div class="header-div d-flex justify-space-between">
            <div>
                <h4 class="page-name">Discount Report</h4>
            </div>
            <div class="actions-btn">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn class="actions-btn" v-bind="props"> Actions </v-btn>
                    </template>
                    <v-list>
                        <!-- <v-list-item prepend-icon="mdi-reload" title="Re-Upload" value="Re-Upload">
              </v-list-item>
              <v-list-item prepend-icon="mdi-trash-can-outline" title="Delete" value="Delete">
              </v-list-item> -->
                    </v-list>
                </v-menu>
            </div>
        </div>
        <div class="border-div">
            <div class="row">
                <div class="col-lg-2 col-md-3 col-sm-12">
                    <div class="w-100 d-flex justify-center align-center">
                        <v-text-field clearable type="date"></v-text-field>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-12">
                    <div>
                        <v-select clearable placeholder="Status" :items="['Active', 'Inactive']"></v-select>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-12">
                    <v-text-field clearable append-inner-icon="mdi-magnify" v-model="searchQuery"
                        placeholder="Search"></v-text-field>
                </div>
            </div>
            <div>
                <table class="table table-responsive ">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>username</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td></td>
                        <td>
                            <div>
                                <input type="search" class="form-control" name="" id="" aria-describedby="helpId"
                                    v-model="searchName" placeholder="" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="search" class="form-control" name="" v-model="searchId" id=""
                                    aria-describedby="helpId" placeholder="" />
                            </div>
                        </td>
                        <td>
                            <div>
                                <input type="search" class="form-control" name="" v-model="searchEmail" id=""
                                    aria-describedby="helpId" placeholder="" />
                            </div>
                        </td>
                        <td></td>
                        <td>
                            <div>
                                <input type="search" class="form-control" v-model="searchMobile" name="" id=""
                                    aria-describedby="helpId" placeholder="" />
                            </div>
                        </td>
                        <tr v-for="(item, index) in filteredUsers()" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.employee_number }}</td>
                            <td>{{ item.company_email }}</td>
                            <td v-if="item.docstatus == '0'">Active</td>
                            <td>{{ item.mobile }}</td>
                            <td>
                                <v-btn variant="text" prepend-icon="mdi-tray-arrow-up" class="Upload-btn"
                                    @click="openUploadDialog">Upload</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import ApiUrls from "@/auth/apiUrls";
import axiosInstance from "@/auth/interceptors";

import { ref, onMounted, computed, watch } from "vue";

let userdata = ref([]);
const searchQuery = ref("");
const searchEmail = ref("");
const searchMobile = ref();
const searchId = ref("");
const searchName = ref("");

let filters = {
    searchId: "",
    searchEmail: "",
    searchMobile: "",
    searchName: "",
};

onMounted(() => {
    fetchData();
});

function fetchData() {
    let queryParams = {
        filters: [
            ["employee_number", "like", `%${filters.searchId}%`],
            ["name", "like", `%${filters.searchName}%`],
            ["company_email", "like", `%${filters.searchEmail}%`],
            ["mobile", "like", `%${filters.searchMobile}%`],
        ],
    };
    queryParams.fields = JSON.stringify(["*"]);
    queryParams.filters = JSON.stringify(queryParams.filters);
    axiosInstance
        .get(ApiUrls.users, {
            params: queryParams,
        })
        .then((response) => {
            console.log(response);
            userdata.value = response.data;
        })
        .catch((error) => {
            console.error(error);
        });
}
function filteredUsers() {
    return userdata.value.filter((item) => {
        return Object.values(item).some((value) => {
            return String(value).toLowerCase().includes(this.searchQuery.toLowerCase());
        });
    });
}
watch(searchId, (newVal) => {
    filters.searchId = newVal;
    setTimeout(() => {
        fetchData();
    }, 1000);
});

watch(searchEmail, (newVal) => {
    filters.searchEmail = newVal;
    setTimeout(fetchData(), 2000);
});
watch(searchMobile, (newVal) => {
    filters.searchMobile = newVal;
    setTimeout(fetchData(), 2000);
});
watch(searchName, (newVal) => {
    filters.searchName = newVal;
    setTimeout(fetchData(), 2000);
});

computed(() => {
    return filteredUsers();
});
</script>

<style></style>
