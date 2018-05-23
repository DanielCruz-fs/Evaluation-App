<template>
<div>
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
             User:{},
             categories: [],
             arrayDetails: []
          }
     },
     created(){
         this.setAuthenticatedUser();
         this.$http.get('api/categories').then(response => this.categories = response.body)
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
         let userId = this.User.id;
         
         this.$http.post('api/saveEvaluation/' + this.$route.params.assignmentId + '/' + this.$route.params.managementId
         + '/' + userId, this.form).then(response => console.log(response.body))
         .catch(error => console.log(error.response.body));
         // getting evaluation id for indicators
         this.$http.get('api/evaluationId/' + this.$route.params.assignmentId + '/' + this.$route.params.managementId
         + '/' + userId).then(response => {
             console.log(response.body.id);
             //Trigger for child category components arrayDetails
             EventBus.$emit('saveIndicators', response.body.id);
         }).catch(error => console.log(error.response.body));
         //after saving everything we reirect user to main view
         this.$router.push('/form');
         }
     }
}
</script>
<style scoped>
textarea{
     background-color: lightgrey;
}
</style>
