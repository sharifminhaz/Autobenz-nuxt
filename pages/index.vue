<template>
 <div>
     <TopHeader />
    <Header />
   </div>

</template>

<script>
import Header from "~/components/Home/Header";
import TopHeader from "~/components/Home/TopHeader";
export default {
    components: {
        TopHeader,
        Header,
    },
    head() {
        return {
            title: "Autobenz",
        };
    },
};
</script>
