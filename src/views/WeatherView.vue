<script setup>
import heads from '../components/header.vue'
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const items = ref({});
const list = ref([]);
const lat = ref("18.785988342597456");
const lon = ref("98.9756256359831");
const apikey = ref("ee47638ad2a5ae6362d146cd3c28988a");
const dateParts = ref([]);
const timeParts = ref([]);

const fetchPosts = () => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat.value}&lon=${lon.value}&appid=${apikey.value}&units=metric`;

  axios.get(url)
    .then((response) => {
      items.value = response.data;
      list.value.push(items.value.city);
      console.log(items.value);

      // Extract dt_txt values from the list of forecasts
      const dtTxtValues = items.value.list.map((forecast) => forecast.dt_txt);
      
      // Split dt_txt values into date and time parts
      dateParts.value = dtTxtValues.map((dtTxt) => dtTxt.split(' ')[0]);
      timeParts.value = dtTxtValues.map((dtTxt) => dtTxt.split(' ')[1]);
    })
    .catch((err) => {
      console.error(err);
    });
};

onMounted(fetchPosts);

const combinedDateTime = computed(() => {
  // Combine date and time parts into a single array of objects
  return dateParts.value.map((date, index) => ({
    date,
    time: timeParts.value[index],
  }));
});
const uniqueDates = computed(() => {
  const dateSet = new Set(combinedDateTime.value.map((item) => item.date));
  return Array.from(dateSet);
});

</script>

<template>
    <RouterView></RouterView>
  <body class="bg-body-tertiary">
    <heads ></heads>
<main class="container-fluid ">
    <div class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Latitude" aria-label="Latitude" >
            <input class="form-control me-2" type="search" placeholder="Longitude" aria-label="Longitude" >
    </div>
  <div class="row text-start">
    <div class="col-2 ">
      <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end " > 
        <nav class="nav nav-pills flex-column fixed-top" >
          <a class="nav-link" :href="`#` + date" v-for="(date, index) in uniqueDates" :key="index">
        {{ date }}
      </a>
        </nav>
      </nav>
    </div>
  <div class="col-9 ">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
      <div id="item-1">
        <div class="my-3 p-3 bg-body rounded shadow-sm" id="list-item-1">
    <h6 class="border-bottom pb-2 mb-0 " v-for="(i,index) in list" :key="index"><br>สภาพอากาศ 5 วัน ( {{ i.name }} ) </h6>
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
    <div class="d-flex text-body-secondary pt-3 col" :id="combinedDateTime[index].date" v-for="(i,index) in items.list " :key="index">
      <div class="card"  style="width: 18rem;">
        <div class="card-body text-center">
          <h5 class="card-title" >วันที่ {{ combinedDateTime[index].date }}</h5>
          <img :src="`https://openweathermap.org/img/wn/`+i.weather[0].icon+`@2x.png`" class="card-img" alt="..." style="max-width: 150px; "> 
          <p class="card-text">Time :{{ combinedDateTime[index].time }}</p>
          <p class="card-text">
            <i class="fa-solid fa-temperature-arrow-up" style="color: #F14950;"></i>
            {{ i.main.temp_max }} °C 
            <i class="fa-solid fa-temperature-arrow-up" style="color: #5a65e0;"></i>
            {{ i.main.temp_min }} °C
          </p>
          <p class="card-text">Clouds : {{ i.clouds.all }} %</p>
          <p class="card-text"><i class="fa-solid fa-cloud" style="color: #72a0ee;"></i>Weather : {{ i.weather[0].main }} , {{ i.weather[0].description }}  </p>
          <p class="card-text"><i class="fa-regular fa-eye" style="color: #72a0ee;"></i>Visibility : {{ i.visibility/1000 }} Km  </p>
          <p class="card-text"><i class="fa-solid fa-wind" style="color: #72a0ee;"></i> Wind : {{ i.wind.speed }}  Km/Hr</p>
        </div>
      </div>
    </div>  
  </div>
  </div>
      </div>

    </div>
  </div>
</div>

</main>
</body>


</template>

<style scoped>
html,
body {
  overflow-x: hidden; /* Prevent scroll on narrow devices */
}

body {
  padding-top: 56px;
}

.fixed-top{
  padding: 150px;
  padding-left: 20px;
  margin-right: 80%;
  
}
@media (max-width: 991.98px) {
  .offcanvas-collapse {
    position: fixed;
    top: 56px; /* Height of navbar */
    bottom: 0;
    left: 100%;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    overflow-y: auto;
    visibility: hidden;
    background-color: #343a40;
    transition: transform .3s ease-in-out, visibility .3s ease-in-out;
  }
  .offcanvas-collapse.open {
    visibility: visible;
    transform: translateX(-100%);
  }
}

#navbar-example3 {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 100vh; /* Adjust the height as needed */
  overflow-y: auto; /* Allow scrolling if the content exceeds the viewport */
}
.nav-scroller .nav {
  color: rgba(255, 255, 255, .75);
}

.nav-scroller .nav-link {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: .875rem;
  color: #6c757d;
  
}
.nav-link:hover{
  background-color: #4297f3;
  color: white;
}
.nav-scroller .nav-link:hover {
  color: #007bff;
}

.nav-scroller .active {
  font-weight: 500;
  color: #343a40;
}

.bg-purple {
  background-color: #6f42c1;
}

</style>
