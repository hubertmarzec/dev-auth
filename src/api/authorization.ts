import axios from '../app/axiosClient';

export const getUser = async () => {
    const response = await axios.get('/user');
    return (response.data||[]);
}

export const getToken = async (code:string) => {
    const response = await axios.post(`/token/${code}`);
    return (response.data);
}
