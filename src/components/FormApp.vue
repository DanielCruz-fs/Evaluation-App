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

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
            <select class="mdl-textfield__input" id="faculty" name="faculty">
              <option></option>
              <option v-for="faculty in faculties" :key="faculty.id">{{faculty.name}}</option>
            </select>
            <label class="mdl-textfield__label pd-10-ml" for="faculty">Facultad</label>
          </div>

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
            <select class="mdl-textfield__input" id="career" name="career">
              <option></option>
              <!-- <option v-for="faculty in faculties" :key="faculty.id">{{faculty.name}}</option> -->
              <option value="87">Sistemas</option>
              <option value="89">Comercial</option>
              <option value="91">Economica</option>
            </select>
            <label class="mdl-textfield__label pd-10-ml" for="career">Carrera</label>
          </div>

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
            <select class="mdl-textfield__input" id="subject" name="subject">
              <option></option>
              <!-- <option v-for="faculty in faculties" :key="faculty.id">{{faculty.name}}</option> -->
              <option value="87">Calculo 1</option>
              <option value="89">Calculo 2</option>
              <option value="91">Redes</option>
            </select>
            <label class="mdl-textfield__label pd-10-ml" for="subject">Asignatura</label>
          </div>

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
            <select class="mdl-textfield__input" id="subject" name="subject">
              <option></option>
              <!-- <option v-for="faculty in faculties" :key="faculty.id">{{faculty.name}}</option> -->
              <option value="87">Paralelo 1</option>
              <option value="89">Paralelo 2</option>
              <option value="91">Paralelo 3</option>
            </select>
            <label class="mdl-textfield__label pd-10-ml" for="parallel">Paralelo</label>
          </div>


          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
            <select class="mdl-textfield__input" id="professor" name="professor">
              <option></option>
              <!-- <option v-for="faculty in faculties" :key="faculty.id">{{faculty.name}}</option> -->
              <option value="87">Jhon Smith</option>
              <option value="89">Alberto Bravo</option>
              <option value="91">Yiang Yen</option>
            </select>
            <label class="mdl-textfield__label pd-10-ml" for="professor">Docente</label>
          </div>

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
            <select class="mdl-textfield__input" id="professor" name="professor">
              <option></option>
              <!-- <option v-for="faculty in faculties" :key="faculty.id">{{faculty.name}}</option> -->
              <option value="87">1/2018</option>
              <option value="89">2/2018</option>
              <option value="91">3/2018</option>
            </select>
            <label class="mdl-textfield__label pd-10-ml" for="professor">Gestion</label>
          </div>

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
