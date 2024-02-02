import React from "react";
import tomatoes from '../imgs/tomatoes.png'
import salad from '../imgs/salad.png'
import meal from '../imgs/meal.png'
import corn from '../imgs/corn.png'
import supreme from '../imgs/supreme.png'
import soup from '../imgs/soup.png'
import Slider from "./Slider";



const Articles = () =>{
    return(
        <section className="card-container">
            <h1 className="article-heading">Latest Articles</h1>
           <Slider/>
        </section>
    )
}


export default Articles;