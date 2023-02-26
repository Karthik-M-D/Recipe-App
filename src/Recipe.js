import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css"
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./App.css";
import { Nutritions } from "./Nutritions";


export const Recipe = (props) => {
    let params = useParams();
    const [details,setDetails] = useState({});
    const [btn,setBtn] = useState("About");

    const fetchDetails = async() => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=e64f60b88bed4b588e893d84dac4bcda`);
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        fetchDetails();
    },[params.name]);

    return (      
        <>
        <div className="container-whole">
            <Header/>
            <div className="details-container">
                <div className="detail-head">
                    <div className="d-box">
                        <h2>{details.title}</h2>
                        <img src={details.image} alt="Not found" width="400" height="3  00"/>
                    </div>
                </div>
                <div className="details-buttons">
                    <div className="btn">
                        <button onClick={()=>{setBtn("About")}}>About</button>
                        <button onClick={()=>{setBtn("Ingredients")}}>Ingredients</button>
                        <button onClick={()=>{setBtn("Instructions")}}>Instructions</button>
                        <button onClick={()=>{setBtn("Nutritional Facts")}}>Nutritional Facts</button>
                    </div>
                    <div>
                        {(btn==="About")?(<><h3 className="button-heading">About</h3><h3 dangerouslySetInnerHTML={{__html: details.summary}} className="button-content"></h3></>):""}
                        {(btn==="Ingredients")?
                        (<>
                        <h3 className="button-heading">Ingredients</h3>
                        <ul>
                            {details.extendedIngredients && details.extendedIngredients.map((ing)=>(
                                <li key={ing.id}>{ing.original}</li>
                            ))}
                        </ul></>):""}
                        {(btn==="Instructions")?(<><h3 className="button-heading">Instructions</h3><h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3></>):""}
                        {(btn==="Nutritional Facts")?(<><h3 className="button-heading">Nutritional Facts</h3>
                        <Nutritions/>
                        </>):""}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}