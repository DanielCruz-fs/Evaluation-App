<template>
   <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <div class="android-content mdl-layout__content">
        <div class="demo-card-wide mdl-card">
            <div class="mdl-card__title">
               <h2 class="mdl-card__title-text">Login</h2>
            </div>
         </div>
         <div class="form-box-ml">
            <form action="home.html" autocomplete="off" method="post">
               <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
                <input class="mdl-textfield__input" type="text" id="email" v-model="email">
                <label class="mdl-textfield__label" for="email">Correo</label>
              </div>
               <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
                <input class="mdl-textfield__input" type="text" id="password" v-model="password">
                <label class="mdl-textfield__label" for="password">Contraseña</label>
              </div>
               <div class="center pd-top20">
                  <button class="btn-ml blue-ml">Ingresar</button>
                  <div class="pd-top20">
                     <a href="" class="p-respass">¿Olvidaste tu contraseña?</a>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>

<script>
export default {
  name: 'LoginApp',
  data(){
     return{
         email:'',
         password:''
     }
  }
}
</script>
<style scoped>
 .demo-card-wide.mdl-card {
      width: 100%;
    }
    .demo-card-wide > .mdl-card__title {
      color: #fff;
      height: 220px;
      background: url('../assets/back.jpg') center / cover;
    }
    .demo-card-wide > .mdl-card__menu {
      color: #fff;
    }
</style>
