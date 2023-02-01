import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Harmony } from '@harmony-js/core';
import AppContainer from './app';
import Web3 from 'web3';
function getLibrary(provider: any): Web3Provider | Harmony {
  var library: Web3Provider | Harmony;  

  if (provider?.chainType === 'hmy') {
    library = provider.blockchain;
  } else {
    library = new Web3Provider(provider);
    library.pollingInterval = 12000;
  }

  return library;
}
const App = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AppContainer />
    </Web3ReactProvider>
  )
}

export default App