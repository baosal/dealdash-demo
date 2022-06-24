import React, { useRef, useEffect } from 'react'
import ItemRow from 'components/item/ItemRow'
import style from './ItemContainer.module.scss'
import { throttle } from 'lodash'

const maxItem = 6

const calculateItemsPerRow = () => {
    if (!window) {
        return 6
    }
    const windowWidth = window.outerWidth
    if (windowWidth >= 1159) {
        return 6
    }
    if (windowWidth >= 965) {
        return 5
    }
    return 4
}
const ListCard = React.memo(() => {
    const scrollEl = useRef()
    const [itemsPerRow, setItemsPerRow] = React.useState(6)
    const numberRows = Math.max(1, Math.round(maxItem / itemsPerRow))
    useEffect(() => {
        const debouncedHandleResize = throttle(() => {
            itemsPerRow = calculateItemsPerRow()
            setItemsPerRow(itemsPerRow)
        }, 300)
        window.addEventListener('resize', debouncedHandleResize)
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    }, [])
    return (
        <div className={style.wraper} ref={scrollEl}>
            {[...Array(numberRows)].map((elementInArray, index) => (
                <ItemRow itemsPerRow={itemsPerRow} key={`${index}_${itemsPerRow}`} rowIndex={index + 1} />
            ))}
        </div>
    )
})

export default ListCard