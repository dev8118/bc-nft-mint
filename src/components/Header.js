import react from 'react'
import { NavLink, Link, Navigate } from 'react-router-dom';

const Header = () => {
    return (
        <>
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
                            <li><Link className="creative_link" to="/">Home</Link> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>
                            <li><Link className="creative_link" to="/roadmap">Road Map</Link>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>
                            <li><Link className="creative_link" to="/mint">Mint</Link>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}</li>

                        </ul>
                    </div>
                    <div className="social-media2">
                        <ul>
                            <Link to="https://opensea.io/" target="_blank" rel="noreferrer"><img src="img/market/opensea.png" alt="" /></Link>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                            <Link to="https://discord.com/" target="_blank" rel="noreferrer"><img src="img/market/discord.png" alt="" /></Link>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                            <Link to="https://discord.com/" target="_blank" rel="noreferrer"><img src="img/market/twitter.png" alt="" /></Link>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                            <Link to="https://discord.com/" target="_blank" rel="noreferrer"><img src="img/market/instagram.png" alt="" /></Link>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                        </ul>
                    </div>
                    <div className="wallet">
                        <a href="#" className="metaportal_fn_button wallet_opener" id="connectWallet"><span>Connect Metamask!</span></a>{/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                    </div>

                </div>
            </div>
        </header>
        </>
    )
}

export default Header;