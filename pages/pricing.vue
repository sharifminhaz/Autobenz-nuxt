<template>
  <div>
    <Preloader />
    <TopHeader />
    <Header />
    <PricingTables />
    <Footer />
  </div>
</template>

<script>
import Preloader from "~/components/Page/Preloader";
import TopHeader from "~/components/Home/TopHeader";
import Header from "~/components/Home/Header";
import PricingTables from "~/components/Page/PricingTables";
import Footer from "~/components/Home/Footer";
export default {
  name: "pricing",
  components: {
    Header,
    TopHeader,
    Preloader,
    PricingTables,
    Footer,
  },
  head() {
    return {
      title: "AUTOBENZ | Pricing Tables",
    };
  },
};
</script>

<style scoped>
.content-area {
  padding: 180px 0 70px;
}
</style>
