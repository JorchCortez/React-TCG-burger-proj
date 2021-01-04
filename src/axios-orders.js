import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-tcg-fb-default-rtdb.firebaseio.com/'
})

export default instance;
