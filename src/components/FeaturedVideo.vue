<template>
<div class=videocontainer>
    <p class="links"><router-link v-bind:to="{name:'SunTracker'}">Return to SunTracker</router-link></p>
    <div class=video>
    <h1>Winter Solstice<br>Fairbanks, Alaska</h1>
    <iframe width="504" height="284" src="https://www.youtube.com/embed/Olbo4Am4U44?rel=0&amp;controls=0&amp;showinfo=0&amp;start=7" frameborder="0" allowfullscreen></iframe> 
    <p>December 21, 2012<br>Sunrise: 11:06 AM | Sunset: 2:59 PM <br>Time lapse video created by Taro Nakai</p>
</div>
</div>
</template>

<style scoped>
.videocontainer iframe {
    max-width: 100%;
}
h1 {
  font-weight:normal;
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
  font-size:24px;
}
}
@media screen and (min-width:769px) and (max-width: 1024px) {
h1 {
  font-size: 30px;
}
}
</style>
    