import React, {Component} from 'react';
import { NavLink, Link, Navigate } from 'react-router-dom';

const Mint = () => {
    return(
        <>
        <div className="metaportal_fn_main">
            {/* <div className="metaportal_fn_mobnav">
                <div className="mob_top">
                    <div className="social_trigger">
                        <div className="trigger">
                            <span></span>
                        </div>
                        <div className="social">
                            <ul>
                                <li><a href="https://www.facebook.com/" target="_blank">Fb.</a></li>
                                <li><a href="https://www.twitter.com/" target="_blank">Tw.</a></li>
                                <li><a href="https://www.instagram.com/" target="_blank">In.</a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank">Ln.</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="wallet" id="addr_resp">
                        <a href="#" className="metaportal_fn_button wallet_opener"><span>Wallet</span></a>
                    </div>
                </div>
                <div className="mob_mid">
                    <div className="logo">
                        <a href="index.html"><img src="img/logo.png" alt="" /></a>
                    </div>
                    <div className="trigger">
                        <span></span>
                    </div>
                </div>
                <div className="mob_bot">
                    <ul>
                        <li><a className="creative_link" href="index.html#home">Home</a></li>
                        <li><a className="creative_link" href="index.html#about">About</a></li>
                        <li><a className="creative_link" href="index.html#collection">Collection</a></li>
                    </ul>
                </div>
            </div> */}
            <div className="metaportal_fn_content">

                <div className="metaportal_fn_mintpage">

                    <div className="container small">
                        <div className="metaportal_fn_mint_top">
                            <div className="mint_left">
                                <div className="img">
                                    <div className="img_in" data-bg-img="img/about/11.png">
                                        <img src="img/1x1.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="mint_right">

                                <h3 className="fn__maintitle" data-text="Biki Wodoo Club" data-align="left">Biki Wodoo Club</h3>
                                <div className="desc">
                                    <p>Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia. Nunc eu massa dictum, vulputate neque ac, porta mauris. Sed sollicitudin nisi augue, a gravida turpis elementum vel. Curabitur sagittis quis diam et rhoncus. Nam pellentesque imperdiet aliquet. Sed non ante malesuada, ultrices sem at, tempus libero.</p>
                                    <p>Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. Quisque luctus turpis eu tristique feugiat. Praesent ac magna feugiat, interdum lacus ac, interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus et magnis dis parturient.</p>
                                </div>
                                <div className="view_on">
                                    <ul>
                                        <li>
                                            <span>View On:</span>
                                        </li>
                                        <li>
                                            <a href="#"><img src="svg/opensea.svg" alt="" className="fn__svg" /></a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="metaportal_fn_mintbox">
                            <div className="mint_left">
                                <div className="mint_title"><span>Public Mint is Live</span></div>
                                <div className="mint_list">
                                    <ul>
                                        <li>
                                            <div className="item">
                                                <h4>Price</h4>
                                                <h3>0.02 ETH</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <h4>Remaining</h4>
                                                <h3><span id="totalSupply">9999</span>/<span id="maxSupply">9999</span></h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <h4>Quantity</h4>
                                                <div className="qnt">
                                                    <span className="decrease">-</span>
                                                    <span className="summ" data-price="0.02" id="mint_amount">1</span>
                                                    <span className="increase">+</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <h4>Total Price</h4>
                                                <h3><span className="total_price" id="total_price">0.02</span> ETH + GAS</h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mint_desc" id="mintNow">
                                    <span  className="metaportal_fn_button" style={{cursor:'pointer'}}>
                                        <span >Mint Now</span>
                                    </span>
                                    <p>By clicking “MINT NOW” button, you agree to our <a href="#">Terms of Service</a> and our <a href="#">Privacy Policy</a>.</p>
                                </div>
                            </div>
                            <div className="mint_right">
                                <div className="mright">
                                    <div className="mint_time">
                                        <h4>Public Mint Ends In</h4>
                                            There is two types of countdown: due_date (Due Date), ever (Evergreen timer)
                                                1. 	data-type="due_date"
                                                    In this case you have to change value of data-date. For example:
                                                    data-date="October 13, 2022 12:30:00"
                                                    It will mean that mint will finished at this time

                                                2. 	data-type="ever"
                                                    In this case you have to change values of data-days, data-hours, data-minutes and data-seconds. For example:
                                                    data-days="34"
                                                    data-hours="10"
                                                    data-minutes="20"
                                                    data-seconds="0"
                                                    It will mean that the time expires after this time, but when the page is refreshed, the value will return again. It means, it won't end.
                                        <h3 className="metaportal_fn_countdown" data-type="ever" data-date="October 13, 2022 12:30:00" data-days="34" data-hours="10" data-minutes="20" data-seconds="0">0d: 0h: 0m: 0s</h3>
                                    </div>
                                    <div className="mint_checked">
                                        <p>
                                            <span className="text">Whitelist:</span>
                                            <span className="status">Soldout <span className="icon"><img src="svg/checked.svg" alt="" className="fn__svg" /></span></span>
                                        </p>
                                        <p>
                                            <span className="text">Presale:</span>
                                            <span className="status">Soldout <span className="icon"><img src="svg/checked.svg" alt="" className="fn__svg" /></span></span>
                                        </p>
                                    </div>
                                    <div className="mint_info">
                                        <p>You need to pay a GAS fee during minting. We allow max 5 mints per wallet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="metaportal_fn_nft_cats">
                            <ul>
                                <li>
                                    <div className="item">
                                        <h4 className="parent_category">Clothing</h4>
                                        <h3 className="child_category" title="Black Yukata">Black Yukata</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <h4 className="parent_category">Eyes</h4>
                                        <h3 className="child_category" title="Daydreaming">Daydreaming</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <h4 className="parent_category">Special</h4>
                                        <h3 className="child_category" title="Fireflies, Smoke">Fireflies, Smoke</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <h4 className="parent_category">Type</h4>
                                        <h3 className="child_category" title="Human, Sand">Human, Sand</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <h4 className="parent_category">Mouth</h4>
                                        <h3 className="child_category" title="Not Bad">Not Bad</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <h4 className="parent_category">Neck</h4>
                                        <h3 className="child_category" title="Zen Headphones">Zen Headphones</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <h4 className="parent_category">Eyes</h4>
                                        <h3 className="child_category" title="Striking">Striking</h3>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <h4 className="parent_category">Neck</h4>
                                        <h3 className="child_category" title="Zen Headphones">Zen Headphones</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>


                </div>
            </div>
            <a href="#" className="metaportal_fn_totop">
                <span className="totop_inner">
                    <span className="icon">
                        <img src="svg/down.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Scroll To Top</span>
                </span>
            </a>


        </div>
        </>
    )
}

export default Mint;