webpackJsonp([1],{"06cF":function(e,t){},"6A3X":function(e,t){},"J+F1":function(e,t){},JnK7:function(e,t,s){e.exports=s.p+"static/img/sunrisesunsetsm.641a6bc.jpg"},NHnr:function(e,t,s){"use strict";function r(e){s("06cF")}function n(e){s("J+F1")}function a(e){s("XAuP")}Object.defineProperty(t,"__esModule",{value:!0});var i=s("7+uW"),o={name:"app"},u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},l=[],c={render:u,staticRenderFns:l},d=c,v=s("VU/8"),m=r,p=v(o,d,!1,m,null,null),_=p.exports,h=s("/ocq"),f=s("mtWM"),w=s.n(f);s("6A3X");var b={name:"SunTracker",data:function(){return{location:null,results:null,showError:!1,address:"",errors:[],showInstructions:!0}},methods:{findTimes:function(){var e=this;this.results=null,this.showInstructions=!1,w.a.get("https://maps.googleapis.com/maps/api/geocode/json",{params:{key:"AIzaSyAK2ohlSv-ijKMYsYRnT_TR0FeKb1WzeUI",address:this.address}}).then(function(t){e.location=t.data.results[0].geometry.location,w.a.get("https://api.sunrise-sunset.org/json",{params:{lat:e.location.lat,lng:e.location.lng,formatted:0}}).then(function(t){e.results=t.data.results;var s=new Date(e.results.sunrise);e.results.sunrise=s.toTimeString();var r=new Date(e.results.sunset);e.results.sunset=r.toTimeString()}).catch(function(t){e.errors.push(t)})}).catch(function(t){e.errors.push(t)})}}},g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",{staticClass:"form-container"},[r("img",{staticClass:"header",attrs:{src:s("JnK7")}}),e._v(" "),r("h1",{directives:[{name:"show",rawName:"v-show",value:e.showInstructions,expression:"showInstructions"}]},[e._v("For Today's Sunrise and Sunset Times,"),r("br"),e._v("Enter Address Below")]),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.showError,expression:"showError"}],staticClass:"error"},[e._v("That is not a valid address. Try again")]),e._v(" "),r("form",{on:{submit:function(t){t.preventDefault(),e.findTimes(t)}}},[r("p",[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.address,expression:"address",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"Enter Address, City, and or Zipcode"},domProps:{value:e.address},on:{change:function(t){e.address=t.target.value}}})]),e._v(" "),e._m(0,!1,!1)]),e._v(" "),r("transition",{attrs:{name:"fade"}},[e.results?r("div",[r("p",[e._v("Sunrise and Sunset times for: "+e._s(e.address))]),e._v(" "),r("ul",[r("li",[e._v("Latitude: "+e._s(e.location.lat)+" ")]),e._v(" "),r("li",[e._v("Longitude: "+e._s(e.location.lng))])]),e._v(" "),r("ul",[r("li",[e._v("Sunrise: "+e._s(e.results.sunrise)+" ")]),e._v(" "),r("li",[e._v("Sunset: "+e._s(e.results.sunset))])])]):e._e()])],1),e._v(" "),0==e.results?r("div",{staticClass:"no-results"},[r("h2",[e._v("No Sunrise and Sunset Times Found")])]):e._e(),e._v(" "),r("router-link",{attrs:{to:{name:"FeaturedVideo"}}},[e._v("Featured Video")])],1)},S=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("button",{staticClass:"search",attrs:{type:"submit"}},[e._v("Search")])])}],T={render:g,staticRenderFns:S},F=T,y=s("VU/8"),A=n,k=y(b,F,!1,A,"data-v-524d470d",null),C=k.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"videocontainer"},[s("p",{staticClass:"links"},[s("router-link",{attrs:{to:{name:"SunTracker"}}},[e._v("Return to SunTracker")])],1),e._v(" "),e._m(0,!1,!1)])},x=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"video"},[s("h1",[e._v("Winter Solstice"),s("br"),e._v("Fairbanks, Alaska")]),e._v(" "),s("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/Olbo4Am4U44?rel=0&controls=0&showinfo=0&start=7",frameborder:"0",allowfullscreen:""}}),e._v(" "),s("p",[e._v("December 21, 2012"),s("br"),e._v("Sunrise: 11:06 AM"),s("br"),e._v("Sunset: 2:59 PM"),s("br"),s("br"),e._v("Time lapse video created by Taro Nakai")])])}],N={render:E,staticRenderFns:x},V=N,I=s("VU/8"),R=a,j=I(null,V,!1,R,"data-v-066789b1",null),J=j.exports;i.a.use(h.a);var K=new h.a({routes:[{path:"/",name:"SunTracker",component:C},{path:"/FeaturedVideo",name:"FeaturedVideo",component:J}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:K,template:"<App/>",components:{App:_}})},XAuP:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c8c6a929a21413421653.js.map