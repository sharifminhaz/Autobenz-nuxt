<template>
 <client-only>
<body>

    <!-- preloader-start -->
    <!-- <div class="preloader">
        <div class="meter">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="subline"></div>
            <div class="subline"></div>
            <div class="subline"></div>
            <div class="subline"></div>
            <div class="subline"></div>
            <div class="loader-circle-1">
                <div class="loader-circle-2"></div>
            </div>
            <span class="loadtext">Loading</span>
        </div>
    </div> -->
    <!-- preloader-end -->

    <!-- Login 1 start -->
    <div class="login-1">
        <div class="container-fluid">
            <div class="row login-box">
                <div class="col-lg-6 bg-color-15 pad-0 none-992 bg-img">
                    <div class="info clearfix">
                        <h1>Welcome to <a href="index.html">Autobenz</a></h1>
                        <!-- <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type</p> -->
                    </div>
                </div>
                <div class="col-lg-6 align-self-center pad-0 form-section">
                    <div class="form-inner">
                        <a href="index.html" class="logo">
                            <img src="img/logos/black-logo.png" alt="logo">
                        </a>
                        <h3>Sign Into Your Account</h3>
                        <form action="#" method="GET">
                            <div class="form-group clearfix">
                                <input name="email" type="email" class="form-control" placeholder="Email Address"
                                    aria-label="Email Address">
                            </div>
                            <div class="form-group clearfix">
                                <input name="password" type="password" class="form-control" placeholder="Password"
                                    aria-label="Password">
                            </div>
                            <div class="checkbox form-group clearfix">
                                <div class="form-check checkbox-theme">
                                    <input class="form-check-input" type="checkbox" value="" id="rememberMe">
                                    <label class="form-check-label" for="rememberMe">
                                        Remember me
                                    </label>
                                </div>
                                <a href="forgot-password.html" class="forgot-password">Forgot Password</a>
                            </div>
                            <div class="form-group">
                                <button type="submit" formaction="index.html"
                                    class="btn-theme btn-md w-100">Login</button>
                            </div>
                            <div class="extra-login form-group clearfix">
                                <span>Or Login With</span>
                            </div>
                            <div class="clearfix"></div>
                            <ul class="social-list clearfix">
                                <li><a href="#" class="facebook-bg">Facebook</a></li>
                                <li><a href="#" class="google-bg">Google</a></li>
                            </ul>
                        </form>

                        <div class="clearfix"></div>
                        <p>Don't have an account? <nuxt-link to="/register">Register here</nuxt-link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Login end -->

</body>
 </client-only>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>
