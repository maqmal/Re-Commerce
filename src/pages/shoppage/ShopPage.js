import React from "react";
import SHOP_DATA from "./ShopData";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";

class ShopPage extends React.Component{
    constructor(){
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        return(
            <div className="shop-page">
                {
                    this.state.collections.map(({id, ...otherCollectionProps}) =>
                            <PreviewCollection key={id} {...otherCollectionProps} />
                        )
                }
            </div>
        )
    }
}

export default ShopPage;