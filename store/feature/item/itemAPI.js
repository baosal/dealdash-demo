import { maxColdown } from 'const'
import { filter } from 'lodash'

const userNames = ["chief1154", "Darfresal", "Dmula7", "April", "kballs", "grantdyer12", "nicknevan1991"];
const itemImg = ['/1.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg', '/7.jpg', '/8.jpg', '/9.jpg', '/10.jpg', '/2.jpg',]

const item =
{
    name: '35 Bids + $50 Walmart Gift Card!',
    src: '/coffemachine.jpg',
    bidBeginAt: 'Today at 1:42 AM',
    bidDuration: 'Bid during last 10 seconds.',
    bidCooldown: maxColdown,
    buyNow: 'Buy it now for $1,1750',
    price: 32,
}


const items = [...(Array(60).keys())].map(id => {
    const randomName = Math.floor(Math.random() * userNames.length);
    const randomImg = Math.floor(Math.random() * userNames.length);
    const canBid = [1, 2, 6, 18, 9, 45, 27, 12, 57].includes(id)
    return {
        ...item,
        id: id + 1,
        user: userNames[randomName],
        src: itemImg[randomImg],
        canBid,
        bidCooldown: canBid ? (maxColdown - id) : 12345,
    }
})

const fetchData = (ids) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = filter(items, (item) => ids.includes(item.id))
            resolve(result)
        }, 1000);
    })
}

export default fetchData