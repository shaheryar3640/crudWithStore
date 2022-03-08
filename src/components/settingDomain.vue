<template>
    <navComponent :id="sel" />
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-8 mx-auto mt-5">
                <div class=" col-md-4 mb-5">
                    <select class="form-control" v-model="sel" v-on:change="change">
                        <option  v-for="getdomain in  getDomain" v-bind:key="getdomain.id" v-bind:value="getdomain.id" >{{getdomain.domain_name}}</option>    
                    </select>
                </div>
                <table class="table table-hover mt-5">
                        <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Action</th>
                                </tr>
                        </thead>
                        <tbody>
                            
                                <tr >
                                    <th scope="row">1</th>
                                    <td>{{secretKey.student.student_name}}</td>
                                    <td>
                                        {{secretKey.domain_name}}
                                        <!-- <router-link :to="'/update/'+domain.id"  class="btn btn-primary btn-sm">Edit</router-link> &nbsp;&nbsp; -->
                                        <!-- <button type="submit" v-on:click="deleteData(domain.id)" class="btn btn-danger btn-sm">Delete</button> -->
                                       
                                    </td>
                                </tr>
                        </tbody>
                   </table>
            </div>
        </div>
    </div>
</template>
<script>
import navComponent from './navComponent.vue'
import {mapGetters} from 'vuex'
export default {
    name : 'settingDomain',
    components : {
        navComponent
    },
    data(){
        return {
            sel:this.$route.params.id,
            tdata:[],
            name:'',
            selectedClass:''
        }
    },
    computed:{
        
            ...mapGetters('domains',['getDomain']),
            secretKey(){
                return this.getDomain.find(v => v.id == this.$route.params.id)
            }

        
    },
    methods:{
        change(){
            // alert("hi" + this.sel)
            this.$router.push('/setting/'+this.sel)
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
