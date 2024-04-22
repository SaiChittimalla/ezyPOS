<template>
    <div>
        <div class="header-div d-flex justify-space-between">
            <div>
                <h6 class="page-name">Uploads</h6>
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
            <div class="row">
                <div class="col-lg-2 col-md-3 col-sm-12">
                    <div class="w-100 d-flex justify-center align-center">
                        <v-text-field clearable type="date"></v-text-field>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-12">
                    <div>
                        <v-select clearable placeholder="Status" :items="['Active', 'Inactive']"
                            v-model="selectedStatus"></v-select>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-12">
                    <v-text-field append-inner-icon="mdi-magnify" v-model="searchQuery"
                        placeholder="Search"></v-text-field>
                </div>
            </div>
            <v-data-table :headers="headers" :items="filteredUsers()" :items-length="totalItems"
                :items-per-page="itemsPerPage">
                <template #item="{ item }">
                    <tr>
                        <td>{{ item.index }}</td>
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
                </template>
            </v-data-table>
            <v-dialog v-model="uploadDialog" max-width="600">
                <v-card>
                    <v-card-title class="d-flex justify-content-between">
                        Upload Image

                        <v-btn icon @click="closeUploadDialog">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-card-title>
                    <v-card-text>
                        <v-file-input v-model="selectedFile" label="Select file" accept="image/*"
                            @change="previewFile"></v-file-input>
                        <v-img v-if="previewUrl" :src="previewUrl" width="100%"></v-img>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="Upload-btn" @click="save">Save</v-btn>
                        <v-btn @click="closeUploadDialog">Cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
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
const searchId = ref("");
let selectedStatus = ref(null);
let filters = {
    searchId: "",
    searchEmail: "",
    searchMobile: "",
};
const uploadDialog = ref(false);
let selectedFile = ref(null);
let previewUrl = ref(null);
let itemsPerPage = ref(10);
let totalItems = ref(0);

const headers = [
    { title: "S.No", key: "index" },
    { title: "Name", key: "name" },
    { title: "ID", key: "employee_number" },
    { title: "Email", key: "company_email" },
    { title: "Status", key: "docstatus" },
    { title: "Phone", key: "mobile" },
    { title: "Actions", key: "actions" },
];

onMounted(() => {
    fetchData();
});

function fetchData() {
    let queryParams = {
        filters: [
            ["employee_number", "like", `%${filters.searchId}%`],
            ["company_email", "like", `%${filters.searchEmail}%`],
        ],
    };
    queryParams.fields = JSON.stringify(["*"]);
    queryParams.filters = JSON.stringify(queryParams.filters);
    axiosInstance
        .get(ApiUrls.users, {
            params: queryParams,
        })
        .then((response) => {
            userdata.value = response.data.map((item, index) => ({
                ...item,
                index: index + 1,
            }));
            totalItems = userdata.value.length;
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

watch(selectedStatus, (newStatus) => {
    console.log(newStatus);
});

watch(searchEmail, (newVal) => {
    filters.searchEmail = newVal;
    setTimeout(fetchData(), 2000);
});

computed(() => {
    return filteredUsers();
});
function openUploadDialog() {
    uploadDialog.value = true;
}

function closeUploadDialog() {
    uploadDialog.value = false;
    selectedFile.value = null;
    previewUrl.value = null;
}

function previewFile(event) {
    const file = event.target.files[0];
    if (file) {
        selectedFile.value = file;
        const reader = new FileReader();
        reader.onload = () => {
            previewUrl.value = reader.result;
        };
        reader.readAsDataURL(file);
    }
}

function save() {
    // Your save logic here
    // Close dialog after saving
    closeUploadDialog();
}
</script>
