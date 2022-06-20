import style from 'css/ListCard.module.scss'

export default ({ allPostsData = [] }) => {
    return (
        <section className={style.wraper}>
            <h2>Blog</h2>
            <ul className='test' style={{ color: 'red' }}>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                        {title}
                        <br />
                        {id}
                        <br />
                        {date}
                    </li>
                ))}
            </ul>
        </section>
    )
}