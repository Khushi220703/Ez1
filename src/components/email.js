import React, { useState } from 'react'
import Ez from "../images/ez.png"
import Audio from "../images/audio.png"
import Data from "../images/data.png"
import Design from "../images/design.png"
import Translation from "../images/translation.png"
import Research from "../images/Research.png"
import Presentation from "../images/presentation.png"
const Email = () => {

    // hooks for email and error.
    const [emails, setEmails] = useState("");
    const [error, setError] = useState("")

    // regex for email and email validation.
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;

    function isValidEmail(email) {
        return emailPattern.test(email);
      }

      // handling form after submit.
    const handleSubmit = async (e) =>
    {  setError("");
        e.preventDefault();
       
        if(!emails)
        {
            console.log("emapty email");
            return;
        }
        if(!isValidEmail(emails))
        {console.log(emails);
            return;
        }

        try {
            const response = await fetch('http://34.225.132.160:8002/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email:emails}),
            });
            const data = await response.json();
            console.log(data); // handle the response from the API

            if(data.detail === "Incorrect Email")
            {
                setError("*****Invalid email Please check!")
            }
            else
            {
                setError("****Form submitted");
            }
           
            setEmails("");
        } catch (error) {
           
            console.error('Error:', error);
        }
     }

     // adding some style to the error content.
     const red =
     {
        color: "red",
        fontWeight: "600"
     }

     const green = 
     {
        color:"green",
        fontWeight: "600"
     }

  return (
    <div>
      //This is whole parent box having both left and right side contents.
      <div className='container'>
      //This is first child contains the left content like form,titlt and about.
        <div className="container-1 title">
                <div className="box-1">
                    <img src={Ez} alt="" className="logo" />
                </div>
                <div className="box-2">
                    <p>Suite of Business Support Services</p>
                </div>
                <div className="box-3">
                    <p className="arcticle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed placeat corporis accusantium numquam totam minima debitis officia pariatur cumque, illum quidem, 
                    fugiat libero saepe id, et sequi consectetur nostrum.</p>
                </div>
                <div className="box-1">
                    <div style={error === "*****Invalid email Please check!" ?red : green }>{error}</div>
                    <form  method="post" className='form-email' onSubmit={handleSubmit}>
                        <input type="email" name="email" id="email-id" value={emails} className="emails" placeholder='Email Address' onChange={(e) =>(setEmails(e.target.value))} required/>
                        <button type="submit">Contact Me</button>
                    </form>
                </div>
        </div>
    //this is the right box second child of container having all the blue boxes and these blue boxes are child of it name box-n. (n>0 and n<7).
        <div className="container-2">
                <div className="box-1 conteinter-2-box">
                    <img src={Presentation} alt="" className="presentation box-1-img" />
                    <p className='para-1'>
                        Presentation Design
                    </p>
                    <p className='para-2'>
                       Lorem ipsum dolor, sit amet Lorem ipsum dolor, 
                       sit amet Lorem ipsum dolor, sit amet
                    </p>
                </div>
    
                <div className="box-2 conteinter-2-box">
                    <img src={Audio} alt="" className="audio box-2-img" />
                    <p className='para-1'>
                        Audio-Visual Production
                    </p>
                    <p className='para-2'>
                       Lorem ipsum dolor, sit amet Lorem ipsum dolor, 
                       sit amet Lorem ipsum dolor, sit amet
                    </p>
                </div>
    
                <div className="box-3 conteinter-2-box">
                     <img src={Translation} alt="" className="translation box-3-img" />
                    <p className='para-1'>
                       Transalation Services
                    </p>
                    <p className='para-2'>
                       Lorem ipsum dolor, sit amet Lorem ipsum dolor, 
                       sit amet Lorem ipsum dolor, sit amet
                    </p>
                </div>
    
                <div className="box-4 conteinter-2-box">
                    <img src={Design} alt="" className="graphic box-4-img" />
                    <p className='para-1'>
                       Graphic Design
                    </p>
                    <p className='para-2'>
                       Lorem ipsum dolor, sit amet Lorem ipsum dolor, 
                       sit amet Lorem ipsum dolor, sit amet
                    </p>
                </div>
    
                <div className="box-5 conteinter-2-box">
                    <img src={Research} alt="" className="reasearch box-5-img" />
                    <p className='para-1'>
                       Research Analytics
                    </p>
                    <p className='para-2'>
                       Lorem ipsum dolor, sit amet Lorem ipsum dolor, 
                       sit amet Lorem ipsum dolor, sit amet
                    </p>
                </div>
    
                <div className="box-6 conteinter-2-box">
                    <img src={Data} alt="" className="data box-6-img" />
                    <p className='para-1'>
                        Data processing
                    </p>
                    <p className='para-2'>
                       Lorem ipsum dolor, sit amet Lorem ipsum dolor, 
                       sit amet Lorem ipsum dolor, sit amet
                    </p>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Email
