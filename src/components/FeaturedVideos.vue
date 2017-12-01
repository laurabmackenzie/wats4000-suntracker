<template>
<div class=videocontainer>
    <p class="links"><router-link v-bind:to="{name:'SunTracker'}">Return to SunTracker</router-link></p>
    <div class=video1>
    <h1>Winter Solstice<br>Fairbanks, Alaska</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Olbo4Am4U44?rel=0&amp;controls=0&amp;showinfo=0&amp;start=7" frameborder="0" allowfullscreen></iframe> 
    <p>December 21, 2012<br>Sunrise: 11:06 AM<br>Sunset: 2:59 PM</p>
    </div>
    <div class=video2>
    <h1>Summer Solstice<br>Eagle Summit, Alaska</h1>   
    <iframe width="560" height="315" src="https://www.youtube.com/embed/HO91qdyqtj8?rel=0&amp;controls=0&amp;showinfo=0&amp;start=10" frameborder="0" allowfullscreen></iframe>   
    <p>June 21-22, 2010<br>Sunset: 11:26 PM<br>Sunrise: 3:56 AM</li></p>
    </div>
    <p>Time lapse videos created by Taro Nakai</p>
    <p class="links"><router-link v-bind:to="{name:'SunTracker'}">Return to SunTracker</router-link></p>
</div>
</template>

<style scoped>
ul {
    list-style-type: none;
}
li {
    display: block;
    margin:0;
}
.videocontainer iframe {
    max-width: 100%;
}
.video1, .video2 {
    padding: 10px;
}
@media screen and (max-width:320px) {
  h1 {
    font-size: 20px;
  }
}
@media screen and (min-width:321px) and (max-width:480px) {
h1 {
  font-size:22px;
}
}
@media screen and (min-width:481px) and (max-width: 768px) {
h1 {
  font-size:26px;
}
}
@media screen and (min-width:769px) and (max-width: 1024px) {
h1 {
  font-size: 30px;
}
}
</style>
    