<template> 
      <div class="android-header mdl-layout__header mdl-layout__header--waterfall border-btm-1">
         
         <div class="mdl-layout__header-row">
            <div class="android-header-spacer mdl-layout-spacer"></div>
            <button class=" mdl-button mdl-js-button mdl-button--icon" id="more-button">
               <i class="material-icons">more_vert</i>
            </button>
            <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">
               <li class="mdl-menu__item" @click="logOut()">Salir</li>
            </ul>
         </div>
      </div>
</template>

<script>
export default {
     data(){
         return{

         }
     },
     methods:{
         logOut(){
             this.$auth.destroyToken();
             window.location = '/';
         }
     }
}
</script>

<style>

</style>
