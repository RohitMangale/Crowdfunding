import React from 'react'
import './Forms.css'

const CamCreation = () => {
    return (
        <div>
        <div className="formContainer">
       
          <div className="newForm">
            <div className="newLeft">
    
              <form className="newWrapper" >
                <h1>Campaign Creation</h1>
    
                <div className="f-onerow">
                  <input 
                  type="text" placeholder="Institute ID" required />
                  <input 
                  type="name" placeholder="Institute Name" required />
                </div>
    
               
                <div className="f-onerow">
                  <input 
                  type="url" placeholder="Institute Website Link" required />
                  <input 
                  type="email" placeholder="Institute Email" required />
                </div>
    
                <div className="f-margintop">
            <label>Upload Institute Logo</label>
            <div className="f-radio">
                <input 
                type="file" />           
            </div>
            </div>
            <div className="f-onerow">
                  <input 
                  type="text" placeholder="Enter City" required />
                  <input 
                  type="text" placeholder="Enter State" required />
                </div>
    
                <div className="f-onerow">
                  <input 
                  type="text" placeholder="AICTE Approved? (Yes/No)" required />
                  <input 
                  type="number" placeholder="Institute Contact" maxLength={10} minLength={10} required />
                </div>
     
    
            <button className="submitForm" type="submit">Register</button>
    
              </form>
            </div>
    
            <div className="newRight">
              {/* <img src="https://www.medianama.com/wp-content/uploads/2022/09/UAVs-help2.jpeg" alt="" /> */}
            </div>
          </div>
        </div>
        </div>
    )
}

export default CamCreation
