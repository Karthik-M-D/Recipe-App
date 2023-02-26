import { useState, useEffect } from "react";
export const Ex = () => {
    const [rand,setRand] = useState([]);

    useEffect(()=>{
        getPopular();
    },[]);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e64f60b88bed4b588e893d84dac4bcda&query=cake`);
        const data = await api.json();
        setRand(data.results)
    }


    return(
        <div>
            {rand.map((rec)=>{
                return (
                    <p>{rec.title}</p>
                )
            })}
        </div>
    )
}