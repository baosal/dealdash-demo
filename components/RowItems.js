import { memo, useEffect, useState, useRef, useMemo } from 'react'
import ItemCard from 'components/ItemCard'
import getMockData from 'components/mockupItems'
import { throttle } from 'lodash'

const RowItems = memo(({ itemsPerRow = 6, rowIndex }) => {
    // console.log('re render', item.id);
    const scrollEl = useRef()
    const [items, setItems] = useState(new Array(itemsPerRow).fill(null))
    const [isDataFetched, setisDataFetched] = useState(false)
    const fetchData = () => {
        getMockData(items.length, rowIndex).then((data) => {
            setisDataFetched(true)
            setItems(data)
        })
    }
    // function handleScroll() {
    //     const rect = scrollEl.current.getBoundingClientRect()
    //     const atBottom = rect.bottom - 50 < (window.innerHeight || document.documentElement.clientHeight)
    //     console.log('diferrent to bottom', height)
    //     if (height < 0) {
    //         fetchData()
    //     }
    // }
    function checkAndFetchData() {
        // console.log('checking');
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
        checkAndFetchData()
        if (!isDataFetched) {
            const throttleCheckAndFetchData = throttle(checkAndFetchData, 100)
            window.addEventListener('scroll', throttleCheckAndFetchData);
            return _ => {
                window.removeEventListener('scroll', throttleCheckAndFetchData);
            }
        }
    }, [])
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
