import {useState } from "react"
import UserDetails  from "../../Context/LanguageContext"
import Another from "../Another"

import "./index.css"

const Login=()=>{
    const [text,setText]=useState("")
    const [pass,setPassword]=useState("")
    const [Data,setlist]=useState({
        Email:"",
        password:"",
        starting:false
    })
    const [starting,setStarting] = useState()

    const onName=(e)=>{
        setText(e.target.value)
    }


    const onPassword=(e)=>{
        setPassword(e.target.value)
    }

   
    const onForm=(e)=>{
        e.preventDefault()
        if (text!=="" && pass!==""){
        const Data={
            Email:text,
            password:pass,
            starting:true
        }
        setlist(Data) 
        setStarting(false)
        setText("")
        setPassword("")
    }   
    else{
        const Data={
            Email:" ",
            password:" ",
            starting:false
        }
        setlist(Data)
        setStarting(true)
    }
    }
    return(
    <div>
      <h1>Details</h1>
      <UserDetails.Provider value={Data}>
      <form className="Form" onSubmit={onForm}>
        <input type="text" placeholder="type" onChange={onName} value={text}/>
        <input type="password" placeholder="type" onChange={onPassword} value={pass}/>
        <button type="submit">Submit</button>
        {starting&&<p className="Danger">Enter Valid Inputs</p>}
      </form>
      <Another/>
      </UserDetails.Provider>
      </div>
      )
    }

export default Login


