import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { indexerClient } from './constant';


const Display = () => {


  //1. Add constant text to store the text the user enters and setText is used to change the value of text
  const [text, setText] = useState(null);


  //2. using Params to get the transaction id from the url and check it from the console log
  const transId = useParams();
  console.log(transId["transId"]);


  //3. using useEffect to fetch the data from the blockchain
  useEffect(() => {
    async function fetchData() {
      await fetchformDataFromBlockchain();
    }
    fetchData();
  }, []);


  //4. using async function to fetch the data from the blockchain
  async function fetchformDataFromBlockchain() {
    //  using indexerClient to look up the transaction details by validating with the provided transaction id
    const info = await indexerClient.lookupTransactionByID(transId["transId"]
);
    //  obtain all data from algorand blockchain and set them to a constant variable named data
    await info.do().then(async (transInfo) => {
      console.log(transInfo.transaction["application-transaction"]["application-args"][0]);
      const dtext = window.atob(transInfo.transaction["application-transaction"]["application-args"][0]);
      const text = Object.values(JSON.parse(dtext));
      setText(text);
    });
  }


  return (
    <div>
       <h1>Display Page</h1>
    <h2>{text}</h2>
    <a href={`https://testnet.algoscan.app/tx/${transId["transId"]}`}>View at algo scan</a>
    </div>
  );
};


export default Display;
