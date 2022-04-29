<template>
  <!-- Sub banner start -->
  <div class="sub-banner overlay">
    <div class="container breadcrumb-area">
      <div class="breadcrumb-areas">
        <Counter> </Counter>
      </div>
    </div>
  </div>
  <!-- Sub Banner end -->
</template>

<script>
import Counter from "~/components/Home/Counter";
export default {
  components: {
    Counter,
  },
  mounted() {
    $(document).ready(function () {
      function animate() {
        $("#picOne").fadeIn(1000).delay(3000).fadeOut(1000);
        $("#picTwo").delay(5000).fadeIn(1000).delay(3000).fadeOut(1000);
      }

      animate();
      setInterval(animate, 10000);
    });
  },
};
</script>

<style>
#picOne,
#picTwo {
  display: none;
  width: 2em;
  height: 2em;
  margin: 1em;
}

#picOne {
  background: red;
}
#picTwo {
  background: green;
}
</style>
