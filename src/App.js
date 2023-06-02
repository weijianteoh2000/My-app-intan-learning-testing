import logo from './logo.svg';
import { PeraWalletConnect } from "@perawallet/connect";
import './App.css';
import { useState} from 'react';
import MyRouter from './router';
import DataCRUD from './view/FirestoreCRUD';

function App() {

  const [account, setAccount] = useState(null);
  const connectPeraAlgoWallet = async () => {
    let account = "";
    const peraConnect = new PeraWalletConnect({
      shouldShowSignTxnToast: false
    });
    await peraConnect.connect()
      .then((value) => {
        console.log('Connected with Pera Wallet. Account address:', value);
        setAccount(value);
      })
      .catch((err) => {
        console.error('Error connecting with Pera Wallet:', err);
      });
    return account;
  }

  return (
    <div className="App">

      <header className="App-header">
      {(account!=null)?<MyRouter/>:
        <button onClick={connectPeraAlgoWallet}>Connect to Pera Algo Wallet</button>
      }

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <DataCRUD />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        

      </header>
    </div>
  );
}

export default App;
