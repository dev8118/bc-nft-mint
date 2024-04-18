import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import {ethers, BigNumber} from 'ethers';
// import { truncateAddress } from '../utils';

import contractJson from '../artifacts/contracts/SmartWager.sol/SmartWager.json'

const contractAddress = '0x9Bb65b12162a51413272d10399282E730822Df44';
const abi = contractJson.abi;

const useNftContract = () => {
    const { activate, account, library } = useWeb3React();

    const [contract, setContract] = useState(null);
    const [result, setResult] = useState(null);
    const [basicPrice, setBasicPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [remain, setRemain] = useState(0);
    const [limitPerAccount, setLimitPerAccount] = useState(0);
    const [balance, setBalance] = useState(0);
    const [cardType, setCardType] = useState(0);

    useEffect(() => {
        console.log(library)
        const init = async () => {
            if (library && account) {
                console.log(account, library)
                // Initialize the contract
                console.log('initing...', library)
                const contract = new ethers.Contract(contractAddress, abi, library.getSigner());
                setContract(contract);
                const prc = await contract.getPrice();
                setBasicPrice(parseFloat(ethers.utils.formatEther(prc)));
                const rmn = await contract.getRemain();
                setRemain(parseInt(rmn.toNumber()));
                const lpa = await contract.getCardLImitPerAccount();
                console.log(lpa)
                setLimitPerAccount(parseInt(lpa.toNumber()))
                const bal = await contract.balanceOf(account);
                setBalance(parseInt(bal.toNumber()))
            }
        }
        init();
    }, [library]);

    useEffect(() => {
        console.log(cardType, basicPrice)
        let prc = basicPrice;
        if(cardType === 0 || cardType === 3) { // random and silver
            prc *= 2;
        }else if(cardType === 1) { // diamond
            prc *= 5;
        }else if(cardType === 2) { // gold
            prc *= 3;
        }else if(cardType === 4) { // bronze
            prc *= 1;
        }else {
            prc = 0;
        }
        setPrice(prc);
    }, [cardType, basicPrice]);

    const mintNFT = async (cardType, quantity) => {
        if(contract) {
            try {
                console.log(cardType, quantity)
                if(cardType === 0) {
                    const result = await contract.mintRandomCard(BigNumber.from(quantity), {value: ethers.utils.parseEther((quantity * price).toString())});
                    setResult(result);
                }else {
                    const result = await contract.mintSpecificCard(BigNumber.from(cardType), BigNumber.from(quantity), {value: ethers.utils.parseEther((quantity * price).toString())});
                    setResult(result);
                }
            }catch(err) {
                console.error('Error calling contract function: ', err);
            }
        }
    }

    return {contract, price, remain, result, limitPerAccount, mintNFT, balance, cardType, setCardType};
}

export default useNftContract;