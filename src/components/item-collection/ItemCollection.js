import React from "react";
import './ItemCollection.scss';
import LoadingComponent from "../loading-component/LoadingComponent";

const style = {
    width: '100%',
    height:'auto',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom: '5px'
}
const ItemCollection = ({ id, name, imageUrl, price }) => {
    return (
        <div className="item-collection">
            {/* <div className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}/> */}
            <LoadingComponent imageUrl={imageUrl} style={style}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}$</span>
            </div>
        </div>
    )
}

export default ItemCollection;