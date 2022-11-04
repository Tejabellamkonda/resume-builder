import React, { Component } from 'react'
import PersonalDetails from '../PersonalInfo'
import EducationDetails from '../EducationDetails'
import OtherDetails from '../OtherDetails'
import Resume from '../Resume'

class UserDetails extends Component {
    state ={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        mobileNo:'',
        Address:'',
        
        degree:'',
        collegeName:'',
        course:'',
        cgpa:'',
        courseDuration:'',

        skills:'',
        projectName:'',
        projectDescription:'',
        achievements:'',
        certifications:'',

        status:0,
    }

    nextStep =()=>{
        const {step,firstName,lastName} = this.state
        
            this.setState({step:step+1})
        
    }

    prevStep =()=>{
        const {step} = this.state
        this.setState({step:step-1})
    }

    handlechange = input => event=>{
        this.setState({[input]:event.target.value})
    }

  render() {
    const {step} = this.state
    const {firstName,lastName,email,mobileNo,Address,degree,collegeName,course,cgpa,courseDuration,skills,projectName,projectDescription,achievements,certifications,status} = this.state
    const values = {firstName,lastName,email,mobileNo,Address,collegeName,degree,course,cgpa,courseDuration,skills,projectName,projectDescription,achievements,certifications,status}
    

    switch(step){
        case 1:
            return(
                <> 
                <h1>Let's Build Your Resume</h1>
                    <hr/>                   
                <PersonalDetails
                    nextStep={this.nextStep}
                    handlechange={this.handlechange}
                    values = {values}/>
                    </>

            )
        case 2:
            return(
                <>
                <h1>Let's Build Your Resume</h1>
                <hr/>
                <EducationDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handlechange={this.handlechange}
                values = {values}/>
                </>
            ) 
            case 3:
                return(
                    <> 
                    <h1>Let's Build Your Resume</h1>
                    <hr/>                   
                    <OtherDetails  
                    nextStep={this.nextStep}                
                    prevStep={this.prevStep}
                    handlechange={this.handlechange}
                    values = {values}/>
                    </>

                )
                case 4:
                    return(
                        <Resume                      
                        prevStep={this.prevStep}
                        handlechange={this.handlechange}
                        values = {values}/>
                    )
                 
            
    }
  }
}

export default UserDetails
