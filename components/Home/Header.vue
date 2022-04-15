<template>
     <!-- Main header start -->
    <header class="main-header sticky-header header-with-top">
        <div class="container contained">
            <nav class="navbar navbar-expand-lg navbar-light">

                <a class="navbar-brand company-logo" href="index.html">
                    <img src="img/logos/ab.png" alt="logo">
                </a>
                <button class="navbar-toggler" type="button" id="drawer" style="margin: -16px;margin-right: -8px;">
                    <span class="fa fa-bars"></span>
                </button>
                <button class="navbar-toggler" onclick="window.location.href='profile.html'" type="button" id="user"
                    style="margin-left: 12px;">
                    <span class="fa fa-user"></span>
                </button>
                <div class="navbar-collapse collapse w-100 justify-content-end" id="navbar">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="index.html" id="navbarDropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Home
                            </a>
                        </li>
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="profile.html" id="navbarDropdownMenuLink3"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Profile
                            </a>

                        </li> -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="pricing-tables.html" id="navbarDropdownMenuLink4"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pricing
                            </a>

                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="login.html" id="dropdown01" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Add vehicle</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">

                        <!-- <li class="nav-item dropdown">
                                    <a href="login.html" class="nav-link h-icon">
                                        <i class="flaticon-logout"></i>
                                    </a>
                                </li> -->

                        <!-- <li class="nav-item dropdown"> -->
                        <!-- <div class="full-page-search-box"> -->
                        <form action="index.html#" class="search-boxs">
                            <input class="hsearch" type="search" value="" placeholder="type keyword(s) here">
                            <button type="submit" class="search-btn btn-sm button-theme">Search</button>
                        </form>
                        <!-- </div> -->
                        <!-- </li> -->
                        <li class="lan-icons">
                            <button class="dropdown-toggle" type="button" data-toggle="dropdown"
                                style="background: transparent;border: none;width: 44px;">
                                <img src="https://foxnfox.ch/includes/img/flags/chflag-400-200.png"
                                    class="img-responsive" alt="switzerland" data-country="ch"
                                    style="width: 44px;margin-bottom: 4px;">
                            </button>
                            <select id="languages"
                                style="color: #c1c5cc!important; font-size: 16px!important; background-color: #020d25;text-transform: uppercase; font-weight: 400;line-height: 50px;
                                                     max-height: 25px;box-shadow: 0px 0px 0px 1px rgb(2 13 38);margin-left: 12px;margin-bottom: 2px;width: 44px;">
                                <option value="FR" selected="">FR</option>
                                <option value="DE">DE</option>
                                <option value="IT">IT</option>

                            </select>
                        </li>


                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <!-- Main header end -->
</template>

<script>
export default {
    name: "Header",
    // mounted() {
    //     $(".search-option").hide();
    //     $(".main-search").on("click", function () {
    //         $(".search-option").animate({
    //             height: "toggle",
    //         });
    //     });

    //     var windows = $(window);
    //     var sticky = $("#sticker");

    //     windows.on("scroll", function () {
    //         var scroll = windows.scrollTop();
    //         if (scroll < 300) {
    //             sticky.removeClass("stick");
    //         } else {
    //             sticky.addClass("stick");
    //         }
    //     });

    //     var mean_menu = $("nav#dropdown");
    //     mean_menu.meanmenu();
    // },
};
</script>

<style scoped>
</style>
