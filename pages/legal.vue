<template>
  <div>
    <Preloader />
    <TopHeader />
    <Header />
    <LegalNotice />
    <Footer />
  </div>
</template>

<script>
import Preloader from "~/components/Page/Preloader";
import TopHeader from "~/components/Home/TopHeader";
import Header from "~/components/Home/Header";
import LegalNotice from "~/components/Page/LegalNotice";
import Footer from "~/components/Home/Footer";
export default {
  name: "team",
  components: {
    Header,
    TopHeader,
    Preloader,
    LegalNotice,
    Footer,
  },
  head() {
    return {
      title: "AUTOBENZ | Legal Notice",
    };
  },
};
</script>

<style scoped>
.content-area-9 {
  padding: 180px 0 90px;
}
</style>
