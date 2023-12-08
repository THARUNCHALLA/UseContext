import { useContext } from "react"

import UserDetails from "../../Context/LanguageContext"

const Another = ()=>{
    const data = useContext(UserDetails)
    const {Email,password,starting} = data
    return(
        <>
        {starting && <div>
            <h1>Email: {Email}</h1>
            <h1>password: {password}</h1>
        </div>}
        </>
    )
}

export default Another