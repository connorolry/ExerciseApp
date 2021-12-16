<template>
  <div>
    <h1 class="title">
          Exercise Tracker
        </h1>
        <p class="subtitle">
          Catalouge you workout
        </p>
        
        
    <nav-bar/>
    <messages/>
    <router-view />
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue'
import Messages from './components/Messages.vue'
import * as Realm from 'realm-web';

const REALM_APP_ID = process.env.VUE_APP_REALM_APP_ID;
const app = new Realm.App({ id: REALM_APP_ID });
const credentials = Realm.Credentials.anonymous();


 

export default {
  name: 'App',
  components: {
    NavBar, 
    Messages
  },

  methods: {
     async put(){
      const user =  await app.logIn(credentials);
      const result = await user.functions.AddUser("Farty", "Tarty");
      console.log(result)
    }
  }

  
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
