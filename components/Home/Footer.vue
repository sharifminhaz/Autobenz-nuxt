<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="row">
        <div class="col-xl-3 col-lg-2 col-md-3 col-sm-2">
          <div class="footer-item clearfix">
            <h4>Contact Info</h4>
            <ul class="contact-info">
              <li>
                <i class="flaticon-pin"></i>20 Rue Charles-Strum<br />
                1206 GENÈVE.
              </li>
              <li>
                <i class="flaticon-mail"></i
                ><a href="mailto:info@autobenz.ch">info@autobenz.com</a>
              </li>
              <!-- <li>
                                <i class="flaticon-phone"></i><a href="tel:+41 58 2551 177">+41 58 2551 177</a>
                            </li> -->
            </ul>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-3">
          <div class="recent-posts footer-item">
            <h4>PAGES</h4>
            <ul class="links">
              <li>
                <a href="legal-notice.html">Legal Notice</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="pricing-tables.html">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
          <div class="footer-item">
            <h4>Categories</h4>
            <ul class="links">
              <li>
                <a href="#">Cars</a>
              </li>
              <li>
                <a href="#">Utility</a>
              </li>
              <li>
                <a href="#">Moto</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
          <div class="recent-posts footer-item">
            <h4>MY ACCOUNT</h4>
            <ul class="links">
              <li>
                <a href="profile.html">My Account</a>
              </li>
              <li>
                <a href="profile.html">Order History</a>
              </li>
              <li>
                <a href="profile.html">Wish List</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
          <div class="footer-item clearfix">
            <h4>Subscribe</h4>
            <div class="Subscribe-box">
              <p>
                Subscribe now and get the latest on sales, new releases and
                more…
              </p>
              <form class="form-inline d-flex" action="#">
                <input
                  class="form-control"
                  type="email"
                  id="email"
                  placeholder="Email Address ..."
                />
                <button class="btn button-theme" type="submit">
                  <i class="fa fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copy sub-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <p>
              © 2020 <a href="#">AUTOBENZ.</a> Trademarks and brands are the
              property of their respective owners.
            </p>
          </div>
          <div class="col-lg-4 sub-footer-cards">
            <a href="pricing-tables.html"
              ><img
                src="https://foxnfox.ch/includes/img/payment.png"
                alt="pricing"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
</style>
