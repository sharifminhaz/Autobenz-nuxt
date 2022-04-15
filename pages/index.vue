<template>
  <div>
    <TopHeader />
    <Header />
    <SideNav />
    <SubBanner />
    <FeaturedCar />
    <Footer />
  </div>
</template>

<script>
import TopHeader from "~/components/Home/TopHeader";
import Header from "~/components/Home/Header";
import SideNav from "~/components/Page/SideNav";
import SubBanner from "~/components/Home/SubBanner";
import FeaturedCar from "~/components/Home/FeaturedCar";
import Footer from "~/components/Home/Footer";
export default {
  components: {
    TopHeader,
    Header,
    SideNav,
    SubBanner,
    FeaturedCar,
    Footer,
  },
  head() {
    return {
      title: "Autobenz",
    };
  },
};
</script>
