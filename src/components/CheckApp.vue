<template>
<div>
    <p id="professor-title" class="p-title-ml">Docente:</p><p id="professor" class="p-title-ml-s">{{professor.lastname_p}} {{professor.lastname_s}} {{professor.name}}</p>

         <category-app v-for="category in categories" :key="category.id" :data=category></category-app>
         <p class="p-title-ml-s">Recomendación</p>
         
         <ul class="demo-list-control mdl-list pd-10-ml">
         <div class="mdl-textfield mdl-js-textfield width-100 textarea-recom-ml">
            <textarea class="mdl-textfield__input bg-fff heigth-150" type="text" rows= "3" v-model="form.recommendation"></textarea>
         </div>
      </ul>

         <div class="center btn-top35">
            <a @click="saveEvaluation()" class="btn-ml-submit blue-ml">Aceptar</a>
         </div>
</div>
</template>

<script>
import CategoryApp from './CategoryApp';
export default {
     components: { CategoryApp },
     data(){
          return{
             form:{
                 recommendation:null
             },
             professor: {},
             User:{},
             categories: [],
             arrayDetails: []
          }
     },
     created(){
         this.setAuthenticatedUser();
         this.$http.get('api/categories').then(response => this.categories = response.body)
         .catch(error => console.log(error.response.body));
         this.$http.get('api/getProfessor/' + this.$route.params.professorId).then(response => this.professor = response.body)
         .catch(error => console.log(error.response.body));
     },
     methods:{
         setAuthenticatedUser(){
         this.$http.get('api/user').then(response => {
             this.$auth.setAuthenticatedUser(response.body);
             this.User = this.$auth.getAuthenticatedUser();
             });
         },
         saveEvaluation(){
             this.$swal({
                 title: 'Está seguro?',
                 text: 'La Evaluación se guardará',
                 type: 'warning',
                 showCancelButton: true,
                 confirmButtonText: 'Si!',
                 confirmButtonColor: '#3da6dd',
                 cancelButtonText: 'No!',
                 showCloseButton: true
                 }).then((result) => {
                 if(result.value) {
           
                 let userId = this.User.id;
                 this.$http.post('api/saveEvaluation/' + this.$route.params.assignmentId + '/' + this.$route.params.managementId
                 + '/' + userId, this.form).then(response => {
                     console.log(response.body);
                     //Trigger for child category components arrayDetails
                     EventBus.$emit('saveIndicators', response.body);
                 }).catch(error => console.log(error.response.body));
                 this.$swal({
                 type: 'success',
                 title: 'Registrado',
                 text: 'La Evaluación se guardo con éxito',
                 confirmButtonColor: '#3da6dd',
                 });
                //after saving everything we reirect user to main view
                this.$router.push('/form'); 
           
                 } else {
                 this.$swal({
                 type: 'info',
                 title: 'Cancelado',
                 text: 'La Evaluación aún no se guardo',
                 confirmButtonColor: '#3da6dd',
                 });
                 }
                 });
        
         }
     }
}
</script>
<style scoped>
textarea{
     border: 1px solid dodgerblue;
     box-shadow: 0 0 10px #719ECE;
     border-radius: 6px;
}
textarea:focus{
     outline: none !important;
     border:1px solid dodgerblue;
     box-shadow: 0 0 10px #719ECE;
}
#professor{
     text-align: center;
     margin-top: -24px;
     font-weight: 500;
}
#professor-title{
     font-weight: 500;
}
</style>
