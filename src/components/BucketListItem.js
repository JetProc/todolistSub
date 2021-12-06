import React from 'react';
import "./BucketListItem.css"

const BucketListItem = ({list, onCheckToggle}) => {
    const {id, details, isDone} = list;

    return(
        <div className="BucketListItem">
            <div className={`content ${isDone ? "checked" : ""}`} onClick={()=>{
                onCheckToggle(id);
            }}>{details}</div>
        </div>
    );
}

export default BucketListItem;