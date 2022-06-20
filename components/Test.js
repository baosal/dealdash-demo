import React from "react";
import { some } from 'lodash';
const areEqual = (x, y) => {
    return true
};

const Test = ({items}) => {
    console.log('re-render', items[0], items[1]);
    return (
        <div>
            {items.map(item => item.name)}
        </div>
    )
}

export default React.memo(Test, areEqual)