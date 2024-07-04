import { useState, useEffect } from 'react' ;
export default function App() {
    const [length,setLength]=useState(8)
    const[includeUpperCase,setIncludeUpperCase]=useState(true)
    const[includeLowerCase,setIncludeLowerCase]=useState(true)
    const[includeNumber,setIncludeNumber]=useState(true)
    const[includeSymbol,setIncludeSymbol]=useState(true)

    const [password,setPassword]=useState("")
    
    const generatePassword=()=>{
        let charset = "";
        if(includeUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
        if (includeNumber) charset += "0123456789";
        if (includeSymbol) charset += "!@#$%^&*()";

        let geneatedPassword="";
        for(let i=0; i<=length; i++){
            const randomnumber=Math.floor(Math.random()*charset.length)
            geneatedPassword += charset[randomnumber]            
        }
        setPassword(geneatedPassword)
        
    }
    
        const handleLength=(e)=>{
        setLength(e.target.value)
    }
    const copyPassword=()=>{
        navigator.clipboard.writeText(password)
        alert(`password is copied your password id ${password}`)
    }
  return (
      <>
          <div className="password-generator">
              <h2>Strong Password Generator</h2>
              
              <div className="input-group">
                  <label htmlFor="num">Password Length</label>
                  <input type="number" id="num" value={length} onChange={parseInt(handleLength)}/>
              </div>

               <div className="checkbox-group">
                   <input type="checkbox" id="upper"  checked={includeUpperCase} 
                       onChange={(e)=> setIncludeUpperCase(e.target.checked)}/>
                   <label htmlFor="upper"> Include Upper Case</label>
               </div>

              <div className="checkbox-group">
                   <input type="checkbox" id="lower" checked={includeLowerCase}
                       onChange={(e)=> setIncludeLowerCase(e.target.checked)}
                       />
                   <label htmlFor="lower"> Include Lower Case</label>
               </div>

              <div className="checkbox-group">
                   <input type="checkbox" id="number" checked={includeNumber}
                       onChange={(e)=> setIncludeNumber(e.target.checked)}
                       />
                   <label htmlFor="number"> Include Number</label>
               </div>

              <div className="checkbox-group">
                   <input type="checkbox" id="symbol" checked={includeSymbol}
                       onChange={(e)=> setIncludeSymbol(e.target.checked)}
                       />
                   <label htmlFor="symbol"> Include Symbol</label>
               </div>

              <button className="generate-btn" onClick={generatePassword}>Generate Password</button>

              <div className="genetated-password">
                  <input type="text" readOnly value={password} />
                  <button className="copy-btn" onClick={copyPassword}>Copy</button>
              </div>
              
          </div>
     </>
  )
}
