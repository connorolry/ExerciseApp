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
            <li><a>Read</a></li>
            <li><a href="create.html">Create</a></li>
          </ul>
         </div>
       </div>
       
       <div class="container">
        <table class="table is-bordered">
          <thead>
            <tr>
              <th>Exercise</th>
              <th>Duration</th>
              <th>Calories</th>
              <th>Weight</th>
              <th>Date</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead> 
          
          <tbody>
            <tr>
              <td>Runnning</td>
              <td>30 min</td>
              <td>500 cal</td>
              <td>140 pds</td>
              <td>1/1/2022</td>
              <td><a href="update.html"><div class="icon"><i class="fas fa-edit"></i></div></a></td>
              <td><a href="delete"><div class="icon"><i class="fas fa-trash"></i></div></a></td>
            </tr>
          </tbody>
        </table>
       </div>
</div>
</template>

<script>
export default {
 name: 'Tracker',
 components: {

 }
}
</script>

<style>

</style>