<template>
<navComponent />
    <div class="container mt-5">
        <div class="row">
            <!-- <h1>{{getDomain}}</h1> -->
            <div class="col-md-8 mx-auto mt-5">
                <router-link  :to="'/addDomain'" class="btn btn-primary mb-3">Add Domain</router-link>
                <table class="table table-hover">
                        <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                        </thead>
                        <tbody>
                            
                                <tr v-for="(domain, key) in getDomain" v-bind:key="key">
                                    <th scope="row">{{key+1}}</th>
                                    <td>{{domain.domain_name}}</td>
                                    <td>
                                        <router-link :to="'/update/'+domain.id"  class="btn btn-primary btn-sm">Edit</router-link> &nbsp;&nbsp;
                                        <button type="submit" v-on:click="deleteData(domain)" class="btn btn-danger btn-sm">Delete</button>
                                        <router-link :to="'/setting/'+domain.id"  class="btn btn-secondary btn-sm bt">Settings</router-link>
                                    </td>
                                </tr>
                        </tbody>
                   </table>
                   <!-- <Pagination :data="tdata" @pagination-change-page="getResults" /> -->
            </div>
        </div>
    </div>
</template>
<script>
import navComponent from './navComponent.vue'

    // import LaravelVuePagination from 'laravel-vue-pagination';
    import {     mapGetters} from 'vuex'
    export default {
  components: { navComponent },
        name : 'HelloC',
        // components: {
        //     // navComponent
        //     // 'Pagination': LaravelVuePagination
        // },
        computed: {
            ...mapGetters('domains',['getDomain'])

        },
        methods:{
            deleteData(domain){
                this.$store.dispatch('domains/deleteDomainAct', {domain:domain})
            }
        },
        mounted(){
            this.$store.dispatch('domains/setDomainAct')
            let user = localStorage.getItem('token')
            if(!user){
                this.$router.push('/login')
            }
        }
    }
</script>
<style scoped>
.bt{
    margin-left: 10px;
}
</style>
