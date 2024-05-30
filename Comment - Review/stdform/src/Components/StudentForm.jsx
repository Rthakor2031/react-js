import React, { useState } from 'react'

const StudentForm = () => {
  let [formData , setformdata] = useState({  //here pass the data into obj format using one state dynamically // 
      fullName: "",
      email: "",
      password:"",
      grade: "",
      gender: "",

  });
  // Reset part below side //
  const resetForm = () => {
    setformdata({
      fullName: "",
      email: "",
      password: "",
      grade: "",
      gender: "",
    });
  };


  const handleChange = (e)=>{  // it func work on onchange evt//
    let {name ,value} = e.target;
    setformdata({...formData , [name] : value,});
  }

  const formsubmit = (evt)=>{  // form submit function//
    evt.preventDefault();
    console.log("Data added" , formData);
    resetForm()
  }
  return (
    <div>
        <div className="Outline-box">
        
          <form action="" onSubmit={formsubmit}>
          <h4>Student Registration Form</h4>
            <input type="text" onChange={handleChange} placeholder='Enter Student Fullname*' name='fullName' value={formData.fullName} className='i-feild' /><br /><br />
            <input type="text" onChange={handleChange} placeholder='Enter Student Email@*'  name='email' value={formData.email} className='i-feild'/><br /><br />
            <input type="password" onChange={handleChange} placeholder='Enter Password*' name='password' value={formData.password} className='i-feild'/><br /><br /><br />
              <div style={{display:"flex", justifyContent:"space-evenly"}}>
                  <select name="grade" id="select" value={formData.grade} onChange={handleChange}>
                    <option value="">Select a grade</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                  </select>
                    <div>
                    <input type="radio" name="gender" value="Male" onChange={handleChange} />Male
                    <input type="radio" name="gender" value="FeMale"  onChange={handleChange}/>FeMale
                    <input type="radio" name="gender" value="Other"  onChange={handleChange}/>Other
                    </div>
              </div><br /><br /><br /><br /><br />
                <input type="Submit"  className='btn'/>
          </form>
          <div className='img-box'>
            <img src="https://railsdesigner.com/images/posts/form-validation-turbo-frame.jpg" alt="" />
          </div>
        </div>
    </div>
  )
}

export default StudentForm
