import axios from 'axios';

export default {
    colorImage: (image: string): string => {
        axios.get(`localhost:8000/colorize/${image}`)
            .then(data => {
                return data.data;
            })
            .catch(e => {
                alert(e)
            })
        
        return "";
    }
};