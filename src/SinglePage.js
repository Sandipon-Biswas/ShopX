import React from 'react'
import "./App.css"
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import data from './data'
const SinglePage = () => {
    const {id} =useParams();
    const foundBlog = data.filter((detail) => detail.id == id);
    const { price,title,description,image,rating,category } = foundBlog[0] ;
    return (
        <div className="bg-dark text-light py-5 ">
            <div className="text-center">
            <NavLink className="btn btn-outline-info mb-3 " to="/home" > Back To HomePage </NavLink>
            </div>
            <div className="container">
                <div className="text-center">
                    <img src={image} alt=""/>
                    <h4 className="text-info mt-2  " ><p>Price:$ {price}</p>  </h4>
                    <h6 className="text-success px-4 mt-2 d-flex justify-content-between " ><p>Rating: {rating.rate} ⭐⭐⭐⭐⭐ </p> <p>Category : {category}</p> <p>count : {rating.count}  </p> </h6>
                </div>
                <h2  className="text-info p-3  " > {title} </h2>
                <p> {description} </p>
                <NavLink className="btn btn-sm btn-outline-info mb-3 " to="/home" > Back To HomePage </NavLink>
            </div>
        </div>
    )
}

export default SinglePage
