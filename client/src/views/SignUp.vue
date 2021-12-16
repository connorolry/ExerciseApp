<template>
    <section class="hero is-info is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box">
              <div class="field">
                <label for="" class="label is-large" >Create account</label>
              </div>
              <div class="field">
                <label for="" class="label">Email</label>
                <div class="control has-icons-left">
                  <input type="email" placeholder="e.g. *****@gmail.com" class="input" v-model="email" required>
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
                <label for="" class="label">Re enter Password</label>
                <div class="control has-icons-left">
                  <input type="password" placeholder="*******" class="input" v-model="repassword" required>
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <button class="button is-info" @click="add()">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import {app} from '../models/mongo';
import {credentials} from '../models/mongo'
import { NotificationProgrammatic } from "@oruga-ui/oruga-next/dist/esm/notification";
export default {
  data: ()=>({
    email: null,
    password: null,
    repassword: null,
  }),
  methods: {
    async add(){
     
     if(this.password == this.repassword && this.email != null) {
       
        const collection =  await app.logIn(credentials);
        const result = await collection.functions.AddUser(this.email, this.password);
        console.log(result);
        NotificationProgrammatic.open({
            duration: 5000,
            message: "User created",
            variant: 'success',
            type: 'success',
            closable: true,

        })
        this.$router.push('/login')
     }
     
     else{
      console.log('error')
      NotificationProgrammatic.open({
            duration: 5000,
            message: "Invalid Credentials",
            variant: 'danger',
            type: 'danger',
            closable: true,

        })}

    }
  }

}
</script>

<style>

</style>