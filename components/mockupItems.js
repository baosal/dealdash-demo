import { maxColdown } from 'const'

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


const userNames = ["chief1154", "Darfresal", "Dmula7", "April", "kballs", "grantdyer12", "nicknevan1991"];
const itemImg = ['/1.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg', '/7.jpg', '/8.jpg', '/9.jpg', '/10.jpg', '/2.jpg',]
export default (itemCount, rowIndex = 1) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const items = [...(Array(itemCount).keys())].map(id => {
                const randomName = Math.floor(Math.random() * userNames.length);
                const randomImg = Math.floor(Math.random() * userNames.length);
                const canBid = [1, 2, 6, 8, 9].includes(id + rowIndex)
                return {
                    ...item,
                    id: id + '_' + String(rowIndex),
                    user: userNames[randomName],
                    src: itemImg[randomImg],
                    canBid,
                    bidCooldown: canBid ? (maxColdown - id) : 12345,
                }
            })
            resolve(items)
        }, 1000);
    })
}
