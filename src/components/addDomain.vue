<template>
<navComponent />
        <div class="container">
            <!-- <h3>{{addDom}}</h3> -->
        <div class="row">
            <h3 class="mt-5 mb-3 text-center">Add Domain</h3>     
            <div class="col-md-6  mx-auto">  
                <form>
                    <div class="mb-3">
                        <input type="hidden" class="form-control">
                        <label for="" class="form-label">Name </label>
                        <input type="text" v-model="addDom.domain_name" class="form-control">
                    </div>
                    <button type="button" @click="addDomain"  class="btn btn-primary">Add Domain</button>
                </form>
            </div>
        </div>
    </div>

</template>
<script>
import navComponent from './navComponent.vue'
export default {
    name : 'addDomain',
    components : {
        navComponent
    },
    computed:{
        addDom(){
            return this.$store.state.domains.addDom
        }
    },
    methods:{
        addDomain(){
            this.$store.dispatch('domains/addDomainAct');
            this.$store.state.domains.addDom.domain_name = '';
            this.$router.push('/')
        }
    }
}
</script>