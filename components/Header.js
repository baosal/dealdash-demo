import style from 'components/Header.module.scss'

export default () => {
    return (
        <div className={style.wraper}>
            <div className="background">
                Help
            </div>
            <div className="background">
                Tips & Tricks
            </div>
            <div className="background">
                Winners
            </div>
            <div className="background">
                Get Started
            </div>
        </div>
    )
}