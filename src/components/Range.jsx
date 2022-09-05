import React, { useState } from "react";

const Range = () => {
    const [rangeval, setRangeval] = useState(null)
    return (
        <div>
        <input type={'range'} min={'0'} max={'5'} onChange={(event) => setRangeval(event.target.value)} value={rangeval}/>
        <h1 className="range">{rangeval}</h1>
        </div>
    )
}
export default Range;