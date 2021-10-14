<template>
  <div class="container is-fluid">

        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <figure class="image is-128x128">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBmOhc9nSCAb-48QPYiO6iB2KOsTngBEpoQ&usqp=CAU">
              </figure>
          
              <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': navBarIsActive}" @click="navBarIsActive = !navBarIsActive">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
          
            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': navBarIsActive}">
              <div class="navbar-start">
                <a class="navbar-item">
                  <div class="icon"><i class="fas fa-home"></i></div>
                  <router-link to="/" class="navbar-item">-Home</router-link>
                </a>
          
                <a class="navbar-item">
                  <div class="icon"><i class="fas fa-book"></i></div>
                  <router-link to="/about" class="nabar-item">-About</router-link>
                </a>

                <a class="navbar-item">
                  <div class="icon"><i class="fas fa-dumbbell"></i></div>
                    <router-link to="/tracker" class="nabar-item">-Start Tracking</router-link>
                </a>

                <a class="navbar-item" href="profile.html">
                  <div class="icon"><i class="fas fa-user"></i></div>
                    -Profile
                </a>

                <a class="navbar-item" href="friends.html">
                  <div class="icon"><i class="fas fa-users"></i></div>
                    -Friends
                </a>
          
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    More
                  </a>
          
                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      Contact
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                      Report an issue
                    </a>
                  </div>
                </div>
              </div>
          
              <login-badge />

            </div>
          </nav>
        </div>   
        
</template>

<script>
import LoginBadge from './LoginBadge.vue'
export default {
  components: { LoginBadge },

}
</script>

<style>

</style>