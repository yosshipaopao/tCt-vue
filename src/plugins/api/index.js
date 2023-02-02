import axios from 'axios'
export default {
    async user_exists(uid) {
        let params = new URLSearchParams();
        params.append('uid', uid);
        const res = await axios.post('https://tct.yosshipaopao.com/api/user_exists', params);
        return res.data.status
    },
    async add_user(uid,token) {
        let params = new URLSearchParams();
        params.append('uid', uid);
        params.append('idtoken', token);
        const res = await axios.post('https://tct.yosshipaopao.com/api/add_user', params);
        return res.data
    },
    async update_token(uid,token) {
        let params = new URLSearchParams();
        params.append('uid', uid);
        params.append('idtoken', token);
        const res = await axios.post('https://tct.yosshipaopao.com/api/update_token', params);
        return res.data
    },
    chat:{
        async sendchat(token,id,msg){
            let params = new URLSearchParams();
            params.append('token',token);
            params.append('chatid',id);
            params.append('msg',msg);
            const res= await axios.post('https://tct.yosshipaopao.com/api/chat/send');
            return res.data;
        },
        async getalldata(token){
            let params = new URLSearchParams();
            params.append('token',token);
            const res = await axios.post('https://tct.yosshipaopao.com/api/chat/getalldata');
            return res.data;
        },
        async getchat(token,id){
            let params = new URLSearchParams();
            params.append('token',token);
            params.append('id',id);
            const res = await axios.post('https://tct.yosshipaopao.com/api/chat/getchat');
            return res.data;
        }
    }
}