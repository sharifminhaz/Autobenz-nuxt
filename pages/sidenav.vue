<template>
    <div>
        <SideNav />
    </div>
</template>

<script>

import SideNav from "~/components/Page/SideNav";

export default {
    components: {
        SideNav,
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
