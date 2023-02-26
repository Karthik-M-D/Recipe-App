import { useState, useEffect } from "react";
export const Popular = () => {
    const [pop,setPop] = useState([]);

    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=e64f60b88bed4b588e893d84dac4bcda&number=9`);
        const data = await api.json();
        setPop(data.recipes)
    }


    return(
        <div>
            {pop.map((rec)=>{
                return (
                    <p>{rec.title}</p>
                )
            })}
        </div>
    )
}