import axios from "axios";
import Cookies from "js-cookie";
const useAuth=()=>{

   const token= Cookies.get("token");
   console.log(token);
 
    axios.get("http://localhost:8000/api/profile",{headers:{
        Authorization:`Bearer ${token}`
    }}).then(res=>{
      console.log(res);
        if(res.status===200){
      return true;
         
        }
    }).catch(err=> {
     return false}).finally(()=> true)


}
export default useAuth;