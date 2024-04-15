import react from 'react'
import { NavLink, Link, Navigate } from 'react-router-dom';
const LeftNav = () => {
    return (
        <>
        <div className="metaportal_fn_leftnav_closer ready"></div>
        <div className="metaportal_fn_leftnav ready">
            <a href="#" className="fn__closer"><span></span></a>
            <div className="navbox">
                <div className="list_holder">
                    <ul className="metaportal_fn_items">
                        <li>
                            <div className="item">
                                <Link to="https://opensea.io/" target="_blank"></Link>
                                <span className="icon">
                                    <img src="img/market/opensea.png" alt="" />
                                </span>
                                <span className="text">Opensea</span>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <Link to="https://discord.com/" target="_blank"></Link>
                                <span className="icon">
                                    <img src="img/market/discord.png" alt="" />
                                </span>
                                <span className="text">Discord</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="nav_holder">
                    <span className="icon">
                        <img src="svg/down.svg" alt="" className="fn__svg" />
                    </span>

                    <ul>
                        <li><Link to="/"><span className="creative_link">Home</span></Link></li>
                        <li><Link to="/roadmap"><span className="creative_link">Road Map</span></Link></li>
                        <li><Link to="/mint"><span className="creative_link">Mint</span></Link></li>

                    </ul>
                </div>
                <div className="info_holder">
                    <div className="copyright">
                        <p>Copyright 2022 - Designed &amp; Developed by Biki Labs</p>
                    </div>
                    <div className="social_icons">
                        <ul>
                            <li><a href="#"><img src="svg/social/twitter-1.svg" alt="" className="fn__svg" /></a></li>
                            <li><a href="#"><img src="svg/social/instagram-1.svg" alt="" className="fn__svg" /></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LeftNav;