(function(e){function t(t){for(var s,n,l=t[0],r=t[1],o=t[2],b=0,u=[];b<l.length;b++)n=l[b],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);d&&d(t);while(u.length)u.shift()();return c.push.apply(c,o||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],s=!0,l=1;l<a.length;l++){var r=a[l];0!==i[r]&&(s=!1)}s&&(c.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},i={app:0},c=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var d=r;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},2209:function(e,t,a){"use strict";a("254d")},"254d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("7a23"),i=Object(s["d"])("h1",{class:"title"}," Exercise Tracker ",-1),c=Object(s["d"])("p",{class:"subtitle"}," Catalouge you workout ",-1);function n(e,t,a,n,l,r){var o=Object(s["u"])("nav-bar"),d=Object(s["u"])("router-view");return Object(s["q"])(),Object(s["c"])("div",null,[i,c,Object(s["g"])(o),Object(s["g"])(d)])}var l={class:"container is-fluid"},r={class:"navbar",role:"navigation","aria-label":"main navigation"},o={class:"navbar-brand"},d=Object(s["d"])("figure",{class:"image is-128x128"},[Object(s["d"])("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBmOhc9nSCAb-48QPYiO6iB2KOsTngBEpoQ&usqp=CAU"})],-1),b=Object(s["d"])("span",{"aria-hidden":"true"},null,-1),u=Object(s["d"])("span",{"aria-hidden":"true"},null,-1),v=Object(s["d"])("span",{"aria-hidden":"true"},null,-1),f=[b,u,v],p={class:"navbar-start"},O={class:"navbar-item"},m=Object(s["d"])("div",{class:"icon"},[Object(s["d"])("i",{class:"fas fa-home"})],-1),j=Object(s["f"])("-Home"),h={class:"navbar-item"},g=Object(s["d"])("div",{class:"icon"},[Object(s["d"])("i",{class:"fas fa-book"})],-1),y=Object(s["f"])("-About"),w={class:"navbar-item"},k=Object(s["d"])("div",{class:"icon"},[Object(s["d"])("i",{class:"fas fa-dumbbell"})],-1),x=Object(s["f"])("-Start Tracking"),q={class:"navbar-item",href:"profile.html"},C=Object(s["d"])("div",{class:"icon"},[Object(s["d"])("i",{class:"fas fa-user"})],-1),P=Object(s["f"])("-Profile"),_=Object(s["e"])('<a class="navbar-item" href="friends.html"><div class="icon"><i class="fas fa-users"></i></div> -Friends </a><div class="navbar-item has-dropdown is-hoverable"><a class="navbar-link"> More </a><div class="navbar-dropdown"><a class="navbar-item"> Contact </a><hr class="navbar-divider"><a class="navbar-item"> Report an issue </a></div></div>',2);function A(e,t,a,i,c,n){var b=Object(s["u"])("router-link"),u=Object(s["u"])("login-badge");return Object(s["q"])(),Object(s["c"])("div",l,[Object(s["d"])("nav",r,[Object(s["d"])("div",o,[d,Object(s["d"])("a",{role:"button",class:Object(s["m"])(["navbar-burger",{"is-active":e.navBarIsActive}]),"aria-label":"menu","aria-expanded":"false",onClick:t[0]||(t[0]=function(t){return e.navBarIsActive=!e.navBarIsActive})},f,2)]),Object(s["d"])("div",{id:"navbarBasicExample",class:Object(s["m"])(["navbar-menu",{"is-active":e.navBarIsActive}])},[Object(s["d"])("div",p,[Object(s["d"])("a",O,[m,Object(s["g"])(b,{to:"/",class:"navbar-item is-tab"},{default:Object(s["y"])((function(){return[j]})),_:1})]),Object(s["d"])("a",h,[g,Object(s["g"])(b,{to:"/about",class:"navbar-item"},{default:Object(s["y"])((function(){return[y]})),_:1})]),Object(s["d"])("a",w,[k,Object(s["g"])(b,{to:"/tracker",class:"navbar-item"},{default:Object(s["y"])((function(){return[x]})),_:1})]),Object(s["d"])("a",q,[C,Object(s["g"])(b,{to:"/profile",class:"navbar-item"},{default:Object(s["y"])((function(){return[P]})),_:1})]),_]),Object(s["g"])(u)],2)])])}var B={class:"navbar-end"},S={class:"navbar-item"},E={class:"buttons"},T=Object(s["d"])("strong",null,"Login",-1),U=Object(s["d"])("strong",null,"Sign Up",-1);function L(e,t,a,i,c,n){var l=Object(s["u"])("router-link");return Object(s["q"])(),Object(s["c"])("div",B,[Object(s["d"])("div",S,[Object(s["d"])("div",E,[Object(s["g"])(l,{to:"/login",class:"button is-info"},{default:Object(s["y"])((function(){return[T]})),_:1}),Object(s["g"])(l,{to:"/sign-up",class:"button is-light"},{default:Object(s["y"])((function(){return[U]})),_:1})])])])}var M={},R=a("6b0d"),D=a.n(R);const I=D()(M,[["render",L]]);var W=I,H={components:{LoginBadge:W}};const J=D()(H,[["render",A]]);var N=J,Q={name:"App",components:{NavBar:N}};a("2209");const z=D()(Q,[["render",n]]);var F=z,G=a("6c02"),K={class:"container"},Y={class:"message is-info"},V={class:"message-header"},X=Object(s["d"])("p",null,"Welcome to your Exercise tracker",-1),Z=Object(s["d"])("div",{class:"message-body"},[Object(s["f"])(" Be sure to login or if it's you first time here "),Object(s["d"])("a",{href:"signup.html"},"create an account")],-1),$=Object(s["d"])("figure",null,[Object(s["d"])("img",{src:"https://www.outsideonline.com/wp-content/uploads/2016/07/07/marathon-runner-mistakes_h.jpg",alt:""})],-1);function ee(e,t,a,i,c,n){return Object(s["q"])(),Object(s["c"])("div",null,[Object(s["d"])("div",K,[Object(s["d"])("article",Y,[Object(s["d"])("div",V,[X,Object(s["d"])("button",{class:"delete","aria-label":"delete",onClick:t[0]||(t[0]=function(t){return e.close()})})]),Z]),$])])}var te={name:"Home",components:{}};const ae=D()(te,[["render",ee]]);var se=ae,ie={class:"container"},ce={class:"message is-info"},ne={class:"message-header"},le=Object(s["d"])("p",null,"Welcome to the info page",-1),re=Object(s["d"])("div",{class:"message-body"}," this page will display the guide ",-1),oe=Object(s["d"])("p",null,"A simple fitness tracker website that will allow you to catalouge your workout and track the calories you burn. Create a profile to connect with your friends and share your progress.",-1),de=Object(s["d"])("figure",null,[Object(s["d"])("img",{src:"http://media.bizj.us/view/img/10072378/howtogym*1200xx2715-1527-0-142.jpg",alt:""})],-1);function be(e,t,a,i,c,n){return Object(s["q"])(),Object(s["c"])("div",ie,[Object(s["d"])("article",ce,[Object(s["d"])("div",ne,[le,Object(s["d"])("button",{class:"delete","aria-label":"delete",onClick:t[0]||(t[0]=function(t){return e.close()})})]),re]),oe,de])}var ue={name:"About",components:{}};const ve=D()(ue,[["render",be]]);var fe=ve,pe={class:"container"},Oe={class:"message is-info"},me={class:"message-header"},je=Object(s["d"])("p",null,"Welcome to you exercise log",-1),he=Object(s["d"])("div",{class:"message-body"}," this page will display the users activity log ",-1),ge=Object(s["e"])('<div class="container"><div class="tabs is-centered"><ul><li><a>Read</a></li><li><a href="create.html">Create</a></li></ul></div></div><div class="container"><table class="table is-bordered"><thead><tr><th>Exercise</th><th>Duration</th><th>Calories</th><th>Weight</th><th>Date</th><th>Update</th><th>Delete</th></tr></thead><tbody><tr><td>Runnning</td><td>30 min</td><td>500 cal</td><td>140 pds</td><td>1/1/2022</td><td><a href="update.html"><div class="icon"><i class="fas fa-edit"></i></div></a></td><td><a href="delete"><div class="icon"><i class="fas fa-trash"></i></div></a></td></tr></tbody></table></div>',2);function ye(e,t,a,i,c,n){return Object(s["q"])(),Object(s["c"])("div",pe,[Object(s["d"])("article",Oe,[Object(s["d"])("div",me,[je,Object(s["d"])("button",{class:"delete","aria-label":"delete",onClick:t[0]||(t[0]=function(t){return e.close()})})]),he]),ge])}var we={name:"Tracker",components:{}};const ke=D()(we,[["render",ye]]);var xe=ke,qe={class:"hero is-info is-fullheight"},Ce=Object(s["e"])('<div class="hero-body"><div class="container"><div class="columns is-centered"><div class="column is-5-tablet is-4-desktop is-3-widescreen"><form action="" class="box"><div class="field"><label for="" class="label is-large">Create account</label></div><div class="field"><label for="" class="label">Email</label><div class="control has-icons-left"><input type="email" placeholder="e.g. *****@gmail.com" class="input" required><span class="icon is-small is-left"><i class="fa fa-envelope"></i></span></div></div><div class="field"><label for="" class="label">Password</label><div class="control has-icons-left"><input type="password" placeholder="*******" class="input" required><span class="icon is-small is-left"><i class="fa fa-lock"></i></span></div></div><div class="field"><label for="" class="label">Re enter Password</label><div class="control has-icons-left"><input type="password" placeholder="*******" class="input" required><span class="icon is-small is-left"><i class="fa fa-lock"></i></span></div></div><div class="field"><button class="button is-info"> Create </button></div></form></div></div></div></div>',1),Pe=[Ce];function _e(e,t,a,i,c,n){return Object(s["q"])(),Object(s["c"])("section",qe,Pe)}var Ae={name:"SignUp",components:{}};const Be=D()(Ae,[["render",_e]]);var Se=Be,Ee=Object(s["e"])('<section class="hero is-info is-fullheight"><div class="hero-body"><div class="container"><div class="columns is-centered"><div class="column is-5-tablet is-4-desktop is-3-widescreen"><form action="" class="box"><div class="field"><label for="" class="label is-large">Login</label></div><div class="field"><label for="" class="label">Email</label><div class="control has-icons-left"><input type="email" placeholder="e.g. *****@gmail.com" class="input" required><span class="icon is-small is-left"><i class="fa fa-envelope"></i></span></div></div><div class="field"><label for="" class="label">Password</label><div class="control has-icons-left"><input type="password" placeholder="*******" class="input" required><span class="icon is-small is-left"><i class="fa fa-lock"></i></span></div></div><div class="field"><label for="" class="checkbox"><input type="checkbox"> Remember me </label></div><div class="field"><button class="button is-info"> Login </button></div><div class="field"> Don&#39;t have an account <u><a href="signup.html">Sign Up</a></u></div></form></div></div></div></div></section>',1),Te=[Ee];function Ue(e,t,a,i,c,n){return Object(s["q"])(),Object(s["c"])("div",null,Te)}var Le={name:"Login",components:{}};const Me=D()(Le,[["render",Ue]]);var Re=Me,De=Object(s["e"])('<section class="hero is-info"><div class="hero-body"><div class="title"><div><figure class="image is-128x128"><img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></figure><strong>Profile picture</strong></div></div><p class="subtitle"> User name here </p><p>(User activity will go here)</p></div></section>',1),Ie=[De];function We(e,t,a,i,c,n){return Object(s["q"])(),Object(s["c"])("div",null,Ie)}var He={components:{}};const Je=D()(He,[["render",We]]);var Ne=Je,Qe=[{path:"/",name:"Home",component:se},{path:"/about",name:"About",component:fe},{path:"/tracker",component:xe},{path:"/sign-up",component:Se},{path:"/login",component:Re},{path:"/profile",component:Ne}],ze=Object(G["a"])({history:Object(G["b"])(""),routes:Qe}),Fe=ze;a("6597");Object(s["b"])(F).use(Fe).mount("#app")}});
//# sourceMappingURL=app.16c574b8.js.map