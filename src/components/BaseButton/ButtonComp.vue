<template>
    <div>
        <button>
            {{props.name}}
        </button>

    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    name: {
        type: String
    }
})
</script>

<style lang="sass" scoped>

</style>