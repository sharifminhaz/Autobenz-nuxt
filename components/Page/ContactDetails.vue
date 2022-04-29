<template>
  <div class="contact-1 content-area-5">
    <div class="container">
      <!-- Main title -->
      <div class="main-title text-center">
        <h1 class="mb-10">Contact Us</h1>
        <div class="title-border mb-30">
          <div class="title-border-inner"></div>
          <div class="title-border-inner"></div>
          <div class="title-border-inner"></div>
          <div class="title-border-inner"></div>
          <div class="title-border-inner"></div>
        </div>
      </div>
      <div class="bg-white">
        <div class="row g-0">
          <div class="col-lg-6 col-md-12 col-sm-12 col-pad2">
            <!-- Contact form start -->
            <div class="contact-form contact-pad">
              <h3>Send us a Message</h3>
              <form
                id="contact_form"
                action="index.html"
                method="GET"
                enctype="multipart/form-data"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group name">
                      <input
                        type="text"
                        name="fname"
                        class="form-control"
                        placeholder="First Name"
                        aria-label="First Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group name">
                      <input
                        type="text"
                        name="lname"
                        class="form-control"
                        placeholder="Last Name"
                        aria-label="Last Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group email">
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        placeholder="Email Address"
                        aria-label="Email Address"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group number">
                      <input
                        type="text"
                        name="phone"
                        class="form-control"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group message">
                      <textarea
                        class="form-control"
                        name="message"
                        placeholder="Write message..."
                        aria-label="Write message"
                        style="height: 236px"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="send-btn text-center">
                      <button type="submit" class="btn-6">Send Message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <!-- Contact form end -->
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 col-pad2">
            <!-- Contact details start -->
            <div class="contact-details">
              <h3>Contact details</h3>
              <div class="ci-box d-flex mb-40">
                <div class="icon">
                  <i class="fa fa-clock-o"></i>
                </div>
                <div class="detail align-self-center">
                  <h4>Opening Hours</h4>

                  <p>
                    OPEN MONDAY TO FRIDAY <br />
                    09 AM TO 12 PM | 1 PM TO 5 PM
                  </p>
                </div>
              </div>
              <div class="ci-box d-flex">
                <div class="icon">
                  <i class="fa fa-map-marker"></i>
                </div>
                <div class="detail align-self-center">
                  <h4>Office Address</h4>
                  <p>20 Rue Charles-Strum,<br />1206 GENÈVE.</p>
                </div>
              </div>
              <div class="ci-box d-flex">
                <div class="icon">
                  <i class="fa fa-phone"></i>
                </div>
                <div class="detail align-self-center">
                  <h4>Phone Number</h4>
                  <p>
                    <a href="tel:+41 58 2551 177">Office: +41 58 2551 177</a>
                  </p>
                </div>
              </div>
              <div class="ci-box d-flex">
                <div class="icon">
                  <i class="fa fa-envelope"></i>
                </div>
                <div class="detail align-self-center">
                  <h4>Email Address</h4>
                  <p>
                    <a href="mailto:info@autobenz.ch">info@autobenz.ch</a>
                  </p>
                </div>
              </div>
            </div>
            <!-- Contact details end -->
          </div>
        </div>
      </div>
      <!-- Google map start -->
      <div class="section formap">
        <div class="map-area">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.615530966016!2d6.152767315582166!3d46.198208979116416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c65333e2706b3%3A0x8d4189354200fbc8!2sRue%20Charles-Sturm%2020%2C%201206%20Gen%C3%A8ve%2C%20Switzerland!5e0!3m2!1sen!2stn!4v1651203905097!5m2!1sen!2stn"
            width="1300"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <!-- Google map end -->
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactDetails",
  components: {},
};
</script>

<style scoped>
.map-area {
  margin-right: 30px;
}
.formap {
  margin-top: 45px;
  margin-bottom: -160px;
}
</style>
