<template>
  <div class="container">
    <article class="message is-info">
          <div class="message-header"> 
              <p>Welcome to the info page</p>
              <button class="delete" aria-label="delete" @click="close()"></button>
            </div>
            <div class="message-body">
              this page will display the guide
            </div>
          </article>
        <p>A simple fitness tracker website that will allow you to catalouge your workout and track the calories you burn. Create a profile to connect with your friends and share your progress.</p>
        <figure><img src="http://media.bizj.us/view/img/10072378/howtogym*1200xx2715-1527-0-142.jpg" alt=""></figure>  
  </div>
</template>

<script>
export default {
  name: 'About',
  components: {
    
  }
  
}
</script>

