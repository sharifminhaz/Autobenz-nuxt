<template>
  <div class="widget widget-3 advanced-search2" style="padding-bottom: 88px">
    <h3 class="sidebar-title">Search Cars</h3>
    <form method="GET">
      <div class="form-group">
        <select class="selectpicker search-fields" name="select-make">
          <option>Select Make</option>
          <option>BMW</option>
          <option>Honda</option>
          <option>Lamborghini</option>
          <option>Sports Car</option>
        </select>
      </div>
      <div class="form-group">
        <select class="selectpicker search-fields" name="select-brand">
          <option>Select Model</option>
          <option>Audi</option>
          <option>BMW</option>
          <option>Honda</option>
          <option>Nissan</option>
        </select>
      </div>
      <div class="form-group">
        <select class="selectpicker search-fields" name="select-location">
          <option>Select Fuel type</option>
          <option>Diesel</option>
          <option>Petrol</option>
          <option>Electric</option>
          <option>Gas</option>
          <option>Hybrid</option>
        </select>
      </div>
      <div class="form-group">
        <select class="selectpicker search-fields" name="select-type">
          <option>Select Transmission</option>
          <option>Automatic</option>
          <option>Manual</option>
          <option>Triptronic</option>
        </select>
      </div>
      <div class="form-group">
        <select class="selectpicker search-fields" name="select-year">
          <option>Select Year</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
        </select>
      </div>
      <div class="range-slider clearfix">
        <label>Price</label>
        <div
          data-min="0"
          data-max="379000"
          data-min-name="min_price"
          data-max-name="max_price"
          data-unit="CHF"
          class="range-slider-ui ui-slider"
          aria-disabled="false"
        ></div>
        <div class="clearfix"></div>
      </div>
      <div class="form-group mb-0">
        <button class="search-button btn">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AdvancedSearch",
};
</script>

<style>
</style>
