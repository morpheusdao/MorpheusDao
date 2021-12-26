import React from "react";
import "./background.scss";
import image from "../../../../assets/icons/image.png";

import BlobsCenter from "../../../../assets/icons/landing-blobs-center.png";

function Background() {
    return (
        <div className="landing-background">
            <div className="landing-background-blobs-top">
                <img alt="" src={image} />
            </div>
        </div>
    );
}

export default Background;
