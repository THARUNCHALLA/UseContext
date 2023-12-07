import "./index.css"

const Another = (props) =>{
    const {user} = props
    const {dateModified,idDrink,strDrink,
        strCategory,
        strAlcoholic,
        strDrinkThumb,
        strGlass,
        strCreativeCommonsConfirmed} = user
    return(
        <li>
            <img src={strDrinkThumb} alt={strDrinkThumb} className="DrinkImage"/>
            <div>
            <h1 className="name">{strCategory}</h1> 
            <p className="name">Drink Name: {strDrink}</p>
           <p className="strGlass">{strGlass}</p>
           <p className="strGlass">Drink/Not :{strCreativeCommonsConfirmed}</p>
           <p className="strGlass">Type: {strAlcoholic}</p>
           <p className="strGlass">No: {idDrink}</p>
           <p className="strGlass">Date: {dateModified}</p>
            </div>
        </li>
    )
}

export default Another