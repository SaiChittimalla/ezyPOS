<template>
	<div class="mx-auto">
		<v-sheet class="loginbackground pa-12" rounded>
			<v-card class="mx-auto px-6 py-8" max-width="344">
				<h5>Login</h5>
				<v-form v-model="form" @submit.prevent="onSubmit">
					<v-text-field v-model="data.email" :rules="[required]" class="mb-2" placeholder="Email"
						clearable></v-text-field>
					<v-text-field v-model="data.password" :rules="[required]" placeholder="Enter your password"
						clearable></v-text-field>
					<br />
					<v-btn :disabled="!form" class="login-btn" size="large" type="submit" variant="elevated" block>
						Sign In
					</v-btn>
				</v-form>
			</v-card>
		</v-sheet>
	</div>
</template>
<script>
import ApiUrls from "@/auth/apiUrls";
import axiosInstance from "../auth/interceptors";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
	name: "LoginPage",
	data: () => ({
		form: false,
		data: {
			email: "",
			password: "",
		},
	}),
	methods: {
		onSubmit() {
			const data = {
				usr: this.data.email,
				pwd: this.data.password,
			};

			axiosInstance
				.post(ApiUrls.login, data)
				.then((response) => {
					console.log(response);
					localStorage.setItem("user", JSON.stringify(data));

					toast.success("Login Successful", {
						position: "top-right",
					});
					setTimeout(() => {
						this.$router.push({ name: "HomePage" });
					}, 1000);
				})
				.catch((error) => {
					toast.error(error.message);
				});
		},

		required(v) {
			return !!v || "Field is required";
		},
	},
};
</script>
