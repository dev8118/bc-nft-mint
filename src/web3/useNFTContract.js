import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import ethers from 'ethers';

import abi from '../assets/artifacts/SmartWagerAbi.json'
const contractAddress = '0x123456789ABCDEF';

const useNftContrct = ({cardType}) => {
    const { activate, account, library } = useWeb3React();

    const [contract, setContract] = useState(null);
    const [result, setResult] = useState(null);
    const [basicPrice, setBasicPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [remain, setRemain] = useState(0);

    useEffect(() => {
        const init = async () => {
            if (library) {
                // Initialize the contract
                const contract = new ethers.Contract(contractAddress, abi, library.getSigner());
                setContract(contract);
                const prc = await contract.getPrice();
                setBasicPrice(prc);
                const rmn = await contract.getRemain();
                setRemain(rmn);
            }
        }
        init();
    }, [library]);

    useEffect(() => {
        let prc = price;
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
                if(cardType === 0) {
                    const result = await contract.mintRandomCard({value: quantity * price});
                    setResult(result);
                }else {
                    const result = await contract.mintSpecificCard(cardType, {value: quantity * price});
                    setResult(result);
                }
            }catch(err) {
                console.error('Error calling contract function: ', err);
            }
        }
    }

    return [contract, price, remain, result, mintNFT];
}

export default useNftContrct;