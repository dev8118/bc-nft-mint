import { useState, useEffect } from 'react'
import { NavLink, Link, Navigate } from 'react-router-dom';
import { useWeb3React } from "@web3-react/core";
import { connectors } from "../web3/connectors";
import { toHex, truncateAddress } from "../utils";
import { Buffer } from "buffer";
import $ from 'jquery';

const Header = ({ handleWalletOpen, handleLeftNavOpen }) => {
    const [openMobNav, setOpenMovNav] = useState(false);

    const handleMobNav = () => {
        let mobDD = $('.metaportal_fn_mobnav .mob_bot');
        setOpenMovNav(!openMobNav);
        if(openMobNav) {
            mobDD.slideUp(300);
        }else {
            mobDD.slideDown(300);
        }
    }

    const {
        library,
        chainId,
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();

    const disconnect = () => {
        if(!active) return
        window.localStorage.setItem("provider", undefined);
        deactivate();
    };

    const handleWalletBtn = () => {
        if(active) {
            disconnect();
        }else {
            handleWalletOpen();
        }
    }

    useEffect(() => {
        if (!window.Buffer) {
            window.Buffer = Buffer;
        }
        const provider = window.localStorage.getItem("provider");
        if (provider) activate(connectors[provider]);
    }, []);
    return (
        <>
        <header id="header">
            <div className="header">
                <div className="header_in">
                    <div className="trigger_logo">
                        <div className="trigger" onClick={handleLeftNavOpen}>
                            <span></span>
                        </div>
                        <div className="logo">   
                        </div>
                    </div>
                    <div className="nav">
                        <ul>
                            <li><Link className="creative_link" to="/">Home</Link></li>
                            <li><Link className="creative_link" to="/roadmap">Road Map</Link></li>
                            <li><Link className="creative_link" to="/mint">Mint</Link></li>

                        </ul>
                    </div>
                    {/* <div className="social-media2">
                        <ul>
                            <Link to="https://opensea.io/" target="_blank" rel="noreferrer"><img src="img/market/opensea.png" alt="" /></Link>
                            <Link to="https://discord.com/" target="_blank" rel="noreferrer"><img src="img/market/discord.png" alt="" /></Link>
                            <Link to="https://discord.com/" target="_blank" rel="noreferrer"><img src="img/market/twitter.png" alt="" /></Link>
                            <Link to="https://discord.com/" target="_blank" rel="noreferrer"><img src="img/market/instagram.png" alt="" /></Link>
                        </ul>
                    </div> */}
                    <div className="wallet" style={{cursor: 'pointer'}}>
                        <span className="metaportal_fn_button wallet_opener" onClick={handleWalletBtn}>
                            <span>{!active ? 'Connect Wallet' : `Disconnect ${truncateAddress(account)}`}</span>
                        </span>
                    </div>

                </div>
            </div>
        </header>
        <div className="metaportal_fn_mobnav">
            <div className="mob_top">
                <div className="social_trigger">
                    <div className="trigger" onClick={handleLeftNavOpen}>
                        <span></span>
                    </div>
                    {/* <div className="social">
                        <ul>
                            <li><a href="https://www.facebook.com/" target="_blank">Fb.</a></li>
                            <li><a href="https://www.twitter.com/" target="_blank">Tw.</a></li>
                            <li><a href="https://www.instagram.com/" target="_blank">In.</a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank">Ln.</a></li>
                        </ul>
                    </div> */}
                </div>
                <div className="wallet" id="addr_resp" style={{cursor: 'pointer'}}>
                    <span className="metaportal_fn_button wallet_opener" onClick={handleWalletBtn}>
                        <span>{!active ? 'Connect Wallet' : `Disconnect ${truncateAddress(account)}`}</span>
                    </span>
                </div>
            </div>
            <div className="mob_mid">
                <div className="logo">
                    <a href="index.html"><img src="img/logo.png" alt="" /></a>
                </div>
                <div className="trigger" onClick={handleMobNav}>
                    <span></span>
                </div>
            </div>
            <div className={openMobNav ? 'mob_bot active' : 'mob_bot'}>
                <ul>
                    <li><Link className="creative_link" to="/">Home</Link></li>
                    <li><Link className="creative_link" to="/roadmap">Road Map</Link></li>
                    <li><Link className="creative_link" to="/mint">Mint</Link></li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header;