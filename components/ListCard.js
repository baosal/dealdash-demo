import React, { useRef, useState, useEffect, useMemo } from 'react'
import ItemCard from 'components/ItemCard'
import RowItems from 'components/RowItems'
import style from 'css/ListCard.module.scss'
import { } from 'react'
import getMockData from 'components/mockupItems'
import { throttle } from 'lodash'
const maxItem = 120

const calculateItemsPerRow = () => {
    // console.log('on resize');
    if (!window) {
        return 6
    }
    const windowWidth = window.outerWidth
    if (windowWidth >= 1160) {
        return 6
    }
    if (windowWidth >= 966) {
        return 5
    }
    return 4
}

const ListCard = React.memo(() => {
    const [items, setItems] = useState([])
    const scrollEl = useRef()
    const [itemsPerRow, setItemsPerRow] = React.useState(6)
    const numberRows = maxItem / itemsPerRow
    useEffect(() => {
        const debouncedHandleResize = throttle(() => {
            itemsPerRow = calculateItemsPerRow()
            setItemsPerRow(itemsPerRow)
        }, 300)
        window.addEventListener('resize', debouncedHandleResize)
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    })
    console.log('numberRows', numberRows, maxItem, itemsPerRow);
    return (
        <div className={style.wraper} ref={scrollEl}>
            <div style={{ position: 'fixed', left: '0', top: '0' }}>{items.length}</div>
            {[...Array(numberRows)].map((elementInArray, index) => (
                <RowItems itemsPerRow={itemsPerRow} key={`${index}_${itemsPerRow}`} rowIndex={index} />
            ))}
        </div>
    )
})

export default ListCard