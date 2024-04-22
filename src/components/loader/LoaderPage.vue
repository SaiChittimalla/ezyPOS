<template>
    <div>

        <h1 class=" d-flex align-items-baseline   ">L<h5 class="loader"></h5>ading.....
        </h1>
    </div>
</template>
<style scoped>
div {
    width: 100%;
    position: absolute;
    z-index: 1007;
    background-color: black;
    opacity: 0.7;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.loader {
    width: 25px;
    height: 25px;
    border-top: 2px solid white;
    border-bottom: 2px solid white;

    animation: spin 1s ease infinite;
    border-radius: 50%;

}

@keyframes spin {
    from {
        transform: rotate(135deg);
    }

    to {
        transform: rotate(495deg);
    }
}
</style>