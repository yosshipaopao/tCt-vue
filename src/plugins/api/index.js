import axios from 'axios'
export default {
    async user_exists(uid) {
        let params = new URLSearchParams();
        params.append('uid', uid);
        const res = await axios.post('https://tct.yosshipaopao.com/api/user_exists', params);
        return res.data.status
    },
    async add_user(token) {
        let params = new URLSearchParams();
        params.append('idtoken', token);
        const res = await axios.post('https://tct.yosshipaopao.com/api/add_user', params);
        return res.data
    }
}