<template>
    <div>
        <nav class="navbar navbar-expand-lg  navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <router-link :to="'/'" class="nav-link ">Home</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link :to="'/addDomain'" class="nav-link ">Add Domain</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link :to="'/setting/'+id" @click="cli"  class="nav-link">Settings</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link :to="'/about'" class="nav-link ">About</router-link>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" v-on:click="logout" href="#">Logout</a>
                        </li>   
                    </ul>
                </div>
            </div>
       </nav>
    </div>
    <!-- <mainComponent /> -->
</template>
<script>
// import mainComponent from './mainComponent.vue'
export default {
    name : 'navComponent',
    components : {
        // mainComponent
    },
    props:['id'],
    // data(){
    //     return {
    //         id : this.$route.params.id
    //     }
    // },
    methods:{
        cli(){
            if(this.id == undefined){
                alert('Please go to settings page')
                this.$router.push('/')
            }
        },
        logout(){
        localStorage.clear();
        this.$router.push('/login')
        },
        home(){
        this.$router.push('/')
        }
    },
    mounted(){
        let user = localStorage.getItem('token')
        if(!user){
            this.$router.push('/login')
        }
    }
}
</script>
<style scoped>
.router-link-active{
    background-color: #bbb;
    color: black;
}
</style>