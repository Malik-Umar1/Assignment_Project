import React from "react";
import about from '../imgs/about.jpg'

const AboutUs = ()=>{
    return(
        <div className="about-container flex"> 
 <div className="img-container">
            <img src={about}></img>
        </div>

        <div className="content">
            <h2>About Us</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>

            <div className="btn"><a href="#">Read More</a></div>
        </div>
        </div>
       
    )
}

export default AboutUs;