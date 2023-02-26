import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Nutritions = () => {
    let params = useParams();
    const [nutr_details,setNutr_details] = useState({});

    const fetchDetails = async() => {
        const data1 = await fetch(`https://api.spoonacular.com/recipes/${params.name}/nutritionWidget.json?apiKey=e64f60b88bed4b588e893d84dac4bcda`);
        const detailData1 = await data1.json();
        setNutr_details(detailData1);
    }

    useEffect(() => {
        fetchDetails();
    },[params.name]);

    return (
        // <ul>
        //     <li>Calories : {nutr_details.protein}</li>
            
        // </ul>
        <>
            <ul>
                {nutr_details.bad && nutr_details.bad.map((ing)=>(
                    <li key={ing.id}>{ing.title} : {ing.amount}</li>
                ))}
            </ul>
        </>
    )
}