<template>
<div>
         <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
            <select class="mdl-textfield__input" id="faculty" v-model="getFacultyId" v-on:change="filterCareersByFaculty()">
              <option disabled>Elige Una Facultad</option>
              <option v-for="faculty in faculties" :key="faculty.id" :value="faculty.id">{{faculty.name}}</option>
            </select>
            <label class="mdl-textfield__label pd-10-ml" for="faculty">Facultad</label>
          </div>

          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
            <select class="mdl-textfield__input" id="career" name="career">
              <!-- <option selected>xxxxx</option> -->
              <option></option>
              <option v-for="career in careers" :key="career.id">{{career.name}}</option>
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
            <router-link to="/form/check" class="btn-ml-submit blue-ml">Aceptar</router-link>
         </div>
</div>
</template>

<script>
export default {
   data() {
      return{
         faculties: [],
         careers: [],
         getFacultyId: ''
      }
   },
   created () {
       this.$http.get('api/faculties').then(response => this.faculties = response.body)
       .catch(error => console.log(error.response.body));
   },
   methods: {
       filterCareersByFaculty(){
           this.$http.get('api/careers/'+ this.getFacultyId).then(response => {
               this.careers = response.body;
           }).catch(error => console.log(error.response.body));
       }
   }
}
</script>

<style>

</style>
