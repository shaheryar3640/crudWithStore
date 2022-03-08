<template>
    <div class="container">
        <div class="row">
            <h3 class="mt-5 mb-3 text-center">Student Data</h3>       
            <div class="col-md-6  mx-auto">  
                <form >
                    <div class="mb-3">
                        <label for="" class="form-label">Email</label>
                        <input type="email" v-model="email" class="form-control" id="" aria-describedby="emailHelp">
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Password</label>
                        <input type="password" v-model="password" class="form-control" id="">
                    </div>
                    <button type="button" @click="login" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name : 'LoginComponent',
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        async login(){
            let res =  await axios.post('http://127.0.0.1:8000/api/login',{
                email:this.email,
                password:this.password
            })
            if(res){
                console.log()
                localStorage.setItem('token',res.data.success.token)
                this.$router.push('/')
            }
            
        }
    },
    mounted(){
        let user = localStorage.getItem('token')
        if(user){
            this.$router.push('/')
        }
    }
}
</script>