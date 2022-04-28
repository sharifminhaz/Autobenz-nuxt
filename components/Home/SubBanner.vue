<template>
  <!-- Sub banner start -->
  <div class="sub-banner overlay">
    <div class="container breadcrumb-area">
      <div class="breadcrumb-areas">
        <Transition mode="out-in">
          <p>Satisfied or Refunded</p>
        </Transition>
      </div>
    </div>
  </div>
  <!-- Sub Banner end -->
</template>

<script>
export default {};
</script>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
