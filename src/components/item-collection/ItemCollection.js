import React from "react";
import './ItemCollection.scss';

const ItemCollection = ({ id, name, imageUrl, price }) => {
    return (
        <div className="item-collection">
            <div className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="name">{price}$</span>
            </div>
        </div>
    )
}

export default ItemCollection;