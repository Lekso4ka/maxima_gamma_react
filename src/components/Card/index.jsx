import React from "react";

import {getRandom} from "../../utils/functions"

export default ({num}) => {
    const n = getRandom(1000, 100)
    return <div className="card">{(num !== undefined && num !== null) ? num : n}</div>
}