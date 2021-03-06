import axios from "axios"
const baseUrl = "http://localhost:62567/api/"; 
export default {
    dCandidate (url = baseUrl+ 'dCandidate'){
        return {
            fetchAll:()=> axios.get(url), 
            fetchById: (id) => axios.get(url+id), 
            create: newRecord=> axios.post(url, newRecord), 
            update:(id, updateRecord) => axios.get(url+id, updateRecord), 
            delete : id => axios.delete(url+id)
        }
    }
}