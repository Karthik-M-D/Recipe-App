import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./App.css";

export const Search_box = () => {
    const [recipe,setRecipe] = useState([]);
    const [search,setSearch] = useState("");
    const [query,setQuery] = useState("cake");
    
    useEffect(()=>{
        getRecipes();
      },[query]);


      const getRecipes = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e64f60b88bed4b588e893d84dac4bcda&query=${query}`);
        const data = await api.json();
        setRecipe(data.results)
    }

    const changetext = (event) => {
        setSearch(event.target.value);
    }

    const display = (e) => {
        e.preventDefault();
        setQuery(search);
    }

    return (
        <>
        <Header/>
        <div className="container">
            <form onSubmit={display} className="formdiv">
                <input type="text" onChange={changetext} value={search} placeholder="cake"></input>
                <button type="submit">Search</button>
            </form>
            <div className="recipes">
                {recipe?.map((rec)=>{
                    return (
                        <div key={rec.id} className="recipe_detail">
                            <Link to={'/' + rec.id} className="link_contain">
                                <img src={rec.image} alt="Not found"/>
                                <h1 className="recipe_title">{rec.title}</h1>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
        <Footer/>
        </>
    )
}