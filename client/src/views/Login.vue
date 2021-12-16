<template>
      <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box">
              <div class="field">
                <label for="" class="label is-large" >Login</label>
              </div>
              <div class="field">
                <label for="" class="label">Email</label>
                <div class="control has-icons-left">
                  <input type="email" placeholder="e.g. *****@gmail.com" class="input"  v-model="email" required>
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control has-icons-left">
                  <input type="password" placeholder="*******" class="input" v-model="password" required>
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox">
                 Remember me
                </label>
              </div>
              <div class="field">
                <button class="button is-info" @click="login()">
                  Login
                </button>
              </div>
              <div class="field">
                Don't have an account <u><router-link to="/sign-up">Sign up</router-link></u>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</template>

<script>
import Session from "../services/session";
import {app} from '../models/mongo';
import {credentials} from '../models/mongo';
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";

export default {
    data: ()=>({
        email: null,
        password: null,
        Session
    }),
    methods: {
        async login(){
       
        const collection =  await app.logIn(credentials);
        const result =  await collection.functions.FindUser(this.email, this.password);
        console.log( result.email)

        if(result.email == this.email && result.password == this.password){
            
            NotificationProgrammatic.open({
            duration: 5000,
            message: "Login Success",
            variant: 'success',
            type: 'success',
            closable: true,

        })
            
            this.$router.push('/')
        }
        },
        
        
    }
}
    

</script>

<style>

</style>