<template>
<div>
    <p class="p-title-ml"> {{ data.description }}</p>

         <ul class="demo-list-control mdl-list pd-10-ml">
            <li v-for="indicator in indicators" :key="indicator.id" class="mdl-list__item list-ml left-margin-color01">
               <span class="mdl-list__item-primary-content color-ml-list font-14">
                     {{ indicator.description }}
               </span>
               <span class="mdl-list__item-secondary-action">
                  <div class="Toggle">
                      <input type="checkbox" :id="indicator.id" :value="indicator.id" v-model="checkedDetails"
                       class="Toggle-input">
                      <label :for="indicator.id" class="Toggle-label">Toggle</label>
                  </div>
               </span>
            </li>
         </ul>
</div>
</template>

<script>
export default {
     props:['data'],
     data(){
         return{
             categoryId: this.data.id,
             indicators: [],
             checkedDetails: []
         }
     },
     created () {
         this.$http.get('api/indicators/' + this.categoryId).then(response => {
              this.indicators = response.body;
         })
         .catch(error => console.log(error.response.body));
         this.listen();
     },
     methods:{
         listen(){
              EventBus.$once('saveIndicators', (evaluationId) => {
                //  console.log(this.checkedDetails);
                //  console.log(evaluationId);
                 this.$http.post('api/saveIndicators/' + evaluationId, this.$data)
                 .then(response => console.log(response.body))
                 .catch(error => console.log(error.response.body));
 	 	 	 });
         }
     }
}
</script>

<style scoped>
label.Toggle-label{
     background-color: silver;
}
</style>
