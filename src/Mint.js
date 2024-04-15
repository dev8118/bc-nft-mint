import React, {Component} from 'react';

class Mint extends Component {
    render() {
        return(
            <div className="metaportal_fn_main">
                <header id="header">
                    <div className="header">
                        <div className="header_in">
                            <div className="trigger_logo">
                                <div className="trigger">
                                    <span></span>
                                </div>
                                <div className="logo">   
                                </div>
                            </div>
                            <div className="nav">
                                <ul>
                                    <li><a className="creative_link" href="index.html">Home</a> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>
                                    <li><a className="creative_link" href="index.html#about">About</a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>
                                    <li><a className="creative_link" href="index.html#ourteam">Our Team</a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>

                                </ul>
                            </div>
                            <div className="social-media2">
                                <ul>
                                    <a href="https://opensea.io/" target="_blank" rel="noreferrer"><img src="img/market/opensea.png" alt="" /></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                                    <a href="https://discord.com/" target="_blank" rel="noreferrer"><img src="img/market/discord.png" alt="" /></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                                    <a href="https://discord.com/" target="_blank" rel="noreferrer"><img src="img/market/twitter.png" alt="" /></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                                    <a href="https://discord.com/" target="_blank" rel="noreferrer"><img src="img/market/instagram.png" alt="" /></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                                </ul>
                            </div>
                            <div className="wallet">
                                <a href="#" className="metaportal_fn_button wallet_opener" id="connectWallet"><span>Connect Metamask!</span></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                            </div>

                        </div>
                    </div>
                </header>
                <div class="metaportal_fn_content">
                    <div class="metaportal_fn_mintpage">
                        <div class="container small">
                            <div class="metaportal_fn_mint_top">
                                <div class="mint_left">
                                    <div class="img">
                                        <div class="img_in" data-bg-img="img/about/11.png">
                                            <img src="img/1x1.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="mint_right">

                                    <h3 class="fn__maintitle" data-text="Biki Wodoo Club" data-align="left">Biki Wodoo Club</h3>
                                    <div class="desc">
                                        <p>Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia. Nunc eu massa dictum, vulputate neque ac, porta mauris. Sed sollicitudin nisi augue, a gravida turpis elementum vel. Curabitur sagittis quis diam et rhoncus. Nam pellentesque imperdiet aliquet. Sed non ante malesuada, ultrices sem at, tempus libero.</p>
                                        <p>Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. Quisque luctus turpis eu tristique feugiat. Praesent ac magna feugiat, interdum lacus ac, interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus et magnis dis parturient.</p>
                                    </div>
                                    <div class="view_on">
                                        <ul>
                                            <li>
                                                <span>View On:</span>
                                            </li>
                                            <li>
                                                <a href="#"><img src="svg/opensea.svg" alt="" class="fn__svg"/></a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="metaportal_fn_mintbox">
                                <div class="mint_left">
                                    <div class="mint_title"><span>Public Mint is Live</span></div>
                                    <div class="mint_list">
                                        <ul>
                                            <li>
                                                <div class="item">
                                                    <h4>Price</h4>
                                                    <h3>0.02 ETH</h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="item">
                                                    <h4>Remaining</h4>
                                                    <h3><span id="totalSupply">9999</span>/<span id="maxSupply">9999</span></h3>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="item">
                                                    <h4>Quantity</h4>
                                                    <div class="qnt">
                                                        <span class="decrease">-</span>
                                                        <span class="summ" data-price="0.02" id="mint_amount">1</span>
                                                        <span class="increase">+</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="item">
                                                    <h4>Total Price</h4>
                                                    <h3><span class="total_price" id="total_price">0.02</span> ETH + GAS</h3>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="mint_desc" id="mintNow">
                                        <span  class="metaportal_fn_button" style="cursor:pointer;">
                                            <span >Mint Now</span>
                                        </span>
                                        <p>By clicking “MINT NOW” button, you agree to our <a href="#">Terms of Service</a> and our <a href="#">Privacy Policy</a>.</p>
                                    </div>
                                </div>
                                <div class="mint_right">
                                    <div class="mright">
                                        <div class="mint_time">
                                            <h4>Public Mint Ends In</h4>
                                            <h3 class="metaportal_fn_countdown" data-type="ever" data-date="October 13, 2022 12:30:00" data-days="34" data-hours="10" data-minutes="20" data-seconds="0">0d: 0h: 0m: 0s</h3>
                                        </div>
                                        <div class="mint_checked">
                                            <p>
                                                <span class="text">Whitelist:</span>
                                                <span class="status">Soldout <span class="icon"><img src="svg/checked.svg" alt="" class="fn__svg"/></span></span>
                                            </p>
                                            <p>
                                                <span class="text">Presale:</span>
                                                <span class="status">Soldout <span class="icon"><img src="svg/checked.svg" alt="" class="fn__svg"/></span></span>
                                            </p>
                                        </div>
                                        <div class="mint_info">
                                            <p>You need to pay a GAS fee during minting. We allow max 5 mints per wallet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="metaportal_fn_nft_cats">
                                <ul>
                                    <li>
                                        <div class="item">
                                            <h4 class="parent_category">Clothing</h4>
                                            <h3 class="child_category" title="Black Yukata">Black Yukata</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="item">
                                            <h4 class="parent_category">Eyes</h4>
                                            <h3 class="child_category" title="Daydreaming">Daydreaming</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="item">
                                            <h4 class="parent_category">Special</h4>
                                            <h3 class="child_category" title="Fireflies, Smoke">Fireflies, Smoke</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="item">
                                            <h4 class="parent_category">Type</h4>
                                            <h3 class="child_category" title="Human, Sand">Human, Sand</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="item">
                                            <h4 class="parent_category">Mouth</h4>
                                            <h3 class="child_category" title="Not Bad">Not Bad</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="item">
                                            <h4 class="parent_category">Neck</h4>
                                            <h3 class="child_category" title="Zen Headphones">Zen Headphones</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="item">
                                            <h4 class="parent_category">Eyes</h4>
                                            <h3 class="child_category" title="Striking">Striking</h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="item">
                                            <h4 class="parent_category">Neck</h4>
                                            <h3 class="child_category" title="Zen Headphones">Zen Headphones</h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mint;