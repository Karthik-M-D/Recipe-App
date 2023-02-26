import React from "react";
import { Routes,Route } from "react-router-dom";
import { Recipe } from "./Recipe";
import { Search_box } from "./Search_box";

export const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Search_box/>}/>
            <Route path="/:name" element={<Recipe/>}/>
        </Routes>
    )
}