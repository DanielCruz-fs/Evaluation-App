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
    <select class="mdl-textfield__input" id="career" v-model="getCareerId" v-on:change="filterSubjectsByCareer()">
      <option></option>
      <option v-for="career in careers" :key="career.id" :value="career.id">{{career.name}}</option>
    </select>
    <label class="mdl-textfield__label pd-10-ml" for="career">Carrera</label>
  </div>

  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
    <select class="mdl-textfield__input" id="subject" v-model="getSubjectId" v-on:change="filterParallelsBySubjectAndCareer()">
      <option></option>
      <option v-for="subject in subjects" :key="subject.id" :value="subject.id">{{subject.name}}</option>
    </select>
    <label class="mdl-textfield__label pd-10-ml" for="subject">Asignatura</label>
  </div>

  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
    <select class="mdl-textfield__input" id="subject" name="subject" v-model="getParallelId" v-on:change="filterProfessorsBySubjectAndParallel()">
      <option></option>
      <option v-for="parallel in parallels" :key="parallel.id" :value="parallel.id">{{parallel.detail}}</option>
    </select>
    <label class="mdl-textfield__label pd-10-ml" for="parallel">Paralelo</label>
  </div>


  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
    <select class="mdl-textfield__input" id="professor" v-model="getProfessorId">
      <option></option>
      <option v-for="professor in professors" :key="professor.id" :value="professor.id">
        {{professor.name}} {{professor.lastname_p}} {{professor.lastname_s}}
      </option>
    </select>
    <label class="mdl-textfield__label pd-10-ml" for="professor">Docente</label>
  </div>

  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
    <select class="mdl-textfield__input" id="management" v-model="getManagementId">
      <option></option>
      <option v-for="management in managements" :key="management.id" :value="management.id">
         {{management.number}}/{{management.year}}
      </option>
    </select>
    <label class="mdl-textfield__label pd-10-ml" for="professor">Gestion</label>
  </div>

  <ul class="demo-list-control mdl-list pd-10-ml">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label width-100">
        <input class="mdl-textfield__input" type="text" id="fecha" disabled="" v-model="currentDate">
        <label class="mdl-textfield__label" for="fecha" style="color: #3da6dd;">Fecha</label>
      </div>
  </ul>

  <div class="center pd-bm-20">
    <a class="btn-ml-submit blue-ml" @click="getAssignmentId()">Aceptar</a>
  </div>
</div>
</template>

<script>
export default {
   data() {
      return{
         faculties: [],
         careers: [],
         subjects: [],
         parallels: [],
         professors: [],
         managements: [],
         getFacultyId: '',
         getCareerId: '',
         getSubjectId: '',
         getParallelId: '',
         getProfessorId: '',
         getManagementId: '',
         getAssignmentIdEvaluation: '',
         currentDate: new Date().toLocaleString()
      }
   },
   created () {
       this.$http.get('api/faculties').then(response => this.faculties = response.body)
       .catch(error => console.log(error.response.body));

       this.$http.get('api/managements').then(response => this.managements = response.body)
       .catch(error => console.log(error.response.body));
   },
   methods: {
       filterCareersByFaculty(){
           this.$http.get('api/careers/'+ this.getFacultyId).then(response => {
               this.careers = response.body;
           }).catch(error => console.log(error.response.body));
       },
       filterSubjectsByCareer(){
           this.$http.get('api/subjects/'+ this.getCareerId).then(response => this.subjects = response.body)
           .catch(error => console.log(error.response.body));
       },
       filterParallelsBySubjectAndCareer(){
           this.$http.get('api/parallels/'+ this.getCareerId + '/' + this.getSubjectId)
           .then(response => this.parallels = response.body)
           .catch(error => console.log(error.response.body));
       },
       filterProfessorsBySubjectAndParallel(){
           this.$http.get('api/professors/'+ this.getSubjectId + '/' + this.getParallelId)
           .then(response => this.professors = response.body)
           .catch(error => console.log(error.response.body));
       },
       getAssignmentId(){
           this.$http.get('api/assignmentId/'+ this.getCareerId + '/' + this.getSubjectId + '/' + this.getProfessorId + 
           '/' + this.getParallelId)
           .then(response => {
               this.getAssignmentIdEvaluation = response.body.id;
               let assignmentId = this.getAssignmentIdEvaluation;
               let managementId = this.getManagementId;
              //  console.log(assignmentId);
              //  console.log(managementId);
               this.$router.push({ name : 'form/check', params: { assignmentId, managementId }});
           }).catch(error => console.log(error.response.body));
       }
   }
}
</script>

<style>

</style>
