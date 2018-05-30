<template>
<div>
  <div class="mdl-textfield mdl-js-textfield width-100">
    <label class="p-title-ml" for="faculty">Facultad :</label>
    <select class="mdl-textfield__input" id="faculty" v-model="getFacultyId" v-on:change="filterCareersByFaculty()">
      <option disabled>Elige Una Facultad</option>
      <option v-for="faculty in faculties" :key="faculty.id" :value="faculty.id">{{faculty.name}}</option>
    </select>
  </div>

  <div class="mdl-textfield mdl-js-textfield width-100">
    <label class="p-title-ml" for="career">Carrera :</label>
    <select class="mdl-textfield__input" id="career" v-model="getCareerId" v-on:change="filterSubjectsByCareer()">
      <option disabled>Elige Una Carrera</option>
      <option v-for="career in careers" :key="career.id" :value="career.id">{{career.name}}</option>
    </select>
  </div>

  <div class="mdl-textfield mdl-js-textfield width-100">
    <label class="p-title-ml" for="subject">Asignatura :</label>
    <select class="mdl-textfield__input" id="subject" v-model="getSubjectId" v-on:change="filterParallelsBySubjectAndCareer()">
      <option disabled>Elige Una Asignatura</option>
      <option v-for="subject in subjects" :key="subject.id" :value="subject.id">{{subject.name}}</option>
    </select>
  </div>

  <div class="mdl-textfield mdl-js-textfield width-100">
    <label class="p-title-ml" for="parallel">Paralelo :</label>
    <select class="mdl-textfield__input" id="subject" name="subject" v-model="getParallelId" v-on:change="filterProfessorsBySubjectAndParallel()">
      <option disabled>Elige Un Paralelo</option>
      <option v-for="parallel in parallels" :key="parallel.id" :value="parallel.id">{{parallel.detail}}</option>
    </select>
  </div>


  <div class="mdl-textfield mdl-js-textfield width-100">
    <label class="p-title-ml" for="professor">Docente :</label>
    <select class="mdl-textfield__input" id="professor" v-model="getProfessorId">
      <option disabled>Elige Un Docente</option>
      <option v-for="professor in professors" :key="professor.id" :value="professor.id">
        {{professor.name}} {{professor.lastname_p}} {{professor.lastname_s}}
      </option>
    </select>
  </div>

  <div class="mdl-textfield mdl-js-textfield width-100">
    <label class="p-title-ml" for="professor">Gestion :</label>
    <select class="mdl-textfield__input" id="management" v-model="getManagementId">
      <option disabled>Gestion Actual</option>
      <option v-for="management in managements" :key="management.id" :value="management.id">
         {{management.number}}/{{management.year}}
      </option>
    </select>
  </div>


    <div class="mdl-textfield mdl-js-textfield width-100 currentDate">
        <input class="mdl-textfield__input" type="text" id="fecha" disabled="" v-model="currentDate">
    </div>


  <div class="center pd-bm-20 selectSaveButton">
    <a class="btn-ml-submit blue-ml" @click="getAssignmentId()" v-show="getFacultyId && getCareerId && getSubjectId
     && getParallelId && getProfessorId && getManagementId">Aceptar</a>
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
           // we clean some properties
           this.getCareerId  = '';
           this.getSubjectId = '';
           this.getParallelId = '';
           this.getProfessorId = '';
           this.getManagementId = '';
       },
       filterSubjectsByCareer(){
           this.$http.get('api/subjects/'+ this.getCareerId).then(response => this.subjects = response.body)
           .catch(error => console.log(error.response.body));
           this.getSubjectId = '';
           this.getParallelId = '';
           this.getProfessorId = '';
           this.getManagementId = '';
       },
       filterParallelsBySubjectAndCareer(){
           this.$http.get('api/parallels/'+ this.getCareerId + '/' + this.getSubjectId)
           .then(response => this.parallels = response.body)
           .catch(error => console.log(error.response.body));
           this.getParallelId = '';
           this.getProfessorId = '';
           this.getManagementId = '';
       },
       filterProfessorsBySubjectAndParallel(){
           this.$http.get('api/professors/'+ this.getSubjectId + '/' + this.getParallelId)
           .then(response => this.professors = response.body)
           .catch(error => console.log(error.response.body));
           this.getProfessorId = '';
           this.getManagementId = '';
       },
       getAssignmentId(){
           this.$http.get('api/assignmentId/'+ this.getCareerId + '/' + this.getSubjectId + '/' + this.getProfessorId + 
           '/' + this.getParallelId)
           .then(response => {
               this.getAssignmentIdEvaluation = response.body.id;
               let assignmentId = this.getAssignmentIdEvaluation;
               let managementId = this.getManagementId;
               let professorId = this.getProfessorId;
              //  console.log(assignmentId);
              //  console.log(managementId);
               this.$router.push({ name : 'form/check', params: { assignmentId, managementId, professorId }});
           }).catch(error => console.log(error.response.body));
       }
   }
}
</script>

<style scoped>
label{
   margin-left: -5px;
}
div.currentDate{
   margin-top: -23px;
}
div.selectSaveButton{
   margin-top: -8px;
}
</style>
