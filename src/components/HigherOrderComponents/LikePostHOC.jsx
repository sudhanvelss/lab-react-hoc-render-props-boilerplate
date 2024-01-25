import React from "react";

const LikePostHOC = (props) => {
    let{count, increaseCount} = props
    return(
        <>
            <button onClick={increaseCount}>Like Post HOC {count}</button>
        </>
    )
}

export default LikePostHOC

