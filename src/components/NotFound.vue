<template>
    <div>
        <div class=" d-flex  justify-content-center  align-items-center ">
            <div class=" text-center ">
                <img src="../assets/404.png" alt="" class=" w-50 img-fluid ">

                <router-link to="/HomePage/DashBoard">
                    <h6>Go to Home</h6>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'NotFound',
    data() {
        return {

        }
    }

}
</script>

<style scoped></style>