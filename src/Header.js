import React, { Component, useState } from 'react';
import {ethers} from 'ethers';

function Header() {
    // State variables for wallet connection status and address
    const [connected, setConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");

    // Function to connect/disconnect the wallet
    async function connectWallet(){
        if(!connected) {
            // Connect the wallet using ethers.js
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const _walletAddress = await signer.getAddress();
            setConnected(true);
            setWalletAddress(_walletAddress);
        } else{
            // Disconnect the wallet
            window.ethereum.selectedAddress = null;
            setConnected(false);
            setWalletAddress("");
        }
    }
    return(
        <div>
        <div className="metaportal_fn_leftnav_closer ready"></div>
        <div className="metaportal_fn_leftnav ready">
            <a href="#" className="fn__closer"><span></span></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
            <div className="navbox">
                <div className="list_holder">
                    <ul className="metaportal_fn_items">
                        <li>
                            <div className="item">
                                <a href="https://opensea.io/" aria-label="Link to Example" target="_blank" rel="noreferrer"></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                                <span className="icon">
                                    <img src="img/market/opensea.png" alt=""/>
                                </span>
                                <span className="text">Opensea</span>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <a href="https://discord.com/" target="_blank" rel="noreferrer" aria-label="Link to Example"></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                                <span className="icon">
                                    <img src="img/market/discord.png" alt=""/>
                                </span>
                                <span className="text">Discord</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="nav_holder">

                    <span className="icon">
                        <img src="svg/down.svg" alt="" className="fn__svg"/>
                    </span>

                    <ul>
                        <li><a href="index.html"><span className="creative_link">Home</span></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>
                        <li><a href="nft-single.html"><span className="creative_link">Mint Page</span></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>
                    </ul>
                </div>
                <div className="info_holder">
                    <div className="copyright">
                        <p>Copyright 2022 - Designed &amp; Developed by Biki Labs</p>
                    </div>
                    <div className="social_icons">
                        <ul>
                            <li><a href="#"><img src="svg/social/twitter-1.svg" alt="" className="fn__svg"/></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>
                            <li><a href="#"><img src="svg/social/instagram-1.svg" alt="" className="fn__svg"/></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="metaportal_fn_wallet_closer ready"></div>
        <div className="metaportal_fn_walletbox ready">
            <a href="#" className="fn__closer"><span></span></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
            <div className="walletbox">
                <div className="title_holder">
                    <h3>Connect Wallet</h3>
                    <p>Connect with one of our available wallet providers or create a new one.</p>
                </div>

                <div className="list_holder">
                    <ul className="metaportal_fn_items">
                        <li>
                            <div className="item" onClick={connectWallet} >
                                <a id="#" href="#"></a>
                                <span className="icon">
                                    <img src="img/wallet/metamask.png" alt=""/>
                                </span>
                                <span className="text" >Metamask</span>
                            </div>
                        </li>
                        <li>
                            <div className="item" onclick="connect()">
                                <a href="#"></a>{/* eslint-disable jsx-a11y/anchor-has-content */}
                                <span className="icon">
                                    <img src="img/wallet/coinbase.png" alt=""/>
                                </span>
                                <span className="text">Coinbase</span>
                            </div>
                        </li>
                        <li>
                            <div className="item">
                                <a href="#"></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                                <span className="icon">
                                    <img src="img/wallet/walletconnect.png" alt=""/>
                                </span>
                                <span className="text">WalletConnect</span>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    </div>
    )
    }

export default Header;