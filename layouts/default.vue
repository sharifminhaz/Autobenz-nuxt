<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    $(window).on("scroll", function () {
      adjustHeader();
      doSticky();
      placedDashboard();
    });
    function adjustHeader() {
      var windowWidth = $(window).width();
      if (windowWidth > 0) {
        if ($(document).scrollTop() >= 100) {
          if ($(".header-shrink").length < 1) {
            $(".sticky-header").addClass("header-shrink");
          }
          if ($(".do-sticky").length < 1) {
            $(".company-logo img").attr("src", "img/logos/black-logo.png");
          }
        } else {
          $(".sticky-header").removeClass("header-shrink");
          if (
            $(".do-sticky").length < 1 &&
            $(".fixed-header").length == 0 &&
            $(".fixed-header2").length == 0
          ) {
            $(".company-logo img").attr("src", "img/logos/logo.png");
          } else {
            $(".company-logo img").attr("src", "img/logos/black-logo.png");
          }
        }
      } else {
        $(".company-logo img").attr("src", "img/logos/black-logo.png");
      }
    }

    function doSticky() {
      if ($(document).scrollTop() > 40) {
        $(".do-sticky").addClass("sticky-header");
        //$('.do-sticky').addClass('header-shrink');
      } else {
        $(".do-sticky").removeClass("sticky-header");
        //$('.do-sticky').removeClass('header-shrink');
      }
    }

    function placedDashboard() {
      var headerHeight = parseInt($(".main-header").height(), 10);
      $(".dashboard").css("top", headerHeight);
    }

    //range slider
    $(".range-slider-ui").each(function () {
      var minRangeValue = $(this).attr("data-min");
      var maxRangeValue = $(this).attr("data-max");
      var minName = $(this).attr("data-min-name");
      var maxName = $(this).attr("data-max-name");
      var unit = $(this).attr("data-unit");

      $(this).append(
        "" +
          "<span class='min-value'></span> " +
          "<span class='max-value'></span>" +
          "<input class='current-min' type='hidden' name='" +
          minName +
          "'>" +
          "<input class='current-max' type='hidden' name='" +
          maxName +
          "'>"
      );
      $(this).slider({
        range: true,
        min: minRangeValue,
        max: maxRangeValue,
        values: [minRangeValue, maxRangeValue],
        slide: function (event, ui) {
          event = event;
          var currentMin = parseInt(ui.values[0], 10);
          var currentMax = parseInt(ui.values[1], 10);
          $(this)
            .children(".min-value")
            .text(currentMin + " " + unit);
          $(this)
            .children(".max-value")
            .text(currentMax + " " + unit);
          $(this).children(".current-min").val(currentMin);
          $(this).children(".current-max").val(currentMax);
        },
      });

      var currentMin = parseInt($(this).slider("values", 0), 10);
      var currentMax = parseInt($(this).slider("values", 1), 10);
      $(this)
        .children(".min-value")
        .text(currentMin + " " + unit);
      $(this)
        .children(".max-value")
        .text(currentMax + " " + unit);
      $(this).children(".current-min").val(currentMin);
      $(this).children(".current-max").val(currentMax);
    });
  },
};
</script>
<style>
</style>
