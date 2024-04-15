import React, {Component} from "react";
import { NavLink, Link } from 'react-router-dom';
import { useState } from "react";

function Body() {
    
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
                                <Link to="https://opensea.io/" target="_blank" rel="noreferrer"><img src="img/market/opensea.png" alt="" /></Link>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
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
            <div className="metaportal_fn_content">
                <section id="home">
                    <div className="container">
                        <h3 className="fn__maintitle big" data-text="BiKi Wodoo Club" data-align="center">BiKi Wodoo Club</h3>
                        <div className="fn_cs_slider">
                            <div className="slider_top">
                                <img src="img/1x1.jpg" alt=""/>
                                <ul>
                                    <li className="prev" data-index="1">
                                        <div className="item">
                                            <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="img/slider/my_1.jpg"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="active" data-index="2">
                                        <div className="item">
                                            <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="img/slider/my_2.jpg"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="next" data-index="3">
                                        <div className="item">
                                            <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="img/slider/my_3.jpg"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-index="4">
                                        <div className="item">
                                            <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="img/slider/my_4.jpg"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-index="5">
                                        <div className="item">
                                            <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="img/slider/my_5.jpg"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-index="6">
                                        <div className="item">
                                            <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="img/slider/my_6.jpg"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-index="7">
                                        <div className="item">
                                            <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="img/slider/7.jpg"></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="slider_nav">
                                {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                                <NavLink to="#" className="prev">
                                    <span className="circle"></span>
                                    <span className="icon"><img src="svg/down.svg" alt="" className="fn__svg"/></span>
                                    <span className="circle"></span>
                                </NavLink>
                                <NavLink to="#" className="next">
                                    <span className="circle"></span>
                                    <span className="icon"><img src="svg/down.svg" alt="" className="fn__svg"/></span>
                                    <span className="circle"></span>
                                </NavLink>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}{/* eslint-disable jsx-a11y/anchor-has-content */}
                            </div>
                        </div>
                        <div className="fn_cs_desc">
                            <p>Biki Wodoo Club represent a collection of 10,000 legends categorized by level of rarity and generated with hundreds of elements. Biki Wodoo Club are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.</p>
                            <a to="/mint" className="metaportal_fn_button" ><span>Mint is live</span></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                        </div>
                    </div>
                </section>
                <section id="fun_facts">
                    <div className="container">
                        <div className="fn_cs_counter_list">
                            <ul>
                                <li>
                                    <div className="item">
                                        <h3 className="fn__gradient_title">
                                            <span className="prefix"></span>
                                            <span className="fn_cs_counter" data-from="0" data-to="10000" data-speed="3000" data-decimals="0">0</span>
                                            <span className="suffix"></span>
                                        </h3>
                                        <p>Total Items</p>
                                        <div className="divider"></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <h3 className="fn__gradient_title">
                                            <span className="prefix"></span>
                                            <span className="fn_cs_counter" data-from="0" data-to="0" data-speed="3000" data-decimals="1">0</span>
                                            <span className="suffix">k+</span>
                                        </h3>
                                        <p>Total Owners</p>
                                        <div className="divider"></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <h3 className="fn__gradient_title">
                                            <span className="prefix"></span>
                                            <span className="fn_cs_counter" data-from="0" data-to="0" data-speed="3000" data-decimals="1">0</span>
                                            <span className="suffix"></span>
                                        </h3>
                                        <p>Floor Price (ETH)</p>
                                        <div className="divider"></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <h3 className="fn__gradient_title">
                                            <span className="prefix"></span>
                                            <span className="fn_cs_counter" data-from="0" data-to="0" data-speed="3000" data-decimals="0">0</span>
                                            <span className="suffix">k+</span>
                                        </h3>
                                        <p>Volume Traded (ETH)</p>
                                        <div className="divider"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
                <section id="about">
                    <div className="fn_cs_about">
                        <div className="left_part">
                            <div className="img">
                                <div className="img_in" data-bg-img="img/about/1.gif"><img src="img/1x1.png" alt=""/></div>
                            </div>
                            <div className="bg_overlay">
                                <div className="bg_color"></div>
                                <div className="bg_image" data-bg-img="img/1x1.png"></div>
                            </div>
                        </div>
                        <div className="right_part">
                            <div className="right_in">
                                <h3 className="fn__maintitle" data-text="The Rise of Legends">The Rise of Legends</h3>
                                <div className="fn_cs_divider">
                                    <div className="divider">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="desc">
                                    <p>As the first hero of the Meta Legends, collection has over 9,999 unique skins drawn from the different missions and challenges he faced throughout his life.</p>
                                    <p>The artwork has been hand-drawned by Robert Green in the traditional anime style and composited by Layla Efiyo.</p>
                                </div>
                                <a href="https://discord.com/" className="metaportal_fn_button" target="_blank" rel="noreferrer"><span>Find us On Discord</span></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="fn_cs_mint">
                            <div className="left_part">
                                <h3 className="fn__maintitle" data-text="How to Mint">How to Mint</h3>
                                <div className="fn_cs_divider">
                                    <div className="divider">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="desc">
                                    <p>As the first hero of the Meta Legends, collection has over 9,999 unique skins drawn from the different missions and challenges he faced throughout his life.</p>
                                    <p>The artwork has been hand-drawned by Robert Green in the traditional anime style and composited by Layla Efiyo.</p>
                                </div>
                                <a href="nft-single.html" className="metaportal_fn_button"><span>How to Mint</span></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                            </div>
                            <div className="right_part">
                                <div className="fn_cs_steps">
                                    <ul>
                                        <li>
                                            <div className="item">
                                                <div className="item_in">
                                                    <h3 className="fn__gradient_title">01</h3>
                                                    <p>Connect your Wallet</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <div className="item_in">
                                                    <h3 className="fn__gradient_title">02</h3>
                                                    <p>Select Your Quantity</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <div className="item_in">
                                                    <h3 className="fn__gradient_title">03</h3>
                                                    <p>Confirm The Transaction</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <div className="item_in">
                                                    <h3 className="fn__gradient_title">04</h3>
                                                    <p>Receive Your NFT’s</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="fn_cs_section_divider">
                    <div className="divider">
                        <span className="short"></span>
                        <span className="long"></span>
                        <span className="short"></span>
                    </div>
                </div>
                <section id="collection">
                    <div className="container">
                        <h3 className="fn__maintitle big" data-text="Our Collection" data-align="center">Our Collection</h3>
                        <div className="fn_cs_collection">
                            <div className="collection_top">
                                <div className="item">
                                    <div className="item_in">
                                        <div className="img">
                                            <div className="abs_img" data-bg-img="img/collection/my_1.jpg"></div>
                                            <img src="img/1x1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <input type="hidden" value="img/collection/my_1.jpg"/>
                                </div>
                                <div className="item">
                                    <div className="item_in">
                                        <div className="img">
                                            <div className="abs_img" data-bg-img="img/collection/my_2.jpg"></div>
                                            <img src="img/1x1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <input type="hidden" value="img/collection/my_2.jpg"/>
                                </div>
                                <div className="item">
                                    <div className="item_in">
                                        <div className="img">
                                            <div className="abs_img" data-bg-img="img/collection/my_3.jpg"></div>
                                            <img src="img/1x1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <input type="hidden" value="img/collection/my_3.jpg"/>
                                </div>
                                <div className="item">
                                    <div className="item_in">
                                        <div className="img">
                                            <div className="abs_img" data-bg-img="img/collection/my_4.jpg"></div>
                                            <img src="img/1x1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <input type="hidden" value="img/collection/my_4.jpg"/>
                                </div>
                            </div>
                            <div className="collection_bottom">
                                <div className="item">
                                    <div className="item_in">
                                        <div className="img">
                                            <div className="abs_img" data-bg-img="img/collection/my_5.jpg"></div>
                                            <img src="img/1x1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <input type="hidden" value="img/collection/my_5.jpg"/>
                                </div>
                                <div className="item">
                                    <div className="item_in">
                                        <div className="img">
                                            <div className="abs_img" data-bg-img="img/collection/my_6.jpg"></div>
                                            <img src="img/1x1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <input type="hidden" value="img/collection/my_6.jpg"/>
                                </div>
                                <div className="item">
                                    <div className="item_in">
                                        <div className="img">
                                            <div className="abs_img" data-bg-img="img/collection/my_1.jpg"></div>
                                            <img src="img/1x1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <input type="hidden" value="img/collection/my_1.jpg"/>
                                </div>
                                <div className="item">
                                    <div className="item_in">
                                        <div className="img">
                                            <div className="abs_img" data-bg-img="img/collection/my_2.jpg"></div>
                                            <img src="img/1x1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <input type="hidden" value="img/collection/my_2.jpg"/>
                                </div>
                            </div>
                        </div>
                        <div className="fn_cs_desc">
                            <p>Meta Legends represent a collection of 17,000 legends categorized by level of rarity and generated with hundreds of elements. The Legends are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.</p>
                        </div>
                    </div>
                </section>
                <div className="fn_cs_section_divider">
                    <div className="divider">
                        <span className="short"></span>
                        <span className="long"></span>
                        <span className="short"></span>
                    </div>
                </div>
                <section id="ourteam">
                    <div className="container">
                        <h3 className="fn__maintitle big" data-text="Our Team" data-align="center">Our Team</h3>
                        <div className="metaportal_fn_drops">
                            <ul className="grid">
                                <li>
                                    <div className="nft__item">
                                        <div className="img_holder">
                                            <img src="img/drops/1.png" alt=""/>
                                        </div>
                                        <div className="title_holder">
                                            <h3 className="fn_title"><a href="#">TheiriN</a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</h3>
                                            <p align="center">Founder</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="nft__item">
                                        <div className="img_holder">
                                            <img src="img/drops/2.png" alt=""/>
                                        </div>
                                        <div className="title_holder">
                                            <h3 className="fn_title"><a href="#">Shelter</a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</h3>
                                            <p align="center">Co-Founder</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="nft__item">
                                        <div className="img_holder">
                                            <img src="img/drops/3.png" alt=""/>
                                        </div>
                                        <div className="title_holder">
                                            <h3 className="fn_title"><a href="#">Lucigeotto</a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</h3>
                                            <p align="center">Artist</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="nft__item">
                                        <div className="img_holder">
                                            <img src="img/drops/4.png" alt=""/>
                                        </div>
                                        <div className="title_holder">
                                            <h3 className="fn_title"><a href="#">Lucky Catch</a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</h3>
                                            <p align="center">Artist</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="nft__item">
                                        <div className="img_holder">
                                            <img src="img/drops/5.png" alt=""/>
                                        </div>
                                        <div className="title_holder">
                                            <h3 className="fn_title"><a href="#">Shooterfanas</a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</h3>
                                            <p align="center">Developer</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="nft__item">
                                        <div className="img_holder">
                                            <img src="img/drops/6.png" alt=""/>
                                        </div>
                                        <div className="title_holder">
                                            <h3 className="fn_title"><a href="#">Skyluci</a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</h3>
                                            <p align="center">Marketing Manager</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="nft__item">
                                        <div className="img_holder">
                                            <img src="img/drops/7.png" alt=""/>
                                        </div>
                                        <div className="title_holder">
                                            <h3 className="fn_title"><a href="#">Zeo</a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</h3>
                                            <p align="center">Marketing Manager</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="nft__item">
                                        <div className="img_holder">
                                            <img src="img/drops/8.png" alt=""/>
                                        </div>
                                        <div className="title_holder">
                                            <h3 className="fn_title"><a href="#">Meone</a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</h3>
                                            <p align="center">Community Operations Manager</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
                <div className="fn_cs_section_divider">
                    <div className="divider">
                        <span className="short"></span>
                        <span className="long"></span>
                        <span className="short"></span>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Body;