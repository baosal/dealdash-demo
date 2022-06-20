import style from 'css/ItemCard.module.scss'
import Image from "next/image"
import { Fragment, memo } from 'react'

const ItemCard = memo(({ item }) => {
    // console.log('re render', item.id);
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
                        <div className="item__bid-time">
                            {item.bidTime}
                        </div>
                        <div className="item__bid-duration">
                            {item.bidDuration}
                        </div>
                        <div className="item__bid-cooldown">
                            {item.bidCooldown}
                        </div>
                        <div className="item__button">
                            <div>
                                {item.bidButton}
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
            `}</style>
        </div >
    )
})

export default ItemCard
