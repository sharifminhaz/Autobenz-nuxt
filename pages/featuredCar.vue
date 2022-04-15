<template>
    <div>
        <FeaturedCar />
    </div>
</template>

<script>

import FeaturedCar from "~/components/Home/FeaturedCar";

export default {
    components: {
        FeaturedCar,
    },
    head() {
        return {
            title: "Autobenz",
        };
    },
};
</script>

<style scoped>
</style>
