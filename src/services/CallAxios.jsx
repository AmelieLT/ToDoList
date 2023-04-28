import axios from 'axios';


const CallAxios = () => {
    let url = "http://localhost:5000/activities";
    
    const get = async () => {
        const res = await axios.get(url);
        return res;
        
    };

    const trash = async (id) => {
        let urlActivity = `${url}/${id}`;
        const res = await axios.delete(urlActivity);
        return res;
    };

    const submit = async (data) => {
        const res = await axios.post(url, data);
        return res;
    };

    const update = async (data) => {
        let urlID = `${url}/${data.id}`;
        const res = await axios.put(urlID, data);
        return res;
    };
 
    return {
        get,
        trash,
        submit,
        update,
        url
    };
}

export default CallAxios