import React from "react";

const FoodCard = ({ name, cuisine, image, url }) => {
    return (
        <div className="food-card">
            <div className="food-card-image">
                <img
                    src={image}
                    alt={`${cuisine} food`}
                    width="100%"
                    height="200"
                />
            </div>
            <h2>{name}</h2>
            <p>{cuisine}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <button className="view-menu-btn">View</button>
            </a>
        </div>
    )
}

export default FoodCard;
