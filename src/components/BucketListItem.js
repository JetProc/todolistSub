import React from 'react';
import "./BucketListItem.css"
const BucketListItem = ({list}) => {
    const {id, details, checked} = list;
    return(
        <div className="BucketListItem">
            <div className={`content ${checked ? "checked" : ""}`}>{details}</div>
        </div>
    );
}

export default BucketListItem;