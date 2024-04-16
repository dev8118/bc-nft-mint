import { useState } from 'react';

import LeftNav from './components/LeftNav';
import WalletBox from './components/WalletBox';
import Header from './components/Header';

function Pehri() {
    const [walletOpen, setWalletOpen] = useState(false);
    const [leftNavOpen, setLeftNavOpen] = useState(false);

    const handleWalletOpen = () => {
        setWalletOpen(!walletOpen);
    }

    const handleLeftNavOpen = () => {
        setLeftNavOpen(!leftNavOpen);
    }

    return(
        <>
            <LeftNav 
                open={leftNavOpen}
                handler={handleLeftNavOpen}
            />
            <Header 
                handleWalletOpen={handleWalletOpen}
                handleLeftNavOpen={handleLeftNavOpen}
            />
            <WalletBox 
                open={walletOpen}
                handler={handleWalletOpen}
            />
        </>
    )
}

export default Pehri;