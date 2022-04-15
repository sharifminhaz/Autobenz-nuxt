<template>
    <div>
        <SubBanner />
    </div>
</template>

<script>

import SubBanner from "~/components/Home/SubBanner";

export default {
    components: {
        SubBanner,
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
