const item =
{
    name: '35 Bids + $50 Walmart Gift Card!',
    src: '/coffemachine.jpg',
    bidTime: 'Today at 1:42 AM',
    bidDuration: 'Bid during last 10 seconds.',
    bidCooldown: ' 00:26:22',
    bidButton: 'BID NOW',
    buyNow: 'Buy it now for $1,1750',
}




export default (itemCount, rowIndex = 1) =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            const items = [...(Array(itemCount).keys())].map(id =>
            {
                return {
                    id: id + String(rowIndex),
                    ...item
                }
            })
            resolve(items)
        }, 1000);
    })
}