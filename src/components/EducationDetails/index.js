import React, { Component } from 'react'

import './index.css'

class EducationDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
};


  render() {
    const {values,handlechange,nextStep,prevStep} = this.props
 
    return (
    
    <div className='bgContainer'>
        <h1 className='header'>Education Details</h1>
      <form onSubmit={this.continue}>
      <div className='inputBox'>
        <label className='labeltext' htmlFor='universityName'>
            Enter University Name           
        </label>
        <input type="text" className='inputField' id='universityName' onChange={handlechange('collegeName')} placeholder="ex:abcd university" defaultValue={values.status === 1 ? '' : values.collegeName}/>    
      </div>
      <div className='inputBox'>
        <label className='labeltext' htmlFor='degree'>
            Enter Degree          
        </label>
        <input type="text" className='inputField' id='degree' onChange={handlechange('degree')} placeholder="ex:B-Tech/Bsc,etc" defaultValue={values.status === 1 ? '' : values.degree}/>    
      </div>
      <div className='inputBox'>
        <label className='labeltext' htmlFor='course'>
            Enter Course Name          
        </label>
        <input type="text" className='inputField' id='course' onChange={handlechange('course')} placeholder="ex:Computer Science" defaultValue={values.status === 1 ? '' : values.course}/>    
      </div>
      <div className='inputBox'>
        <label className='labeltext' htmlFor='courseduration'>
            Enter Course Duration          
        </label>
        <input type="text" className='inputField' id='courseduration' onChange={handlechange('courseDuration')} placeholder="ex:2017-2021" defaultValue={values.status === 1 ? '' : values.courseDuration}/>    
      </div>
      
      <div className='inputBox'>
        <label className='labeltext' htmlFor='cgpa' >
            Enter CGPA/Percentage          
        </label>
        <input type="text" className='inputField' id='cgpa' onChange={handlechange('cgpa')} placeholder="ex: 8.0/80" defaultValue={values.status === 1 ? '' : values.cgpa}/>    
      </div>
      <div className='buttonContainer'>
      
        <button type="button" className='button' onClick={prevStep}>Back</button>
        <button type="submit" className='button' >Next</button>
      </div>
      </form>
    </div>
      
    )
  }
}

export default EducationDetails
