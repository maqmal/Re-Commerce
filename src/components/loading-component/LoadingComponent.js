import React, { useState } from "react";
import LoadingIcon from './LoadingIcon';

const LoadingComponent = ({ imageUrl, style }) => {
    const [loading, setLoading] = useState(true);
    const imageLoaded = async () => {
        // await new Promise((r) => setTimeout(r, 3000));
        setLoading((loading) => !loading);
    }
    return (
        <div>
            <div style={{ display: loading ? "block" : "none" }}>
                <div>
                    <LoadingIcon />
                </div>
            </div>
            <div style={{ display: loading ? "none" : "block" }}>
                <img src={imageUrl} alt='' onLoad={imageLoaded} style={style} />
            </div>
        </div>
    )
}

export default LoadingComponent;