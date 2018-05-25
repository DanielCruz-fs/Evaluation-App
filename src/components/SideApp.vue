<template>
  <div class="android-drawer mdl-layout__drawer" id="drawer">
         <span class="mdl-layout-title">
            <div class="background">
               <img src="../assets/back.jpg">
            </div>
            {{User.name}} {{User.lastname_p}} {{User.lastname_s}}<br>
            {{User.email}}
         </span>
         <nav class="mdl-navigation">
            <router-link class="mdl-navigation__link" to="/form">
               <p @click="hideSidebar()"><i class="material-icons pdr-10px" role="presentation">home</i>
               Inicio</p>
            </router-link>
            <router-link class="mdl-navigation__link" to="/form/setting">
               <p @click="hideSidebar()"><i class="material-icons pdr-10px" role="presentation">settings</i>
               Configuración</p>
            </router-link>
            <div class="android-drawer-separator"></div>
            <router-link class="mdl-navigation__link" to="/form/about">
               <p @click="hideSidebar()"><i class="material-icons pdr-10px" role="presentation">info</i>
               Acerca de</p>
            </router-link>
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
     },
     hideSidebar(){
         document.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
         document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
         this.classList.remove('is-visible');
         }, false);    
     }
   }
}
</script>

<style>

</style>
