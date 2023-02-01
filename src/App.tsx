import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { Harmony } from '@harmony-js/core';
import AppContainer from './app';
import { Provider } from 'react-redux';
import store from 'store';
import 'antd/dist/reset.css';
import 'styles/common.scss';
import 'styles/override.scss';

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
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AppContainer />
      </Web3ReactProvider>
    </Provider>
  );
};

export default App;
