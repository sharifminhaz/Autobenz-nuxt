<template>
 <div>
    <Header />
   </div>

</template>

<script>
import Header from "~/components/Home/Header";
export default {
    components: {

        Header,
    },
    head() {
        return {
            title: "Autobenz",
        };
    },
};
</script>
