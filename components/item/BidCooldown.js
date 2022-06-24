import moment from "moment"
import { Fragment, useEffect, useState } from "react"
import {maxColdown} from 'const'

export default ({ cooldown, onUpdate }) => {
    const [currentCooldown, setCooldown] = useState(cooldown)
    useEffect(() => {
        const intervalEvent = setInterval(() => {
            if (currentCooldown == 0) {
                setCooldown(maxColdown)
                onUpdate()
            } else {
                setCooldown(currentCooldown - 1)
            }
        }, 1000)
        return () => {
            clearInterval(intervalEvent)
        }
    }, [currentCooldown])
    return (
        <Fragment>
            {moment.utc(currentCooldown * 1000).format('HH:mm:ss')}
        </Fragment>
    )
}