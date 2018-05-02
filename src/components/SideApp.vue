<template>
  <div class="android-drawer mdl-layout__drawer">
         <span class="mdl-layout-title">
            <div class="background">
               <img src="../assets/back.jpg">
            </div>
            {{User.name}} {{User.lastname_p}} {{User.lastname_s}}<br>
            {{User.email}}
            <!-- <img class="android-logo-image" src="images/android-logo-white.png"> -->
         </span>
         <nav class="mdl-navigation">
            <router-link class="mdl-navigation__link" to="/form">
               <i class="material-icons pdr-10px" role="presentation">home</i>
               Inicio
            </router-link>
            <a class="mdl-navigation__link" href="">
               <i class="material-icons pdr-10px" role="presentation">settings</i>
               Configuración
            </a>
            <div class="android-drawer-separator"></div>
            <a class="mdl-navigation__link" href="">
               <i class="material-icons pdr-10px" role="presentation">info</i>
               Acerca de
            </a>
         </nav>
      </div>
</template>

<script>
export default {
   data(){
      return{
         User:{}
      }
   },
   created(){
       this.setAuthenticatedUser();
   },
   methods:{
     setAuthenticatedUser(){
         this.$http.get('api/user').then(response => {
             this.$auth.setAuthenticatedUser(response.body);
             this.User = this.$auth.getAuthenticatedUser();
         });
     }
   }
}
</script>

<style>

</style>
