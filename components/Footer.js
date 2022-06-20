import style from 'css/Footer.module.scss'

export default () => {
    return (
        <div className={style.wraper}>

            <nav className='background'>
                <div className="wraper">
                    <div className="column">
                        <div className="group-label">SITE LINKS</div>
                        <a href="">
                            <div className="text">Auctions</div>
                        </a>
                        <a href="">

                            <div className="text">DealDash Reviews</div>
                        </a>
                        <a href="">

                            <div className="text">DealDash is Legit</div>
                        </a>
                        <a href="">
                            <div className="text">Press</div>
                        </a>
                        <a href="">
                            <div className="text">Log in</div>
                        </a>
                        <a href="">
                            <div className="text">Create account</div>
                        </a>
                    </div>
                    <div className="column">
                        <div className="group-label">HELP</div>
                        <a href="">

                            <div className="text">How to Bid in an Auction</div>
                        </a>
                        <a href="">

                            <div className="text">Tips & Tricks</div>
                        </a>
                        <a href="">

                            <div className="text">Frequently Asked Questions</div>
                        </a>
                        <a href="">

                            <div className="text">What is a Bid Pack?</div>
                        </a>
                        <a href="">

                            <div className="text">What is "Time as Highest Bidder"?</div>
                        </a>
                        <a href="">

                            <div className="text">Promotions</div>
                        </a>
                        <a href="">

                            <div className="text">Orders & Shipping</div>
                        </a>
                        <a href="">

                            <div className="text">Payments</div>
                        </a>
                        <a href="">

                            <div className="text">House Rules</div>
                        </a>
                        <a href="">

                            <div className="text">Royalty Program</div>
                        </a>
                    </div>
                    <div className="column">
                        <div className="group-label">ABOUT</div>
                        <a href="">

                            <div className="text">Careers</div>
                        </a>
                        <a href="">

                            <div className="text">Our Team</div>
                        </a>
                        <a href="">

                            <div className="text">Suppliers</div>
                        </a>
                        <a href="">

                            <div className="text">About Us</div>
                        </a>
                        <a href="">

                            <div className="text">Terms of Use</div>
                        </a>
                        <a href="">

                            <div className="text">Privacy Policy</div>
                        </a>
                        <a href="">

                            <div className="text">Accessibility</div>
                        </a>
                    </div>
                    <div className="column">
                        <div className="group-label">LATEST BLOGS</div>
                        <div>
                            <div className="date">06/06/2022</div>
                            <a href="">
                                <div className="text">
                                    Where Do Great Deals Come From? It Starts With DealDash
                                    Suppliers
                                </div>
                            </a>
                        </div>
                        <div>
                            <div className="date">05/06/2022</div>
                            <a href="">
                                <div className="text">An Unexpected Holiday Is Coming</div>
                            </a>
                        </div>
                        <div>
                            <div className="date">04/01/2022</div>
                            <a href="">
                                <div className="text">The DealDash Customer Experience</div>
                            </a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="center">
                            <svg
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.3492 0.240762C10.7685 -0.118661 11.3998 -0.0700991 11.7593 0.349227C12.1187 0.768553 12.0701 1.39985 11.6508 1.75927L4.65079 7.75927C4.25405 8.09934 3.66238 8.07661 3.29289 7.70712L0.292893 4.70712C-0.0976311 4.3166 -0.0976311 3.68344 0.292893 3.29291C0.683418 2.90239 1.31658 2.90239 1.70711 3.29291L4.0523 5.63811L10.3492 0.240762Z"
                                    fill="green"
                                />
                            </svg>

                            <div className="promotion">Free Shipping on ALL items!</div>
                        </div>
                        <div style={{
                            display: 'flex',
                            'align-items': 'center',
                            'margin-top': '4px',
                        }}>
                            <svg
                                width="12"
                                height="8"
                                viewBox="0 0 12 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.3492 0.240762C10.7685 -0.118661 11.3998 -0.0700991 11.7593 0.349227C12.1187 0.768553 12.0701 1.39985 11.6508 1.75927L4.65079 7.75927C4.25405 8.09934 3.66238 8.07661 3.29289 7.70712L0.292893 4.70712C-0.0976311 4.3166 -0.0976311 3.68344 0.292893 3.29291C0.683418 2.90239 1.31658 2.90239 1.70711 3.29291L4.0523 5.63811L10.3492 0.240762Z"
                                    fill="green"
                                />
                            </svg>
                            <div className="promotion">Amazing deals 24/7!</div>
                        </div>
                        <div style={{ 'margin-top': '20px' }}>
                            Sign up for free
                        </div>
                        <div className="flex">
                        </div>
                        <div className="flex">
                        </div>
                    </div>
                </div>
                <div className="bottom">U.S. Patent Pending</div>
            </nav >
        </div >

    )
}