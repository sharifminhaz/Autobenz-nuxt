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
      title: "AUTOBENZ | Register",
    };
  },
};
</script>

<style scoped>
</style>
