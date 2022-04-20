<template>
  <div>
    <Login />
  </div>
</template>

<script>
import PageTitle from "~/components/Page/PageTitle";
import Login from "~/components/Page/Login";

export default {
  components: {
    Login,
    PageTitle,
  },
  head() {
    return {
      title: "AUTOBENZ | Login",
    };
  },
};
</script>

<style scoped>
</style>
