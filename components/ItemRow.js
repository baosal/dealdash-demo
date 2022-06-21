import { memo, useEffect, useState, useRef, useMemo } from 'react'
import ItemCard from 'components/ItemCard'
import getMockData from 'components/mockupItems'
import { throttle } from 'lodash'

const RowItems = memo(({ itemsPerRow = 6, rowIndex }) => {
    const scrollEl = useRef()
    const [items, setItems] = useState(new Array(itemsPerRow).fill(null))
    const [isDataFetched, setisDataFetched] = useState(false)
    const fetchData = async () => {
        setisDataFetched(true)
        const data = await getMockData(items.length, rowIndex)
        setItems(data)
    }
    function checkAndFetchData() {
        var rect = scrollEl.current.getBoundingClientRect();
        var elemTopToWindowTop = rect.top;
        var elemBottomToWindowTop = rect.bottom;

        // Only completely visible elements return true:
        // const isVisible = (elemTopToWindowTop >= 0) && (elemBottomToWindowTop <= window.innerHeight);

        // Partially visible elements return true:
        const isVisible = elemBottomToWindowTop >= 0 && elemTopToWindowTop < window.innerHeight;

        if (isVisible) {
            fetchData()
        }
    }
    useEffect(() => {
        if (isDataFetched) return
        checkAndFetchData()
        const throttleCheckAndFetchData = throttle(checkAndFetchData, 100)
        window.addEventListener('scroll', throttleCheckAndFetchData);
        return _ => {
            window.removeEventListener('scroll', throttleCheckAndFetchData);
        }
    }, [isDataFetched])
    return (
        <div ref={scrollEl} className='row-items'>
            {items.map((item, index) =>
                <ItemCard item={item} key={index}></ItemCard>
            )}
            <style jsx>{`
                .row-items {
                    display: flex;
                    justify-content: space-between;
                }
            `}</style>
        </div >

    )
})

export default RowItems
