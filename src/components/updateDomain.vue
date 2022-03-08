<template>
<navComponent />
    <div class="container">
        <!-- <h1>{{secretKey}}</h1> -->
        <div class="row">
            <h3 class="mt-5 mb-3 text-center">Update Domain</h3>     
            <div class="col-md-6  mx-auto">  
                <form>
                    <div class="mb-3">
                        <input type="hidden" class="form-control" v-model="secretKey.id" id="">
                        <label for="" class="form-label">Name </label>
                        <input type="text" class="form-control" v-model="secretKey.domain_name"  id="">
                    </div>
                    <button type="button" @click="updateDomain" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from 'axios'
// import {mapState} from 'vuex'
import navComponent from './navComponent.vue'
import {     mapGetters} from 'vuex'
export default {
    name : 'addC',
    components :{
        navComponent
    },
    computed: {
            //a computed getter
            
            
            // ...mapState('domains', ['domain']),
            // forId(){
            //     return this.$route.params.id;
            // },
            ...mapGetters('domains',['getDomain']),
            // domain(){
            //     return this.$store.state.domains.domain
            // },
            // ...mapGetters('editDom', [this.$route.params.id])
            secretKey(){
                return this.getDomain.find(v => v.id == this.$route.params.id)
            }
    },
    methods:{
        updateDomain(){
            // console.log("Hi"+ this.id)
            this.$store.dispatch('domains/updateDomainAct', this.secretKey)
            this.$router.push('/')
        }
    },

    
    
    mounted(){
        this.$store.dispatch('domains/setDomainAct')
        // this.$store.dispatch('domains/editDomainAct', this.forId)
        // this.$store.dispatch('domain')
        // this.$store.dispatch('domains/editDomainAct')
        //  this.getData();
        let user = localStorage.getItem('token')
        if(!user){
            this.$router.push('/login')
        }
    }
}  
</script>