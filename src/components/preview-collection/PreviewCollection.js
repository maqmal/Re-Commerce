import React from "react";
import './PreviewCollection.scss';
import ItemCollection from "../item-collection/ItemCollection";

const PreviewCollection = ({ title, items }) => {
    return (
        <div className="preview-item">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="item">
                {
                    items
                    .filter((item, index) => index<4)
                    .map(({id, ...otherCollectionProps})=>
                            <ItemCollection key={id} {...otherCollectionProps} />
                        )
                }
            </div>
        </div>
    )
}

export default PreviewCollection;