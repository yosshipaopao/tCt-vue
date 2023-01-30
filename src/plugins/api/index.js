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
        
    }
}