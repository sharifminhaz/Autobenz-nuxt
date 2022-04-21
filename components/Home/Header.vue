<template>
  <header class="header-one">
    <div class="topbar-area fix hidden-xs">
      <div class="container">
        <div class="row">
          <div class="col-md-9 col-sm-9">
            <div class="topbar-left">
              <ul>
                <li>
                  <a href="#"
                    ><i class="fa fa-envelope"></i> info@autobenz.ch</a
                  >
                </li>
                <!-- <li>
                  <a href="#"
                    ><i class="fa fa-phone-square"></i> (+1) 123-456-789</a
                  >
                </li> -->
                <li>
                  <a href="#"
                    ><i class="fa fa-clock-o"></i> Mon - Fri: 9 AM - 5 PM</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <!-- <div class="col-md-3 col-sm-3">
            <div class="top-social">
              <ul>
                <li>
                  <a href="#"><i class="fa fa-skype"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-google"></i></a>
                </li>
              </ul>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div id="sticker" class="header-area hidden-xs">
      <div class="container">
        <div class="navbar row-mrg">
          <div class="col-md-3 col-sm-3">
            <div class="logo">
              <nuxt-link class="navbar-brand page-scroll black-logo" to="/">
                <img src="/img/logo/logo.png" alt="" />
              </nuxt-link>
            </div>
          </div>
          <div class="col-md-6 col-sm-6">
            <nav class="navbar navbar-default">
              <div class="collapse navbar-collapse" id="navbar-example">
                <div class="main-menu">
                  <ul class="nav navbar-nav navbar-right">
                    <li>
                      <a class="pages" href="/">HOME</a>
                    </li>
                    <li>
                      <a class="pages" href="#">PRICING</a>
                    </li>
                    <li>
                      <a class="pages" href="#">ADD VEHICLUE</a>
                    </li>
                    <li>
                      <nuxt-link to="/contact">CONTACT</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-menu-area hidden-lg hidden-md hidden-sm">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="mobile-menu">
              <div class="logo">
                <nuxt-link to="/"
                  ><img src="/img/logo/logo.png" alt=""
                /></nuxt-link>
              </div>
              <nav id="dropdown">
                <ul>
                  <li>
                    <nuxt-link to="/">Home</nuxt-link>
                  </li>
                  <li>
                    <a class="pages" href="#">Pricing</a>
                  </li>
                  <li>
                    <a class="pages" href="#">Add Vehicle</a>
                  </li>
                  <li>
                    <a class="pages" href="#">Project</a>
                    <ul class="sub-menu">
                      <li>
                        <nuxt-link to="/project">Portfolio</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/project-details"
                          >Project details</nuxt-link
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="pages" href="#">Blog</a>
                    <ul class="sub-menu">
                      <li>
                        <nuxt-link to="/blog">Blog grid</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/blog-sidebar">Blog List</nuxt-link>
                      </li>
                      <li>
                        <nuxt-link to="/blog-details">Blog Details</nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <nuxt-link to="/contact">contacts</nuxt-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  mounted() {
    $(".search-option").hide();
    $(".main-search").on("click", function () {
      $(".search-option").animate({
        height: "toggle",
      });
    });

    var windows = $(window);
    var sticky = $("#sticker");

    windows.on("scroll", function () {
      var scroll = windows.scrollTop();
      if (scroll < 300) {
        sticky.removeClass("stick");
      } else {
        sticky.addClass("stick");
      }
    });

    var mean_menu = $("nav#dropdown");
    mean_menu.meanmenu();
  },
};
</script>

<style scoped>
.row-mrg {
  margin-right: 165px;
  margin-left: -77px;
}
.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.hsearch {
  background: #fff;
  border: none;
  padding: 12.2px 30px;
  font-size: 17px;
  width: 70%;
  float: left;
  border-radius: 2px;
  margin-right: -1px;
}

.search-btn {
  width: 30%;
  float: left;
  padding: 15px 20px 13.5px;
  font-weight: 600;
  border: 1px solid #ffffff57;
  transition: all 300ms ease;
  font-size: 13px;
  letter-spacing: 1px;
  font-family: "Barlow", sans-serif;
}
</style>
