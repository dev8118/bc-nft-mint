import { useEffect } from 'react'
import { useWeb3React } from "@web3-react/core";
import { connectors } from '../web3/connectors';

const WalletBox = ({open, handler}) => {
    const { activate } = useWeb3React();

    const setProvider = (type) => {
      window.localStorage.setItem("provider", type);
    };

    const connect = (type) => async () => {
        if(type === 'metamask') {
            await activate(connectors.injected);
            setProvider("injected");
        }
        if(type === 'coinbase') {
            await activate(connectors.coinbaseWallet);
            setProvider("coinbaseWallet");
        }
        if(type == 'others') {
            await activate(connectors.walletConnect);
            setProvider("walletConnect");
        }
        handler();
    }

    return (
        <>
        <div
            onClick={handler} 
            className={open ? 'metaportal_fn_wallet_closer active' : 'metaportal_fn_wallet_closer'}
        />
        <div className={open ? 'metaportal_fn_walletbox active' : 'metaportal_fn_walletbox'}>
            <a href="#" className="fn__closer"><span></span></a>
            <div className="walletbox">

                <div className="title_holder">
                    <h3>Connect Wallet</h3>
                    <p>Connect with one of our available wallet providers or create a new one.</p>
                </div>

                <div className="list_holder">
                    <ul className="metaportal_fn_items">
                        <li>
                            <div className="item" style={{cursor: 'pointer'}} onClick={connect('metamask')}>
                                <span className="icon">
                                    <img src="img/wallet/metamask.png" alt="" />
                                </span>
                                <span className="text">Metamask</span>
                            </div>
                        </li>
                        <li>
                            <div className="item" style={{cursor: 'pointer'}} onClick={connect('coinbase')}>
                                <span className="icon">
                                    <img src="img/wallet/coinbase.png" alt="" />
                                </span>
                                <span className="text">Coinbase</span>
                            </div>
                        </li>
                        <li>
                            <div className="item" style={{cursor: 'pointer'}} onClick={connect('others')}>
                                <span className="icon">
                                    <img src="img/wallet/walletconnect.png" alt="" />
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

export default WalletBox;