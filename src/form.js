import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { deployContract } from './utils';
import algosdk from 'algosdk';

const Form = () => {
  const navigate = useNavigate();
  //b. change the navigateToDisplay function by adding id as the parameter and the path variable.
  const navigateToDisplay = (id) => { //all yellow is function
    navigate(`display/${id}`); //navigate to display component (oren)
  }

  //add c-f here

  //c. Add a state variable to store the text the user enters
  const [text, setText] = useState('');
//d. Create a function that will handle user entered mnemonics.
   const handleClick = async (event) => {
    event.preventDefault();
    const enteredInput = await window.prompt('Please enter wallet mnemonic');
    return enteredInput;
  }
//e. Create a function that will handle the form submission and send the text to the blockchain
  const handleSubmit = async (e) => {
    e.preventDefault();
    const mnemonic = await handleClick(e);
    const userAcc = await algosdk.mnemonicToSecretKey(mnemonic);
    // Do something with the submitted text at the blockchain
    const transid = await deployContract(userAcc,text);
    //view the created app id in the console
    console.log(transid);
    //redirect to the display page
    navigateToDisplay(transid);
  };
//f. Create a function that will handle the text input
  const handleChange = (e) => {
    setText(e.target.value);
  };



  return (
    <div>Form page<br></br>
      <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form> 
      {/* button submit navigate to display */}
      </div>
  );
};


export default Form;
