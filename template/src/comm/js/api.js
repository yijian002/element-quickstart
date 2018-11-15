import axios from 'axios';

const BASE = '';

let errorMessage = (error) => {
    return { code: 500, message: error.message };
}

export default {
    get(url, params) {
        return axios.get(BASE + url, { params: params || {} }).then(res => res.data)
            .catch(errorMessage);
    },
    post(url, params) {
        return axios.post(BASE + url, params || {}).then(res => res.data)
            .catch(errorMessage);
    },
    put(url, params) {
        return axios.put(BASE + url, params || {}).then(res => res.data)
            .catch(errorMessage);
    },
    del(url, params) {
        return axios.delete(BASE + url, { params: params || {} }).then(res => res.data)
            .catch(errorMessage);
    },
    delete(url, params) {
        return this.del(url, params);
    },
    gourl(url, params) {
        let opts = [];
        for (let key in params) {
            opts.push(key + '=' + params[key]);
        }
        
        window.location.href = BASE + url + '?' + opts.join('&');
    }
};