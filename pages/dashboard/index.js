import Image from "next/image"
import style from 'components/Dashboard.module.scss'
import ItemContainer from 'components/item/ItemContainer'
import Header from 'components/Header'
import Pagination from 'components/Pagination'
import Footer from 'components/Footer';

export default (props) => {
    return <div className={style.container}>
        <div className="dashboard">
            <div id="logo">
                <Image layout="fill" src={'/dd_logo.webp'}></Image>
            </div>
            <Header></Header>
            <Image id="thumbnail" height={145} width={777} layout="responsive" src={'/Thumbnail.png'}></Image>
            <ItemContainer className="list-card" />
            <Pagination></Pagination>
        </div>
        <Footer></Footer>
    </div>
}