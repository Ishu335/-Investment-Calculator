import Header from './components/Header.jsx'
import Input from './components/Input.jsx'
import { useState } from "react";
import Results from './components/Results.jsx';

function App() 
{

   const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1000,
    expectedReturn: 7, 
    duration: 10,
  });
  const validData=userInput.duration>=1;
  function handelChange(inputIdentifier, newValue){
        setUserInput((prevInput)=>{
          return{
            ...prevInput,
            [inputIdentifier]: +newValue
          }
        });
    }
  return (
    <>
        <Header/>
        <Input userInput={userInput} onChnageInput={handelChange}/>
        {!validData && <p className='center'>Duration should be greater than 1 ...</p>}
       {validData && <Results input={userInput}/> } 
    </>
  )
}

export default App
