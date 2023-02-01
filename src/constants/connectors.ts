import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

export const injectedConnector = new InjectedConnector({});

const RPC_URLS: { [chainId: number]: string } = {
  // declared so that when in other networks can still connect to dapp
  56: 'https://bsc-dataseed.binance.org/',
  97: process.env.REACT_APP_BSC_RPC_URL as string,
  321: 'https://rpc-mainnet.kcc.network',
  322: process.env.REACT_APP_KCC_RPC_URL as string,
  1: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  3: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  4: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  5: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  42: 'https://kovan.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  137: 'https://polygon-rpc.com',
};

export const walletconnectConnector = new WalletConnectConnector({
  rpc: RPC_URLS,
  bridge: 'https://bridge.walletconnect.org',
  chainId: process.env.REACT_APP_DEFAULT_CHAIN_ID as unknown as number,
  qrcode: true,
});

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
}

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injectedConnector,
  [ConnectorNames.WalletConnect]: walletconnectConnector,
};
