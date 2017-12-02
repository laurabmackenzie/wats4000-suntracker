<template>
  <div class="home">
    <div class="form-container">
      <img class="header" src="../assets/sunrisesunsetsm.jpg">
      <h1 v-show="showInstructions">For Today's Sunrise and Sunset Times,<br>Enter Address Below</h1>
      <p class="error" v-show="showError">That is not a valid address. Try again</p>
      <form v-on:submit.prevent="findTimes">
        <p><input type="text" v-model.lazy="address" placeholder="Enter Address, City, and or Zipcode"></p>
        <p><button class="search" type="submit">Search</button></p>
      </form>
      <transition name="fade">
      <div v-if="results">
      <p>Sunrise and Sunset times for: {{address}}</p> 
      <ul>     
      <li>Latitude: {{location.lat}} </li> 
      <li>Longitude: {{location.lng}}</li> 
      </ul>
      <ul>
      <li>Sunrise: {{results.sunrise}} </li> 
      <li>Sunset: {{results.sunset}}</li>
      </ul>
      </div> 
      </transition>
    </div>
    <div class="no-results" v-if="results==0">
      <h2>No Sunrise and Sunset Times Found</h2>
    </div>
    <router-link v-bind:to="{name:'FeaturedVideo'}">Featured Video</router-link>
  </div>
</template>

<script>
import axios from 'axios';
require('vue2-animate/dist/vue2-animate.min.css');
export default {
  name: 'SunTracker',
  data () {
    return {
      location:null,
      results:null,
      showError:false,
      address:'',
      errors:[],
      showInstructions:true
    }
  },
  methods: {
    findTimes: function() {
      this.results=null;
      this.showInstructions=false;
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          key:"AIzaSyAK2ohlSv-ijKMYsYRnT_TR0FeKb1WzeUI",
          address:this.address
        }
      })
    .then(response=> {
      this.location = response.data.results[0].geometry.location;
      axios.get('https://api.sunrise-sunset.org/json', {
        params: {
          lat:this.location.lat,
          lng:this.location.lng,
          formatted:0
        }
      })
        .then(response=> {
          this.results = response.data.results;
          var formattedSunrise = new Date(this.results.sunrise);
          this.results.sunrise = formattedSunrise.toTimeString();
          var formattedSunset = new Date(this.results.sunset);
          this.results.sunset = formattedSunset.toTimeString();
          
        })
        .catch(error=> {
          this.errors.push(error);
          showError:true;
        })
        })
    .catch(error=>{
      this.errors.push(error);
    });
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
h1, h2 {
  font-weight: normal;
}
.header {
  width: 40%;
}
input[type=text] {
    padding: 1%;
    box-sizing: border-box;
    color:black;
}
@media screen and (max-width:320px) {
  input[type=text] {
    width:90%
  }
  h1 {
    font-size: 14px;
  }
  .header {
    width: 60%;
  }
}
@media screen and (min-width:321px) and (max-width:480px) {
input[type=text] {
    width:80%
  }
h1 {
  font-size:16px;
}
.header {
  width: 60%;
}
}
@media screen and (min-width:481px) and (max-width: 768px) {
input[type=text] {
  width:50%
  }
h1 {
  font-size:18px;
}
.header {
  width: 60%;
}
}
@media screen and (min-width:769px) and (max-width: 1024px) {
input[type=text] {
    width:30%
  }
h1 {
  font-size: 22px;
}
}
@media screen and (min-width:1025px) {
input[type=text] {
    width:30%
  }
}
input[placeholder] {
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0;
}
a {
  color: #42b983;
}

</style>
