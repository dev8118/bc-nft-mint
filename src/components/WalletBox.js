import react from 'react'

const WalletBox = ({connectWallet}) => {
    return (
        <>
        <div class="metaportal_fn_wallet_closer ready"></div>
        <div class="metaportal_fn_walletbox ready">
            <a href="#" class="fn__closer"><span></span></a>
            <div class="walletbox">

                <div class="title_holder">
                    <h3>Connect Wallet</h3>
                    <p>Connect with one of our available wallet providers or create a new one.</p>
                </div>

                <div class="list_holder">
                    <ul class="metaportal_fn_items">
                        <li>
                            <div class="item" id="connectButton" >
                                <span class="icon">
                                    <img src="img/wallet/metamask.png" alt="" />
                                </span>
                                <span class="text">Metamask</span>
                            </div>
                        </li>
                        <li>
                            <div class="item" onclick="connect()">
                                <a href="#"></a>
                                <span class="icon">
                                    <img src="img/wallet/coinbase.png" alt="" />
                                </span>
                                <span class="text">Coinbase</span>
                            </div>
                        </li>
                        <li>
                            <div class="item">
                                <a href="#"></a>
                                <span class="icon">
                                    <img src="img/wallet/walletconnect.png" alt="" />
                                </span>
                                <span class="text">WalletConnect</span>
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