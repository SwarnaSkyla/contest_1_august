import {React,useState} from "react";
import './App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus,faTimes,faDivide } from "@fortawesome/free-solid-svg-icons";


function App(){
    const[input1,setInput1]=useState('');
    const[input2,setInput2]=useState('');
    const[result,setResult]=useState('');
    const[error,setError]=useState('');


    const handleInput=(e,setInput)=>{
        setInput(e.target.value);
    };

    const validateInput=()=>{
        if(input1===''||input2===''){
            setError("Both inputs are required!");
            return false;

        }
        if(!isNumeric(input1) || !isNumeric(input2)){
            setError("Inputs must be number");
            return false;
        }

        setError('');
        return true;
    }

    const isNumeric=(value)=>{
        return /^[+-]?\d+(\.\d+)?$/.test(value);
    };


    const handleOPeration=(op)=>{
        if(validateInput()){
            const n1=parseFloat(input1);
            const n2=parseFloat(input2);

            let res;

            switch(op){
                case '+':
                    res=n1+n2;
                    break;
                case '-':
                    res=n1-n2;
                    break;
                case '*':
                    res=n1*n2;
                    break;
                case '/':
                    res=n1/n2;
                    break;
                default:
                    break;
            }
            setResult(res);
            setError('');
        }
    };

    return (
        <div className="container">
        <div className="App">
            <h1>React Calculator</h1>
            <div className="input-container">
            <input type="text" placeholder="num1" value={input1} onChange={(e)=>handleInput(e,setInput1)}/>
            <input type="text" placeholder="num2" value={input2} onChange={(e)=>handleInput(e,setInput2)}/>
            </div>

            <div className="btn">
                <button onClick={()=>handleOPeration('+')}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                <button onClick={()=>handleOPeration('-')}><FontAwesomeIcon icon={faMinus}/></button>
                <button onClick={()=>handleOPeration('*')}><FontAwesomeIcon icon={faTimes}/></button>
                <button onClick={()=>handleOPeration('/')}><FontAwesomeIcon icon={faDivide}/></button>
            </div>
            {error && <div className="error">{error}</div>}
            {result && <div className="success">
                Success!
                Result:{result}</div>}

        </div>
        </div>
    );

}

export default App;