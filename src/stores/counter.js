import { ref ,computed  } from 'vue'
import axios from 'axios';
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const lat = ref("18.785988342597456");
  const lon = ref("98.9756256359831");

  function updateLatLon(newLat, newLon) {
    lat.value = newLat;
    lon.value = newLon;
  }

  const items = ref({});
  const list = ref([]);
  const apikey = ref("ee47638ad2a5ae6362d146cd3c28988a");
  const dateParts = ref([]);
  const timeParts = ref([]);

  const fetchPosts = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey.value}&units=metric`;

    try {
      const response = await axios.get(url);
      items.value = response.data;
      list.value.push(items.value.city);
      console.log(items.value);

      // Extract dt_txt values from the list of forecasts
      const dtTxtValues = items.value.list.map((forecast) => forecast.dt_txt);

      // Split dt_txt values into date and time parts
      dateParts.value = dtTxtValues.map((dtTxt) => dtTxt.split(' ')[0]);
      timeParts.value = dtTxtValues.map((dtTxt) => dtTxt.split(' ')[1]);
    } catch (err) {
      console.error(err);
    }
  };

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
  return {
    items,
    list,
    dateParts,
    timeParts,
    fetchPosts,
    combinedDateTime,
    uniqueDates,
    updateLatLon
  };
});
