<template>
    <div class="buttons" v-if="!Session.user">
      <a class="button is-info" @click="login">
            Log in
          </a>
          <a class="button is-light" @click="sign">
            <strong>Sign up</strong>
          </a>
    </div>
    <div v-else>
        Hello {{name}} 
    </div>
</template>

<script>
import Session from "../services/session";

export default {
    data (){
        return ({ 
            Session
        })
    },
    methods: {
        login(){
            this.$router.push('/login');
            //this.Session.Login();

        },
        sign(){
            this.$router.push('/sign-up')
        }
    },
    computed:{
        name(){
            return this.Session.user.firstName + ' ' + this.Session.user.lastName;
        }
    }
}
</script>

<style>

</style>