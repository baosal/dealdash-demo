import style from 'css/Pagination.module.scss'

export default () => {
    return (
        <div className={style.wraper}>
            <div className='flex'>
                <div className="background disabled">
                    Previous
                </div>
                <div className="background disabled">
                    1
                </div>
                <div className="background">
                    2
                </div>
                <div className="background">
                    3
                </div>
                <div className="background">
                    4
                </div>
                <div className="background">
                    5
                </div>
                <div className="background">
                    6
                </div>
                <div className="background">
                    Next
                </div>
            </div>
        </div>
    )
}