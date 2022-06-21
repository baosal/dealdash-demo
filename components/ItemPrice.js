import { forwardRef, useImperativeHandle, useState } from "react";

export default forwardRef(({ price }, ref) => {
    const [currentPrice, setPrice] = useState(price)
    const increasePrice = () => { 
        setPrice(currentPrice + 1) 
    }
    useImperativeHandle(ref, () => ({
        increasePrice
    }));
    return <div className="item__bid-price">
        ${currentPrice}
    </div>
})