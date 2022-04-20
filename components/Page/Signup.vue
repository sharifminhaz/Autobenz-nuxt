<template>
  <div class="login-1">
    <div class="container-fluid">
      <div class="row login-box">
        <div class="col-lg-6 bg-color-15 pad-0 none-992 bg-img">
          <div class="info clearfix">
            <h1>Welcome to <nuxt-link to="/">Autobenz</nuxt-link></h1>
          </div>
        </div>
        <div class="col-lg-6 align-self-center pad-0 form-section">
          <div class="form-inner">
            <a href="index.html" class="logo">
              <img src="img/logos/black-logo.png" alt="logo" />
            </a>
            <h3>CREATE YOUR ACCOUNT IN 1 MINUTE</h3>
            <form action="#" method="GET">
              <div class="form-group form-box">
                <input
                  name="fullname"
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
                  aria-label="Full Name"
                />
              </div>
              <div class="form-group clearfix">
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  placeholder="Email Address"
                  aria-label="Email Address"
                />
              </div>
              <div class="form-group clearfix">
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                />
              </div>
              <div class="checkbox form-group clearfix">
                <div class="form-check checkbox-theme">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberMe"
                  />
                  <label class="form-check-label" for="rememberMe">
                    I agree to the
                    <nuxt-link to="/terms" style="margin-left: 2px"
                      >terms of service</nuxt-link
                    >
                  </label>
                </div>
              </div>
              <div class="form-group">
                <button
                  formaction="/"
                  type="submit"
                  class="btn-theme btn-md w-100"
                >
                  Register
                </button>
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
            <p>
              Already a member?
              <nuxt-link to="/login">Login here</nuxt-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
</style>
