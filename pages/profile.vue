<template>
  <div>
    <Preloader />
    <TopHeader />
    <Header />
    <Profile />
    <Footer />
  </div>
</template>

<script>
import Preloader from "~/components/Page/Preloader";
import TopHeader from "~/components/Home/TopHeader";
import Header from "~/components/Home/Header";
import Profile from "~/components/Page/Profile";
import Footer from "~/components/Home/Footer";
export default {
  name: "pricing",
  components: {
    Header,
    TopHeader,
    Preloader,
    Profile,
    Footer,
  },
  head() {
    return {
      title: "AUTOBENZ | Profile",
    };
  },
};
</script>

<style scoped>
.content-area-5 {
  padding: 180px 0;
}
</style>
