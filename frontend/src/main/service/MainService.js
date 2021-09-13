import axios from 'axios';

export function test(){
    return axios({
        method: 'GET',
        url: `/common/test`
    });
}