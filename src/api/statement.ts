import axios from '../app/axiosClient';

export const fetch = async () => {
    const response = await axios.get('/statements');
    return (response.data||[]);
}
