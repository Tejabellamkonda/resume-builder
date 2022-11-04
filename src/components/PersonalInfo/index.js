import React, { Component } from 'react'
import './index.css'
class PersonalDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
};



  render() {
    const {values,handlechange} = this.props
    return (
    
    <div className='bgContainer'>
        <h1 className='header'>Personal Details</h1>
      <form onSubmit={this.continue} className="formContainer">      
        <div className='inputBox '>
        <label className='labeltext' htmlFor='firstName'>
            Enter First Name           
        </label>
        <input type="text" className='inputField' id='firstName' onChange={handlechange('firstName')} placeholder='ex:Sachin' defaultValue={values.status === 1 ? '' : values.firstName}/>    
      </div>
      <div className='inputBox'>
        <label className='labeltext' htmlFor='lastName'>
            Enter Last Name          
        </label>
        <input type="text" className='inputField' id='lastName' onChange={handlechange('lastName')} placeholder="ex:Tendulkar" defaultValue={values.status === 1 ? '' : values.lastName}/>    
      </div>
      
      <div className='inputBox'>
        <label className='labeltext' htmlFor='eamil' >
            Enter Email          
        </label>
        <input type="email" className='inputField' id='eamil' onChange={handlechange('email')} placeholder="ex:abcd@gmail.com" defaultValue={values.status === 1 ? '' : values.email}/>    
      </div>
      <div className='inputBox'>
        <label className='labeltext' htmlFor='address'>
            Enter Address          
        </label>
        <input type="text" className='inputField' id='address' onChange={handlechange('Address')} placeholder="ex:place,city" defaultValue={values.status === 1 ? '' : values.Address}/>    
      </div>
      <div className='inputBox'>
        <label className='labeltext' htmlFor='MobileNo'>
            Enter Mobile No         
        </label>
        <input type="text" className='inputField' id='MobileNo' onChange={handlechange('mobileNo')} placeholder="ex:1234567890" defaultValue={values.status === 1 ? '' : values.mobileNo}/>    
      </div>
      <div>
        <button type="submit" className='button' >Next</button>
      </div>
      </form>

      </div>
      
    )
  }
}

export default PersonalDetails
