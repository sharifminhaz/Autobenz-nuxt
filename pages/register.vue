<template>
    <div>
        <Signup />
    </div>
</template>

<script>

import Signup from "~/components/Page/Signup";
export default {
    components: {
        Signup,

    },
    head() {
        return {
            title: "Autobenz | Register",
        };
    },
};
</script>

<style scoped>
</style>
