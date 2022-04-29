<template>
  <div>
    <Preloader />
    <TopHeader />
    <Header />
    <ContactDetails />
    <Footer />
  </div>
</template>

<script>
import Preloader from "~/components/Page/Preloader";
import TopHeader from "~/components/Home/TopHeader";
import Header from "~/components/Home/Header";
import ContactDetails from "~/components/Page/ContactDetails";

import Footer from "~/components/Home/Footer";
export default {
  name: "pricing",
  components: {
    Header,
    TopHeader,
    Preloader,
    ContactDetails,
    Footer,
  },
  head() {
    return {
      title: "AUTOBENZ | Contact",
    };
  },
};
</script>

<style scoped>
.content-area-5 {
  padding: 180px 0;
}
</style>
