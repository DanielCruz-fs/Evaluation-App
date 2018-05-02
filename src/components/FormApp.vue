<template>
<div>
     <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">

       <background-app></background-app>
       <top-app></top-app>
       <side-app></side-app>

      <div class="android-content mdl-layout__content bg-fa"> 

         <router-view></router-view>
      

      </div>
   </div>
   </div>
</template>

<script>
import BackgroundApp from './BackgroundApp';
import TopApp from './TopApp';
import SideApp from './SideApp';

export default {
   components : {TopApp, BackgroundApp, SideApp},
   name: 'FormApp'
}
</script>

<style>

</style>
