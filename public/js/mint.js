
$(document).ready(function() {
  $("#metamask_connect").click(async() => {
    await loadweb3();

  })
  $("#mintNow").click(async() => {
    await mintNow();
  })

})





// Source code to interact with smart contract
let web3 = new Web3("https://endpoints.omniatech.io/v1/eth/goerli/public");

// //config
const CONTRACT_ADDRESS = "0x75d4749b971f1eea54fa36e14c10f96007905ae0";
const CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_mintAmount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
]
const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

var balance = 0;
var account;

//lets check web3 injected or not using direct or metamask connectivity
const loadweb3 =  async () => {
  // await ethereum.request({ method: 'eth_requestAccounts' });
  if (ethereum) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    account = accounts[0];
    window.web3 = new Web3(window.ethereum);
    // alert('wallet connected');
    $("#addr").html(account);
    $("#addr_resp").html(account);
    balance = await contract.methods.balanceOf(account).call();
    
    return true;
  } else {
    alert('Please connect metamask')
  }

};

window.addEventListener('load', async () => {
  await loadweb3();
  await refreshSupply();
})



const refreshSupply = async() => {
  var maxSupply = await contract.methods.maxSupply().call();
  var totalSupply = await contract.methods.totalSupply().call();  
  $("#totalSupply").html(totalSupply);
  $("#maxSupply").html(maxSupply);
}

const mintNow = async() => {
  if (!ethereum) {
    alert('Please connect wallet');
  }
  var mintAmount = $("#mint_amount").html();
  var totalPrice = $("#total_price").html();
  
  if(mintAmount * 1 + balance * 1 > 5) {
    alert('Allowed total amount is 5 nfts per wallet.')
  } else {
    //mint
    var web3_new = new Web3(window.ethereum);
    var con = new web3_new.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
     await con.methods.mint(mintAmount).send({ from: account, value: totalPrice * 10 ** 18 }).then((data) => { 
    }).catch((error) => {
        console.log(error);
    });
  }

}