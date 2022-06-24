import style from './ItemCard.module.scss'
import Image from "next/image"
import BidCooldown from "components/item/BidCooldown"
import Price from "components/item/ItemPrice"
import { Fragment, memo, useRef } from 'react'

const ItemCard = memo(({ item = {} }) => {
    console.log('re render item_row', item && item.id);
    const refPrice = useRef()
    const glowing = useRef()
    const onUpdate = () => {
        refPrice.current.increasePrice()
        glowing.current.classList.add('glowing')
        setTimeout(() => {
            glowing.current && glowing.current.classList.remove('glowing')
        }, 2000)
    }
    return (
        <div className={style['item-wraper']}>
            {!item ?
                <Fragment>
                    <div className='item__top' />
                    <div className='item__bottom' />
                </Fragment>
                :
                <Fragment>
                    <div className='item__top'>
                        <div className="item__name">{item.name}</div>
                        <div className="item__image">
                            {item.src && <Image src={item.src} width={175} height={112} layout='responsive'></Image>}
                        </div>
                    </div>

                    <div className='item__bottom'>
                        <div style={{ flex: 1 }} ref={glowing}>
                            {item.canBid ?
                                <Fragment>
                                    <Price price={item.price} ref={refPrice}></Price>
                                    <div className="item__bid-duration">
                                        {item.user}
                                    </div>
                                </Fragment>
                                :
                                <Fragment>
                                    <div className="item__bid-time">
                                        {item.bidBeginAt}
                                    </div>
                                    <div className="item__bid-duration">
                                        {item.bidDuration}
                                    </div>
                                </Fragment>
                            }
                            <div className="item__bid-cooldown">
                                <BidCooldown cooldown={item.bidCooldown} onUpdate={onUpdate}></BidCooldown>
                            </div>
                        </div>
                        <div className={`item__button ${item.canBid ? 'can-bid' : ''}`}>
                            <div>
                                {item.canBid ? "BID NOW" : "STARTING SOON"}
                            </div>
                        </div>
                        <div className="item__buy-now">
                            <div>
                                {item.buyNow}
                            </div>
                        </div>
                    </div>
                </Fragment>
            }
            <style jsx>{`
                .item__top {
                    height: 152px;
                    background-color: white;
                    padding: 12px 6px 18px 6px;
                }

                .item__bottom {
                    height: 152px;
                    display: flex;
                    flex-flow: column;
                    background-image: linear-gradient(rgb(221, 221, 221), rgb(254, 254, 254));
                }
                .glowing {
                    animation-name: custom;
                    animation-duration: 1s;
                }
                
                @keyframes custom {
                    0% {
                        background-color: linear-gradient(rgb(221, 221, 221), rgb(254, 254, 254));
                    }
                    10% {
                        background-color: #f99e00;
                    }
                    100% {
                        background-color: linear-gradient(rgb(221, 221, 221), rgb(254, 254, 254));
                    }
                }
            `}</style>
        </div >
    )
})
export default ItemCard
