
import React, {Component} from "react"


import './index.css'

class Resume extends Component{


     
    render(){
   
    const {values,prevStep} = this.props
    const{firstName,lastName,email,mobileNo,Address,collegeName,course,cgpa,courseDuration,skills,projectName,projectDescription,achievements,certifications} = values
    return(
        <div >
                <div className="container resume" >
                    <div>
                        <h1 className="name"> {firstName} {lastName}</h1>
                        <h2 className="name details">{Address}|{mobileNo}|{email}|</h2>
                        <hr className="line"/>
                    </div>
                    <div className="detailsConntainer">
                        <h2 className="title"> Education</h2> 
                        <hr className="line"/>
                        <h4 className="courseName" >{collegeName} <span>({courseDuration})</span></h4>
                        <p className="courseName">{course} ({`${cgpa} CGPA`})</p>
                        
                        
                    </div>
                    <div className="detailsConntainer">
                        <h2 className="title"> Skills</h2> 
                        <hr className="line"/>
                        <h4 >{skills}</h4>
                        
                    </div>
                    <div className="detailsConntainer">
                        <h2 className="title"> Projects</h2> 
                        <hr className="line"/>
                        <h2>{projectName}</h2>
                        <p>{projectDescription}</p>
                        
                    </div>
                    <div className="detailsConntainer">
                        <h2 className="title">Acheivements</h2> 
                        <hr className="line"/>
                        
                        <p>{achievements}</p>
                        
                    </div>
                

                </div>
           
            
            <div className='buttons-Container'>
                             
            <button type="button" className='button' onClick={prevStep}>Back</button>
            <button type="button" className='download' onClick= {window.print()} >Download Resume</button>
                
            
            </div>

        </div>
    )
            }
}

export default Resume