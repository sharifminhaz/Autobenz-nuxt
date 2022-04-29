<template>
  <div>
    <Preloader />
    <TopHeader />
    <Header />
    <Terms />
    <Footer />
  </div>
</template>

<script>
import Preloader from "~/components/Page/Preloader";
import TopHeader from "~/components/Home/TopHeader";
import Header from "~/components/Home/Header";
import Terms from "~/components/Page/Terms";
import Footer from "~/components/Home/Footer";
export default {
  name: "team",
  components: {
    Header,
    TopHeader,
    Preloader,
    Terms,
    Footer,
  },
  head() {
    return {
      title: "AUTOBENZ | Terms of use",
    };
  },
};
</script>

<style scoped>
</style>
