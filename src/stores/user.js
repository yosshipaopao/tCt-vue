import { defineStore } from 'pinia'
export const useUsersSotre = defineStore('users', {
    state:()=>({
        islogined:false,
        name:null,
        email:null,
        token:null,
        pic:null,
        uid:null,
    }),
    actions:{
        addUser(data){
            if(data.islogined){
                this.islogined=data.islogined;
                this.name=data.name;
                this.email=data.email;
                this.token=data.token;
                this.pic=data.pic;
                this.uid=data.uid;
            }else{
                this.islogined=data.islogined;
                this.name=null;
                this.email=null;
                this.token=null;
                this.pic=null;
                this.uid=null;
            }
        }
    }

});
