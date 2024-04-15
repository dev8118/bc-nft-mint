import React, { Component, useState } from 'react';
import LeftNav from './components/LeftNav';
import WalletBox from './components/WalletBox';
import Header from './components/Header';
import {ethers} from 'ethers';

function Pehri() {
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
        <>
        <LeftNav />
        <WalletBox connect={connectWallet} />
        <Header/>
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
                                <a href="#"></a>
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
        </>
    )
}

export default Pehri;