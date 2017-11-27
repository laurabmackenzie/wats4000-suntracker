<template>
  <div class="home">
    <div class="form-container">
      <h1>For Sunrise and Sunset Times, Enter a Zipcode Below</h1>
      <p class="error" v-show="showError">That is not a valid zipcode. Try again</p>
      <form v-on:submit.prevent="findTimes">
        <p><input type="text" v-model="zipcode" placeholder="Enter Zipcode Here"></p>
        <p><button type="submit">Search</button></p>
      </form>
      <p>Sunrise and Sunset times for : {{zipcode}}</p>      
      <p v-if="location" >{{location.lat}}, {{location.lng}}</p>
     </div> 
    <div class="no-results" v-if="results==0">
      <h2>No Sunrise and Sunset Times Found</h2>
    </div>
    <ul class="links">
        <li><router-link v-bind:to="{name:'Faqs'}">FAQs</router-link></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SunTracker',
  data () {
    return {
      location:null,
      results:null,
      showError:false,
      zipcode:''
    }
  },
  methods: {
    findTimes: function() {
      axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          key:"AIzaSyAK2ohlSv-ijKMYsYRnT_TR0FeKb1WzeUI",
          address:this.zipcode
        }
      })
    .then(response=> {
      this.location = response.data.results[0].geometry.location;
    })
    .catch(error=>{
      this.errors.push(error);
      showError:true;
    });
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
