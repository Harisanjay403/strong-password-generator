import { useState, useEffect } from 'react' ;
export default function App() {
  return (
      <>
          <div className="password-generator">
              <h2>Strong Password Generator</h2>
              
              <div className="input-group">
                  <label htmlFor="num">Password Length</label>
                  <input type="number" id="num" />
              </div>

               <div className="checkbox-group">
                   <input type="checkbox" id="upper"/>
                   <label htmlFor="upper"> Include Upper Case</label>
               </div>

              <div className="checkbox-group">
                   <input type="checkbox" id="lower"/>
                   <label htmlFor="lower"> Include Lower Case</label>
               </div>

              <div className="checkbox-group">
                   <input type="checkbox" id="number"/>
                   <label htmlFor="number"> Include Number</label>
               </div>

              <div className="checkbox-group">
                   <input type="checkbox" id="symbol"/>
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
