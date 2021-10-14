<template>
  <div>
    <div class="container">

        <article class="message is-info" >
          <div class="message-header"> 
              <p>Welcome to your Exercise tracker</p>
              <button class="delete" aria-label="delete" @click="close()"></button>
            </div>
            <div class="message-body">
              Be sure to login or if it's you first time here  <a href="signup.html">create an account</a>
            </div>
        </article>
        <figure><img src="https://www.outsideonline.com/wp-content/uploads/2016/07/07/marathon-runner-mistakes_h.jpg" alt=""></figure>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
