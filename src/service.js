import axios from 'axios';

const service = (endPath,data)=>{
    return axios.post(`http://10.0.20.190:8056/api/${endPath}`,data)
}

export default service;