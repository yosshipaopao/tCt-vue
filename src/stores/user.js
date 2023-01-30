import { defineStore } from 'pinia'
export const useUsersSotre = defineStore('users', {
    state:()=>({
        islogined:false,
        name:null,
        email:null,
        idtoken:null,
        pic:null,
        uid:null,
        token:null,
    }),
    actions:{
        addUser(data){
            if(data.islogined){
                this.islogined=data.islogined;
                this.name=data.name;
                this.email=data.email;
                this.idtoken=data.idtoken;
                this.pic=data.pic;
                this.uid=data.uid;
            }else{
                this.islogined=data.islogined;
                this.name=null;
                this.email=null;
                this.idtoken=null;
                this.pic=null;
                this.uid=null;
            }
        },
        update_token(token){
            this.token=token;
        }
    }

});
