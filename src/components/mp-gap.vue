<script setup lang="ts">
defineProps({
    height: {
        type: [Number, String],
        default: 8,
    },
    bgColor: {
        type: [String],
        default: '#f0f4f7',
    },
});
</script>

<template>
    <u-gap
        :height="height"
        :bgColor="bgColor"></u-gap>
</template>
