import React from "react";

const LikeimageHOC = (props) => {
    let{count, increaseCount} = props
    return(
        <>
            <button onClick={increaseCount}>Like Image HOC {count}</button>
        </>
    )
}

export default LikeimageHOC

