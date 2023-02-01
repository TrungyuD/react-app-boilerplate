import Web3 from 'web3';

export const getWeb3Instance = (window: any) => {
  const { ethereum, web3 } = window;
  if (ethereum && ethereum.isMetaMask) {
    return new Web3(ethereum);
  }
  if (web3) {
    return new Web3(web3.currentProvider);
  }
  return null;
};
