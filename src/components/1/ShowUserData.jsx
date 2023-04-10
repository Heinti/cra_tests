import { useSelector } from "react-redux"
import { selectUserData } from "../../redux/userForm/selectors"


const ShowUserData=()=>{
    const {name, email, password} = useSelector(selectUserData)
    // console.log(email)

    return(
        <div>
           
           {name  && (<p>твій чотенький кльовий нік: {name}</p>)} 
           {email  && (<p>твій чотенький кльовий меіл: {email}</p>)} 
           {password  && (<p>твій чотенький кльовий pass: {password}</p>)} 

      
            
        </div>
    )
}

export default ShowUserData;