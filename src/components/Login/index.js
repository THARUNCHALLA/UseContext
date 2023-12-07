import React,{ useState,useEffect } from "react"

import Loader from "react-loader-spinner"

import Another from "../Another"

import "./index.css"

const api={
    success:"SUCCESS",
    loading:"Loading",
    failure:"Failure"
}


const Login=()=>{
    const [Drinks,setDrinks] = useState([])
    const [search,setSearch] = useState("")
    const [notfound,setNotFound] = useState(false)
    const [API,SetApi] = useState("")

    const getCalls=async()=>{
        SetApi(api.loading)
        const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);  
        const response = await data.json();
        const {drinks}= response
        console.log(drinks)
        if(drinks===null){
            SetApi(api.failure)
            setNotFound(true)
        }
        else{    
        const UpdatedData = response.drinks.map((each)=>({
            dateModified:each.dateModified,
            idDrink:each.idDrink,
            strAlcohol:each.strAlcohol,
            strCategory:each.strCategory,
            strAlcoholic:each.strAlcoholic,
            strDrinkThumb:each.strDrinkThumb,
            strGlass:each.strGlass,
            strCreativeCommonsConfirmed:each.strCreativeCommonsConfirmed,
            strDrink:each.strDrink
        }))
        setDrinks(UpdatedData)
        SetApi(api.success)
    }
      
    }


    useEffect(()=>{
        getCalls()
    },[search])

    const searchChange = (e) =>{
       setSearch(e.target.value)
    }

    const loader=()=>{
        return(
            <div className="loader">
                <Loader type="TailSpin" color="blue" height={50} width={50} />
            </div>
        )
    }

    const successView=()=>{
        return(
            <ul>
                {Drinks.map(each=><Another user={each} key={each.idDrink}/>)}
            </ul>
        )
    }

    const failure=()=>{
        return(
            <div>
                {notfound && <p className="Data1">Data Not Found</p>} 
            </div>
        )
    }


    const final=()=>{
        switch(API){
            case api.success:
                return successView();
            case api.loading:
                return loader();    
            case api.failure:
                return failure()    
            default:
                return null    
        }
    }


return(
    <div>
        <form className="Form">
        <input type="search" placeholder="search something here"  onChange={searchChange}/>
        </form>
        {final()}
    </div>
)
}


export default Login


