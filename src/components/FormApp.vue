<template>
     <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      
      <div class="nav-background">
        <div class="ea k bg-image-ml" ></div>
      </div>
      <div class="android-header mdl-layout__header mdl-layout__header--waterfall border-btm-1">
         
         <div class="mdl-layout__header-row">
            <div class="android-header-spacer mdl-layout-spacer"></div>
            <button class=" mdl-button mdl-js-button mdl-button--icon" id="more-button">
               <i class="material-icons">more_vert</i>
            </button>
            <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="more-button">
               <li class="mdl-menu__item"><a href="index.html">Salir</a></li>
            </ul>
         </div>
      </div>

      <div class="android-drawer mdl-layout__drawer">
         <span class="mdl-layout-title">
            <div class="background">
               <img src="../assets/back.jpg">
            </div>
            <!-- Hola MUndo -->
            <!-- <img class="android-logo-image" src="images/android-logo-white.png"> -->
         </span>
         <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="home.html">
               <i class="material-icons pdr-10px" role="presentation">home</i>
               Inicio
            </a>
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

      <div class="android-content mdl-layout__content bg-fa"> 

         <ul class="demo-list-control mdl-list pd-10-ml">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select width-100">
               <input type="text" value="" class="mdl-textfield__input" id="sample3" readonly>
               <input type="hidden" value="" name="sample3">
               <label for="sample3" class="mdl-textfield__label">Facultad</label>
               <ul for="sample3" class="mdl-menu mdl-menu--bottom-left mdl-js-menu width-100">
                  <li class="mdl-menu__item" data-val="1" v-for="faculty in faculties" :key="faculty.id">{{faculty.name}}</li>
               </ul>
            </div>
          </ul>

          <select>
  <option v-for="faculty in faculties" :key="faculty.id" value="volvo">{{faculty.name}}</option>

</select>

          <ul class="demo-list-control mdl-list pd-10-ml">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select width-100">
               <input type="text" value="" class="mdl-textfield__input" id="sample1" readonly>
               <input type="hidden" value="" name="sample1">
               <label for="sample1" class="mdl-textfield__label">Carrera</label>
               <ul for="sample1" class="mdl-menu mdl-menu--bottom-left mdl-js-menu width-100">
                  <li class="mdl-menu__item" data-val="1">Ingeniería de Sistemas</li>
               </ul>
            </div>
          </ul>

          <ul class="demo-list-control mdl-list pd-10-ml">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select width-100">
               <input type="text" value="" class="mdl-textfield__input" id="sample2" readonly>
               <input type="hidden" value="" name="sample2">
               <label for="sample2" class="mdl-textfield__label">Asignatura</label>
               <ul for="sample2" class="mdl-menu mdl-menu--bottom-left mdl-js-menu width-100">
                  <li class="mdl-menu__item" data-val="1">Calculo I</li>
                  <li class="mdl-menu__item" data-val="1">Calculo II</li>
               </ul>
            </div>
          </ul>

          <ul class="demo-list-control mdl-list pd-10-ml">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select width-100">
               <input type="text" value="" class="mdl-textfield__input" id="sample10" readonly>
               <input type="hidden" value="" name="sample10">
               <label for="sample10" class="mdl-textfield__label">Docente</label>
               <ul for="sample10" class="mdl-menu mdl-menu--bottom-left mdl-js-menu width-100">
                  <li class="mdl-menu__item" data-val="1">Jhon Smith</li>
                  <li class="mdl-menu__item" data-val="1">Jhon Vega</li>
               </ul>
            </div>
          </ul>

          <ul class="demo-list-control mdl-list pd-10-ml">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select width-100">
               <input type="text" value="" class="mdl-textfield__input" id="sample5" readonly>
               <input type="hidden" value="" name="sample5">
               <label for="sample5" class="mdl-textfield__label">Gestión</label>
               <ul for="sample5" class="mdl-menu mdl-menu--bottom-left mdl-js-menu width-100">
                  <li class="mdl-menu__item" data-val="1">1/2018</li>
                  <li class="mdl-menu__item" data-val="1">2/2018</li>
               </ul>
            </div>
          </ul>

          <ul class="demo-list-control mdl-list pd-10-ml">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
                <input class="mdl-textfield__input" type="text" id="fecha" disabled="" value="10-04-2018">
                <label class="mdl-textfield__label" for="fecha" style="color: #3da6dd;">Fecha</label>
              </div>
          </ul>

          
  

         <div class="center pd-bm-20">
            <a href="home-1.html" class="btn-ml-submit blue-ml">Aceptar</a>
         </div>

      </div>
   </div>
</template>

<script>
export default {
   name: 'FormApp',
   data() {
      return{
         faculties: []
      }
   },
   created () {
       this.$http.get('api/facultades').then(response => this.faculties = response.body)
       .catch(error => console.log(error.response.data));
   }
}
</script>

<style>
 .bg-image-ml{
         background: url('../assets/back.jpg');
      }
</style>
