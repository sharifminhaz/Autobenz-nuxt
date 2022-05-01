<template>
  <client-only>
    <div class="contact-1 content-area-5">
      <div class="container">
        <!-- Main title -->
        <div class="main-title text-center">
          <h1 class="mb-10">Profile</h1>
          <div class="title-border mb-30">
            <div class="title-border-inner"></div>
            <div class="title-border-inner"></div>
            <div class="title-border-inner"></div>
            <div class="title-border-inner"></div>
            <div class="title-border-inner"></div>
          </div>
        </div>
        <div class="faq-info-box mb-50">
          <!-- <h3 class="heading-2">Profile Settings</h3> -->
          <div class="faq-info centered">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home2"
                  type="button"
                  role="tab"
                  aria-controls="home2"
                  aria-selected="true"
                >
                  Profile Settings
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  My listings
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  My favorites
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="add-new-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#addnewtab"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Add new item
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="invoices-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#invoices"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  Invoices
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent2">
              <div
                class="tab-pane fade active show"
                id="home2"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="col-lg-6 col-md-12">
                  <div class="heading-4">
                    <h4>Edit Details</h4>
                  </div>
                  <form
                    class="row contact_form"
                    action="contact_process.php"
                    method="post"
                    id="contactForm"
                    novalidate="novalidate"
                  >
                    <div class="form-group col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="fname"
                        name="name"
                        placeholder="First Name"
                        value="John"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="lname"
                        name="name"
                        placeholder="Last Name"
                        value="Doe"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        id="number"
                        name="number"
                        placeholder="Phone"
                        value="+41 123456789"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value="user@email.com"
                      />
                    </div>
                    <div class="form-group col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        id="zip"
                        name="number"
                        placeholder="Zip code"
                        value="1124"
                      />
                    </div>
                    <div class="form-group col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        id="city"
                        name="number"
                        placeholder="City"
                        value="Geneve"
                      />
                    </div>
                    <div class="form-group col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        id="company"
                        name="number"
                        placeholder="Company"
                      />
                    </div>
                    <div class="form-group col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        name="number"
                        placeholder="Address"
                        value="9 rue Marrakech"
                      />
                    </div>
                    <div class="form-group col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        id="country"
                        name="number"
                        placeholder="Country"
                        value="Switzerland"
                      />
                    </div>

                    <div class="form-group col-md-6">
                      <input
                        type="password"
                        class="form-control"
                        id="current-password"
                        name="password"
                        placeholder="Current Password"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        placeholder="Change Password"
                      />
                    </div>
                    <div class="form-group mb-0">
                      <button class="search-button btn">Save</button>
                    </div>
                  </form>
                  <br />
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div class="car-box-2">
                  <div class="row g-0">
                    <div class="col-lg-4 col-md-5">
                      <div class="car-thumbnail">
                        <a href="/item-details" class="car-img">
                          <div class="tag-3">
                            <div class="del-price">
                              <del>CHF 100'000</del><span></span>
                            </div>
                          </div>
                          <img
                            class="d-block w-100"
                            src="img/car/car-5.png"
                            alt="car"
                          />
                        </a>
                        <div class="carbox-overlap-wrapper">
                          <div class="overlap-box">
                            <div class="overlap-btns-area">
                              <a class="overlap-btn compare-btn">
                                <i class="fa fa-share"></i>
                              </a>
                              <a class="overlap-btn wishlist-btn active">
                                <i class="fa fa-heart-o"></i>
                              </a>
                              <a class="overlap-btn wishlist-btn">
                                <i class="fa fa-print"></i>
                              </a>
                              <a
                                class="overlap-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#"
                              >
                                <i class="fa fa-eye"><span>16</span></i>
                              </a>
                              <div class="car-magnify-gallery">
                                <a
                                  href="img/car/car-5.png"
                                  class="overlap-btn"
                                  data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <i class="fa fa-expand"></i>
                                  <img
                                    class="hidden"
                                    src="img/car/car-5.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-2.png"
                                  class="hidden"
                                  data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-2.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-3.png"
                                  class="hidden"
                                  data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-3.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-4.png"
                                  class="hidden"
                                  data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-4.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-1.png"
                                  class="hidden"
                                  data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-1.png"
                                    alt="hidden-img"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-7 align-self-center">
                      <div class="detail">
                        <h3 class="title">
                          <a href="/item-details">Hyundai Santa</a>
                        </h3>
                        <!-- <h5 class="location">
                                                <a href="/item-details">
                                                    <i class="flaticon-cash"></i>123 Kathal St. Tampa City,
                                                </a>
                                            </h5> -->
                        <ul class="facilities-list clearfix">
                          <li>
                            <i class="flaticon-way"></i> 94,000 <sup>km</sup>
                          </li>
                          <li>
                            <i class="flaticon-manual-transmission"></i> Manual
                          </li>
                          <li><i class="flaticon-fuel"></i> Petrol</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="car-box-2">
                  <div class="row g-0">
                    <div class="col-lg-4 col-md-5">
                      <div class="car-thumbnail">
                        <a href="/item-details" class="car-img">
                          <div class="tag-3">
                            <div class="del-price">
                              <del>CHF 100'000</del><span></span>
                            </div>
                          </div>
                          <img
                            class="d-block w-100"
                            src="img/car/car-5.png"
                            alt="car"
                          />
                        </a>
                        <div class="carbox-overlap-wrapper">
                          <div class="overlap-box">
                            <div class="overlap-btns-area">
                              <a class="overlap-btn compare-btn">
                                <i class="fa fa-share"></i>
                              </a>
                              <a class="overlap-btn wishlist-btn active">
                                <i class="fa fa-heart-o"></i>
                              </a>
                              <a class="overlap-btn wishlist-btn">
                                <i class="fa fa-print"></i>
                              </a>
                              <a
                                class="overlap-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#"
                              >
                                <i class="fa fa-eye"><span>16</span></i>
                              </a>
                              <div class="car-magnify-gallery">
                                <a
                                  href="img/car/car-5.png"
                                  class="overlap-btn"
                                  data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <i class="fa fa-expand"></i>
                                  <img
                                    class="hidden"
                                    src="img/car/car-5.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-2.png"
                                  class="hidden"
                                  data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-2.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-3.png"
                                  class="hidden"
                                  data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-3.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-4.png"
                                  class="hidden"
                                  data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-4.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-1.png"
                                  class="hidden"
                                  data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-1.png"
                                    alt="hidden-img"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-7 align-self-center">
                      <div class="detail">
                        <h3 class="title">
                          <a href="/item-details">Hyundai Santa</a>
                        </h3>
                        <h5 class="location">
                          <a href="/item-details">
                            <i class="flaticon-cash"></i>123 Kathal St. Tampa
                            City,
                          </a>
                        </h5>
                        <ul class="facilities-list clearfix">
                          <li>
                            <i class="flaticon-way"></i> 94,000 <sup>km</sup>
                          </li>
                          <li>
                            <i class="flaticon-manual-transmission"></i> Manual
                          </li>
                          <li><i class="flaticon-fuel"></i> Petrol</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="car-box-3">
                      <div class="car-thumbnail">
                        <a href="/item-details" class="car-img">
                          <div class="tag-favs"><del>CHF 65'500</del></div>
                          <img
                            class="d-block w-100"
                            src="img/car/car-5.png"
                            alt="car"
                          />
                        </a>
                        <div class="carbox-overlap-wrapper">
                          <div class="overlap-box">
                            <div class="overlap-btns-area">
                              <a
                                class="overlap-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#carOverviewModal"
                              >
                                <i class="fa fa-eye-slash"></i>
                              </a>
                              <a class="overlap-btn wishlist-btn active">
                                <i class="fa fa-heart-o"></i>
                              </a>
                              <a class="overlap-btn compare-btn">
                                <i class="fa fa-balance-scale"></i>
                              </a>
                              <div class="car-magnify-gallery">
                                <a
                                  href="img/car/car-5.png"
                                  class="overlap-btn"
                                  data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <i class="fa fa-expand"></i>
                                  <img
                                    class="hidden"
                                    src="img/car/car-5.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-2.png"
                                  class="hidden"
                                  data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-2.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-3.png"
                                  class="hidden"
                                  data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-3.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-4.png"
                                  class="hidden"
                                  data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-4.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-1.png"
                                  class="hidden"
                                  data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-1.png"
                                    alt="hidden-img"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="detail">
                        <h1 class="title">
                          <a href="/item-details">Hyundai Santa</a>
                        </h1>

                        <ul class="facilities-list clearfix">
                          <li>
                            <i class="flaticon-way"></i> 4,000 <sup>km</sup>
                          </li>
                          <li>
                            <i class="flaticon-manual-transmission"></i> Manual
                          </li>

                          <li><i class="flaticon-fuel"></i> Petrol</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="car-box-3">
                      <div class="car-thumbnail">
                        <a href="/item-details" class="car-img">
                          <div class="tag-favs"><del>CHF 65'500</del></div>
                          <img
                            class="d-block w-100"
                            src="img/car/car-1.png"
                            alt="car"
                          />
                        </a>
                        <div class="carbox-overlap-wrapper">
                          <div class="overlap-box">
                            <div class="overlap-btns-area">
                              <a
                                class="overlap-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#carOverviewModal"
                              >
                                <i class="fa fa-eye-slash"></i>
                              </a>
                              <a class="overlap-btn wishlist-btn active">
                                <i class="fa fa-heart-o"></i>
                              </a>
                              <a class="overlap-btn compare-btn">
                                <i class="fa fa-balance-scale"></i>
                              </a>
                              <div class="car-magnify-gallery">
                                <a
                                  href="img/car/car-1.png"
                                  class="overlap-btn"
                                  data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <i class="fa fa-expand"></i>
                                  <img
                                    class="hidden"
                                    src="img/car/car-1.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-2.png"
                                  class="hidden"
                                  data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-2.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-3.png"
                                  class="hidden"
                                  data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-3.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-4.png"
                                  class="hidden"
                                  data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-4.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-5.png"
                                  class="hidden"
                                  data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-5.png"
                                    alt="hidden-img"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="detail">
                        <h1 class="title">
                          <a href="/item-details">Toyota Prius</a>
                        </h1>

                        <ul class="facilities-list clearfix">
                          <li>
                            <i class="flaticon-way"></i> 4,000 <sup>km</sup>
                          </li>
                          <li>
                            <i class="flaticon-manual-transmission"></i> Manual
                          </li>

                          <li><i class="flaticon-fuel"></i> Petrol</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="car-box-3">
                      <div class="car-thumbnail">
                        <a href="/item-details" class="car-img">
                          <div class="tag-favs"><del>CHF 65'500</del></div>
                          <img
                            class="d-block w-100"
                            src="img/car/car-4.png"
                            alt="car"
                          />
                        </a>
                        <div class="carbox-overlap-wrapper">
                          <div class="overlap-box">
                            <div class="overlap-btns-area">
                              <a
                                class="overlap-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#carOverviewModal"
                              >
                                <i class="fa fa-eye-slash"></i>
                              </a>
                              <a class="overlap-btn wishlist-btn active">
                                <i class="fa fa-heart-o"></i>
                              </a>
                              <a class="overlap-btn compare-btn">
                                <i class="fa fa-balance-scale"></i>
                              </a>
                              <div class="car-magnify-gallery">
                                <a
                                  href="img/car/car-4.png"
                                  class="overlap-btn"
                                  data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <i class="fa fa-expand"></i>
                                  <img
                                    class="hidden"
                                    src="img/car/car-4.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-2.png"
                                  class="hidden"
                                  data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-2.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-3.png"
                                  class="hidden"
                                  data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-3.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-5.png"
                                  class="hidden"
                                  data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-5.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-1.png"
                                  class="hidden"
                                  data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-1.png"
                                    alt="hidden-img"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="detail">
                        <h1 class="title">
                          <a href="/item-details">Toyota Prius specs</a>
                        </h1>
                        <div class="location">
                          <a href="/item-details">
                            <i class="flaticon-pin"></i>123 Kathal St. Tampa
                            City,
                          </a>
                        </div>
                        <ul class="facilities-list clearfix">
                          <li>
                            <i class="flaticon-way"></i> 4,000 <sup>km</sup>
                          </li>
                          <li>
                            <i class="flaticon-manual-transmission"></i> Manual
                          </li>

                          <li><i class="flaticon-fuel"></i> Petrol</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="car-box-3">
                      <div class="car-thumbnail">
                        <a href="/item-details" class="car-img">
                          <div class="tag-favs"><del>CHF 65'500</del></div>
                          <img
                            class="d-block w-100"
                            src="img/car/car-3.png"
                            alt="car"
                          />
                        </a>
                        <div class="carbox-overlap-wrapper">
                          <div class="overlap-box">
                            <div class="overlap-btns-area">
                              <a
                                class="overlap-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#carOverviewModal"
                              >
                                <i class="fa fa-eye-slash"></i>
                              </a>
                              <a class="overlap-btn wishlist-btn active">
                                <i class="fa fa-heart-o"></i>
                              </a>
                              <a class="overlap-btn compare-btn">
                                <i class="fa fa-balance-scale"></i>
                              </a>
                              <div class="car-magnify-gallery">
                                <a
                                  href="img/car/car-3.png"
                                  class="overlap-btn"
                                  data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <i class="fa fa-expand"></i>
                                  <img
                                    class="hidden"
                                    src="img/car/car-3.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-2.png"
                                  class="hidden"
                                  data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-2.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-5.png"
                                  class="hidden"
                                  data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-5.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-4.png"
                                  class="hidden"
                                  data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-4.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-1.png"
                                  class="hidden"
                                  data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-1.png"
                                    alt="hidden-img"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="detail">
                        <h1 class="title">
                          <a href="/item-details">Lexus GS F</a>
                        </h1>
                        <div class="location">
                          <a href="/item-details">
                            <i class="flaticon-pin"></i>123 Kathal St. Tampa
                            City,
                          </a>
                        </div>
                        <ul class="facilities-list clearfix">
                          <li>
                            <i class="flaticon-way"></i> 4,000 <sup>km</sup>
                          </li>
                          <li>
                            <i class="flaticon-manual-transmission"></i> Manual
                          </li>

                          <li><i class="flaticon-fuel"></i> Petrol</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="car-box-3">
                      <div class="car-thumbnail">
                        <a href="/item-details" class="car-img">
                          <div class="tag-favs"><del>CHF 65'500</del></div>
                          <img
                            class="d-block w-100"
                            src="img/car/car-6.png"
                            alt="car"
                          />
                        </a>
                        <div class="carbox-overlap-wrapper">
                          <div class="overlap-box">
                            <div class="overlap-btns-area">
                              <a
                                class="overlap-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#carOverviewModal"
                              >
                                <i class="fa fa-eye-slash"></i>
                              </a>
                              <a class="overlap-btn wishlist-btn active">
                                <i class="fa fa-heart-o"></i>
                              </a>
                              <a class="overlap-btn compare-btn">
                                <i class="fa fa-balance-scale"></i>
                              </a>
                              <div class="car-magnify-gallery">
                                <a
                                  href="img/car/car-6.png"
                                  class="overlap-btn"
                                  data-sub-html="<h4>Audi Q7 2018</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <i class="fa fa-expand"></i>
                                  <img
                                    class="hidden"
                                    src="img/car/car-6.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-3.png"
                                  class="hidden"
                                  data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-3.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-5.png"
                                  class="hidden"
                                  data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-5.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-4.png"
                                  class="hidden"
                                  data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-4.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-1.png"
                                  class="hidden"
                                  data-sub-html="<h4>Toyota Prius</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-1.png"
                                    alt="hidden-img"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="detail">
                        <h1 class="title">
                          <a href="/item-details">Audi Q7 2018</a>
                        </h1>

                        <ul class="facilities-list clearfix">
                          <li>
                            <i class="flaticon-way"></i> 4,000 <sup>km</sup>
                          </li>
                          <li>
                            <i class="flaticon-manual-transmission"></i> Manual
                          </li>

                          <li><i class="flaticon-fuel"></i> Petrol</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="car-box-3">
                      <div class="car-thumbnail">
                        <a href="/item-details" class="car-img">
                          <div class="tag-favs"><del>CHF 65'500</del></div>
                          <img
                            class="d-block w-100"
                            src="img/car/car-2.png"
                            alt="car"
                          />
                        </a>
                        <div class="carbox-overlap-wrapper">
                          <div class="overlap-box">
                            <div class="overlap-btns-area">
                              <a
                                class="overlap-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#carOverviewModal"
                              >
                                <i class="fa fa-eye-slash"></i>
                              </a>
                              <a class="overlap-btn wishlist-btn active">
                                <i class="fa fa-heart-o"></i>
                              </a>
                              <a class="overlap-btn compare-btn">
                                <i class="fa fa-balance-scale"></i>
                              </a>
                              <div class="car-magnify-gallery">
                                <a
                                  href="img/car/car-2.png"
                                  class="overlap-btn"
                                  data-sub-html="<h4>2020 Ford Mustang</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <i class="fa fa-expand"></i>
                                  <img
                                    class="hidden"
                                    src="img/car/car-2.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-3.png"
                                  class="hidden"
                                  data-sub-html="<h4>Lexus GS F</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-3.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-5.png"
                                  class="hidden"
                                  data-sub-html="<h4>Hyundai Santa</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-5.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-4.png"
                                  class="hidden"
                                  data-sub-html="<h4>Toyota Prius specs</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-4.png"
                                    alt="hidden-img"
                                  />
                                </a>
                                <a
                                  href="img/car/car-6.png"
                                  class="hidden"
                                  data-sub-html="<h4>Audi Q7 2018</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy....</p>"
                                >
                                  <img
                                    class="hidden"
                                    src="img/car/car-6.png"
                                    alt="hidden-img"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="detail">
                        <h1 class="title">
                          <a href="/item-details">2020 Ford Mustang</a>
                        </h1>
                        <div class="location">
                          <a href="/item-details">
                            <i class="flaticon-pin"></i>123 Kathal St. Tampa
                            City,
                          </a>
                        </div>
                        <ul class="facilities-list clearfix">
                          <li>
                            <i class="flaticon-way"></i> 4,000 <sup>km</sup>
                          </li>
                          <li>
                            <i class="flaticon-manual-transmission"></i> Manual
                          </li>

                          <li><i class="flaticon-fuel"></i> Petrol</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pagination-box p-box-2 text-center">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="#"
                          ><i class="fa fa-angle-left"></i
                        ></a>
                      </li>
                      <li class="page-item">
                        <a class="page-link active" href="#">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#">3</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#"
                          ><i class="fa fa-angle-right"></i
                        ></a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="addnewtab"
                role="tabpanel"
                aria-labelledby="add-new-tab"
              >
                <div class="col-lg-6 col-md-12"></div>
                <div class="col-lg-8 col-md-6">
                  <form-wizard>
                    <tab-content
                      title="Select Announcement Type"
                      :selected="true"
                    >
                      <h4>Which item do you wish to add ?</h4>
                      <div>Picked: {{ AnnouncementType }}</div>
                      <div class="form-group">
                        <div class="wizard-form-radio">
                          <input
                            name="radio-name"
                            id="radio1"
                            type="radio"
                            value="Car"
                            v-model="AnnouncementType"
                          />
                          <label for="radio1">Cars</label>
                        </div>
                        <div class="wizard-form-radio">
                          <input
                            name="radio-name"
                            id="radio2"
                            type="radio"
                            value="Utility"
                            v-model="AnnouncementType"
                          />
                          <label for="radio2">Utility</label>
                        </div>
                        <div class="wizard-form-radio">
                          <input
                            name="radio-name"
                            id="radio3"
                            type="radio"
                            value="Bike"
                            v-model="AnnouncementType"
                          />
                          <label for="radio2">Bikes</label>
                        </div>
                      </div>
                    </tab-content>
                    <tab-content title="Item Details">
                      <h5>Item Details</h5>
                      <!-- Add item form start -->
                      <div class="contact-form">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group name">
                              <input
                                type="text"
                                name="fname"
                                class="form-control"
                                placeholder="Title"
                                aria-label="Title"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group name">
                              <input
                                type="number"
                                name="lname"
                                class="form-control"
                                placeholder="Old price"
                                aria-label="New Price"
                              />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group email">
                              <input
                                type="number"
                                name="email"
                                class="form-control"
                                placeholder="Old price"
                                aria-label="Old price"
                              />
                            </div>
                          </div>

                          <div class="col-md-6">
                            <div class="form-group">
                              <div
                                class="dropdown bootstrap-select search-fields"
                              >
                                <v-select :options="options"></v-select>

                                <div class="dropdown-menu">
                                  <div
                                    class="inner show"
                                    role="listbox"
                                    id="bs-select-1"
                                    tabindex="-1"
                                  >
                                    <ul
                                      class="dropdown-menu inner show"
                                      role="presentation"
                                    ></ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <v-select
                                v-model="options"
                                :options="options"
                              ></v-select>
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <div
                                class="dropdown bootstrap-select search-fields"
                              >
                                <select
                                  class="selectpicker search-fields"
                                  name="select-make"
                                >
                                  <option>Year</option>
                                  <option>2022</option>
                                  <option>2021</option>
                                  <option>2020</option>
                                  <option>2019</option></select
                                ><button
                                  type="button"
                                  tabindex="-1"
                                  class="btn dropdown-toggle btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-3"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="Year"
                                >
                                  <div class="filter-option">
                                    <div class="filter-option-inner">
                                      <div class="filter-option-inner-inner">
                                        Year
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <div class="dropdown-menu">
                                  <div
                                    class="inner show"
                                    role="listbox"
                                    id="bs-select-3"
                                    tabindex="-1"
                                  >
                                    <ul
                                      class="dropdown-menu inner show"
                                      role="presentation"
                                    ></ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <input
                                type="number"
                                name="lname"
                                class="form-control"
                                placeholder="Mileage"
                                aria-label="Mileage"
                              />
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <div
                                class="dropdown bootstrap-select search-fields"
                              >
                                <select
                                  class="selectpicker search-fields"
                                  name="select-make"
                                >
                                  <option>Expertise</option>
                                  <option>YES</option>
                                  <option>NO</option></select
                                ><button
                                  type="button"
                                  tabindex="-1"
                                  class="btn dropdown-toggle btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-4"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="Expertise"
                                >
                                  <div class="filter-option">
                                    <div class="filter-option-inner">
                                      <div class="filter-option-inner-inner">
                                        Expertise
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <div class="dropdown-menu">
                                  <div
                                    class="inner show"
                                    role="listbox"
                                    id="bs-select-4"
                                    tabindex="-1"
                                  >
                                    <ul
                                      class="dropdown-menu inner show"
                                      role="presentation"
                                    ></ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <div
                                class="dropdown bootstrap-select search-fields"
                              >
                                <select
                                  class="selectpicker search-fields"
                                  name="select-make"
                                >
                                  <option>Body Type</option>
                                  <option>Convertible</option>
                                  <option>Sedan</option>
                                  <option>SUV</option>
                                  <option>Sports car</option></select
                                ><button
                                  type="button"
                                  tabindex="-1"
                                  class="btn dropdown-toggle btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-5"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="Body Type"
                                >
                                  <div class="filter-option">
                                    <div class="filter-option-inner">
                                      <div class="filter-option-inner-inner">
                                        Body Type
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <div class="dropdown-menu">
                                  <div
                                    class="inner show"
                                    role="listbox"
                                    id="bs-select-5"
                                    tabindex="-1"
                                  >
                                    <ul
                                      class="dropdown-menu inner show"
                                      role="presentation"
                                    ></ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <div
                                class="dropdown bootstrap-select search-fields"
                              >
                                <select
                                  class="selectpicker search-fields"
                                  name="select-make"
                                >
                                  <option>Fuel Type</option>
                                  <option>Gas</option>
                                  <option>Petrol</option>
                                  <option>Gasoline</option></select
                                ><button
                                  type="button"
                                  tabindex="-1"
                                  class="btn dropdown-toggle btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-6"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="Fuel Type"
                                >
                                  <div class="filter-option">
                                    <div class="filter-option-inner">
                                      <div class="filter-option-inner-inner">
                                        Fuel Type
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <div class="dropdown-menu">
                                  <div
                                    class="inner show"
                                    role="listbox"
                                    id="bs-select-6"
                                    tabindex="-1"
                                  >
                                    <ul
                                      class="dropdown-menu inner show"
                                      role="presentation"
                                    ></ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <div
                                class="dropdown bootstrap-select search-fields"
                              >
                                <select
                                  class="selectpicker search-fields"
                                  name="select-make"
                                >
                                  <option>Transmission</option>
                                  <option>Automatic</option>
                                  <option>Manual</option>
                                  <option>Triptronic</option></select
                                ><button
                                  type="button"
                                  tabindex="-1"
                                  class="btn dropdown-toggle btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-7"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="Transmission"
                                >
                                  <div class="filter-option">
                                    <div class="filter-option-inner">
                                      <div class="filter-option-inner-inner">
                                        Transmission
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <div class="dropdown-menu">
                                  <div
                                    class="inner show"
                                    role="listbox"
                                    id="bs-select-7"
                                    tabindex="-1"
                                  >
                                    <ul
                                      class="dropdown-menu inner show"
                                      role="presentation"
                                    ></ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <div
                                class="dropdown bootstrap-select search-fields"
                              >
                                <select
                                  class="selectpicker search-fields"
                                  name="select-make"
                                >
                                  <option>Ext Color</option>
                                  <option>Black</option>
                                  <option>White</option>
                                  <option>Blue</option>
                                  <option>Red</option></select
                                ><button
                                  type="button"
                                  tabindex="-1"
                                  class="btn dropdown-toggle btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-8"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="Ext Color"
                                >
                                  <div class="filter-option">
                                    <div class="filter-option-inner">
                                      <div class="filter-option-inner-inner">
                                        Ext Color
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <div class="dropdown-menu">
                                  <div
                                    class="inner show"
                                    role="listbox"
                                    id="bs-select-8"
                                    tabindex="-1"
                                  >
                                    <ul
                                      class="dropdown-menu inner show"
                                      role="presentation"
                                    ></ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="form-group">
                              <div
                                class="dropdown bootstrap-select search-fields"
                              >
                                <select
                                  class="selectpicker search-fields"
                                  name="select-make"
                                >
                                  <option>Int Color</option>
                                  <option>Black</option>
                                  <option>White</option>
                                  <option>Blue</option>
                                  <option>Red</option></select
                                ><button
                                  type="button"
                                  tabindex="-1"
                                  class="btn dropdown-toggle btn-light"
                                  data-bs-toggle="dropdown"
                                  role="combobox"
                                  aria-owns="bs-select-9"
                                  aria-haspopup="listbox"
                                  aria-expanded="false"
                                  title="Int Color"
                                >
                                  <div class="filter-option">
                                    <div class="filter-option-inner">
                                      <div class="filter-option-inner-inner">
                                        Int Color
                                      </div>
                                    </div>
                                  </div>
                                </button>
                                <div class="dropdown-menu">
                                  <div
                                    class="inner show"
                                    role="listbox"
                                    id="bs-select-9"
                                    tabindex="-1"
                                  >
                                    <ul
                                      class="dropdown-menu inner show"
                                      role="presentation"
                                    ></ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group message">
                              <textarea
                                class="form-control"
                                name="message"
                                placeholder="Description..."
                                aria-label="Description"
                                style="height: 236px"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </tab-content>
                    <tab-content title="Finishing Up">
                      <select id="dob">
                        <option value="0">Year:</option>
                        <option
                          v-for="year in years"
                          :value="year"
                          :key="year.id"
                        >
                          {{ year }}
                        </option>
                      </select>
                    </tab-content>
                  </form-wizard>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="invoices"
                role="tabpanel"
                aria-labelledby="invoices-tab"
              >
                <div class="col-lg-6 col-md-12">
                  <div class="heading-4">
                    <h4>Invoices</h4>
                  </div>

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import { FormWizard, TabContent } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  name: "Profile",
  components: {
    FormWizard,
    TabContent,
    vSelect,
  },
  data() {
    return {
      options: ["A", "B", "C"],
      AnnouncementType: "",
      AnnouncementDetails: {
        title: "",
        oldPrice: null,
        newPrice: null,
        Make: [],
        Model: [],
        Year: [],
        Mileage: null,
        Expertise: "",
        BodyType: [],
        fuelType: [],
        transmission: [],
        extColor: [],
        intColor: [],
        description: "",
      },
    };
  },
  created() {},
  computed: {
    years() {
      const year = new Date().getFullYear();
      return Array.from(
        { length: year - 1900 },
        (value, index) => 1901 + index
      );
    },
  },
  methods: {},
};
</script>

<style scoped>
.step-header {
  margin-bottom: 4px;
}
</style>
