import { memo, useEffect, useState, useRef, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { throttle } from 'lodash'

import {
    selectItems,
    fetchItem,
} from 'store/feature/item/ItemSlice'

import ItemCard from 'components/item/ItemCard'
const RowItems = memo(({ itemsPerRow = 6, rowIndex }) => {
    const scrollEl = useRef()
    const dispatch = useDispatch()
    const [isDataFetched, setisDataFetched] = useState(false)
    const startId = (rowIndex - 1) * itemsPerRow + 1
    const endId = rowIndex * itemsPerRow
    const itemIds = useMemo(() => Array(endId - startId + 1).fill().map((_, idx) => startId + idx), [itemsPerRow, rowIndex])
    const items = useSelector(selectItems(itemIds))
    const fetchData = async () => {
        setisDataFetched(true)
        dispatch(fetchItem(itemIds))
    }
    function checkAndFetchData() {
        var rect = scrollEl.current.getBoundingClientRect();
        var elemTopToWindowTop = rect.top;
        var elemBottomToWindowTop = rect.bottom;

        // const isVisible = (elemTopToWindowTop >= 0) && (elemBottomToWindowTop <= window.innerHeight);
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
