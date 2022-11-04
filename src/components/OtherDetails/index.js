import React, { Component } from 'react'



class OtherDetails extends Component {
  render() {
    const {values,handlechange,nextStep,prevStep} = this.props


    return (
    
    <div className='bgContainer'>
        <h1 className='header'>Experience Details</h1>
      <div className='inputBox'>
        <label className='labeltext' htmlFor='skill'>
            Skills           
        </label>
        <input type="text" className='inputField' id='skill' onChange={handlechange('skills')} placeholder="ex:python,java,etc" defaultValue={values.status === 1 ? '' : values.skills}/>    
      </div>
      <div className='inputBox'>
        <label className='labeltext' htmlFor='projectName'>
            Enter Project Name         
        </label>
        <input type="text" className='inputField' id='projectName' onChange={handlechange('projectName')} placeholder="ex:xyz project" defaultValue={values.status === 1 ? '' : values.projectName}/>    
      </div>
      
      <div className='inputBox'>
        <label className='labeltext' htmlFor='description' >
            Enter Description          
        </label>
        <input type="text" className='inputField' id='description' onChange={handlechange('projectDescription')} placeholder="briefly explain about project" defaultValue={values.status === 1 ? '' : values.projectDescription}/>    
      </div>
      <div className='inputBox'>
        <label className='labeltext' htmlFor='description' >
            Acheivements          
        </label>
        <input type="text" className='inputField' id='description' onChange={handlechange('achievements')} placeholder="best achivements" defaultValue={values.status === 1 ? '' : values.achievements}/>    
      </div>
        <div className='buttonContainer'>
      
            <button type="button" className='button' onClick={prevStep}>Back</button>
            <button type="button" className='button' onClick={nextStep}>View</button>
        </div>
      </div>
      
    )
  }
}

export default OtherDetails
