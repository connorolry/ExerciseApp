<template>
<div class="container">
    <article class="message is-info" >
          <div class="message-header"> 
              <p>Welcome to you exercise log</p>
              <button class="delete" aria-label="delete" @click="close()"></button>
            </div>
            <div class="message-body">
              this page will display the users activity log
            </div>
          </article>


       <div class="container">
        <div class="tabs is-centered">
          <ul>
            <li @click="active='Read'"><a>Read</a></li>
            <li @click="active='Create'"><a>Create</a></li>
          </ul>
         </div>
       </div>
       
       <div class="container">
        <component :is="active"/>
       </div>
</div>
</template>

<script>
import Read from '../components/Read.vue';
import Create from '../components/Create.vue';


export default {
 name: 'Tracker',
 components: {
  Read,
  Create

 },
 data() {
   return{
    active: 'Read'
   }
 }  
}
</script>

<style>

</style>