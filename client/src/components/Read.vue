<template>
  <div>
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

}
</script>

<style>

</style>