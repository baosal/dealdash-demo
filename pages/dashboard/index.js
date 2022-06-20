import { getSortedPostsData } from 'libs/posts';
import Image from "next/image"
import style from 'css/container.module.scss'
import ListCard from 'components/ListCard'
import Posts from 'components/Posts'
import Test from 'components/Test'
import { useState } from 'react';

export default (props) => {
    const [testData, setTestData] = useState([{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 },])
    // let testDataArray = []
    // for (let i = 0; i < testData.length; i += 2) {
    //     const chunk = testData.slice(i, i + 2);
    //     testDataArray.push(chunk)
    //     // do whatever
    // }
    return <div className={style.container}>
        <div className="dashboard">
            <img src="https://dealdashcompany.com/wp-content/uploads/2022/02/dd_logo_2.png" width="640" height="201" alt="DealDash" id="logo" data-height-percentage="88" data-actual-width="640" data-actual-height="201" />
            <Image id="thumbnail" height={145} width={777} layout="responsive" src={'/Thumbnail.png'}></Image>
            <div className="list-card">
                <ListCard />
                {/* <Posts allPostsData={props.allPostsData}></Posts> */}
                {/* {testDataArray.map((data, index) =>
                    <Test items={data} key={index}/>
                )} */}
                {/* <button onClick={() => {setTestData([{ name: 1 }, { name: 9 }, { name: 3 }, { name: 4 }])}}>
                    click
                </button> */}
            </div>
        </div>
    </div>
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}