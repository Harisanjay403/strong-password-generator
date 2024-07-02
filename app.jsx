import { useState, useEffect } from 'react' ;
export default function App() {
    const [length,setLength]=useState(8)
    const[includeUpperCase,setIncludeUpperCase]=useState(true)
    const[includeLowerCase,setIncludeLowerCase]=useState(true)
    const[includeNumber,setIncludeNumber]=useState(true)
    const[includeSymbol,setIncludeSymbol]=useState(true)
    const handleLength=(e)=>{
        setLength(e.target.value)
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
                   <input type="checkbox" id="upper"  checked={includeUpperCase}/>
                   <label htmlFor="upper"> Include Upper Case</label>
               </div>

              <div className="checkbox-group">
                   <input type="checkbox" id="lower" checked={includeLowerCase}/>
                   <label htmlFor="lower"> Include Lower Case</label>
               </div>

              <div className="checkbox-group">
                   <input type="checkbox" id="number" checked={includeNumber}/>
                   <label htmlFor="number"> Include Number</label>
               </div>

              <div className="checkbox-group">
                   <input type="checkbox" id="symbol" checked={includeSymbol}/>
                   <label htmlFor="symbol"> Include Symbol</label>
               </div>

              <button className="generate-btn">Generate Password</button>

              <div className="genetated-password">
                  <input type="text" readOnly />
                  <button className="copy-btn">Copy </button>
              </div>
              
          </div>
     </>
  )
}
