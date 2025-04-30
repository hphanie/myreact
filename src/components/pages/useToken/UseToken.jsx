import { useState } from "react";
import { useNavigation } from "react-router-dom";

const useToken= ()=> {
    const getToken = ()=>{
        const token = localStorage.getItem("token");
        try {
            return json.parse(token);
        } catch (error) {
            return token
        }
    }
    const [token, setToken] = useState(getToken());
    return{token}
} 
export default useToken;