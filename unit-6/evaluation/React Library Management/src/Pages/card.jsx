import React from 'react';
import {Link} from "react-router-dom";

function Card(prop){
return (
    <Link to={`/bookdetailspage/${prop.data.id}`}>
        <div>
            <Navbar />
            <div className="bookContainer" >
                <h5 className="title">Title: {prop.data.title}</h5>
                <div className="price">Price: {prop.data.price}</div>
                <div className="section">Section: {prop.data.section}</div>
                <div className="author">Author: {prop.data.author}</div>
                <div className="description">Desc: {prop.data.description}</div>
                <div className="isbn">ISBN Number: {prop.data.isbn}</div>
            </div>
        </div>
    </Link>
)
}

export default Card;