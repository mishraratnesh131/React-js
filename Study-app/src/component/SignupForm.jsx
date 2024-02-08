import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const SignupForm = () => {

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [showPassword, setShowPassword] = useState(false)
    function changeHandler(event) {
        setFormData((prevData)=>(
           { ...prevData,
            [event.target.name]:[even.target.value]
        }
        ))
    }
  return (
    <div>
        <div>
            <button>
                Student
            </button>
            <button>
                Instructor
            </button>
        </div>
        <form>
           <div>
        
           <label>
                <p>First Name<sup>*</sup></p>
                <input 
                required
                type="text"
                name='Firstname'
                onChange={changeHandler}
                placeholder='Enter First Name'
                value={formData.firstName}
                 />
            </label>

            <label>
                <p>Last Name<sup>*</sup></p>
                <input 
                required
                type="text"
                name='Lastname'
                onChange={changeHandler}
                placeholder='Enter Last Name'
                value={formData.lastName}
                 />
            </label>
           </div>
           <label>
                <p>First Name<sup>*</sup></p>
                <input 
                required
                type="email"
                name='Email'
                onChange={changeHandler}
                placeholder='Enter Email'
                value={formData.email}
                 />
            </label>
            <div>
            <label>
                <p>Create Password<sup>*</sup></p>
                <input 
                required
                type={showPassword ? ("text") : ("password")} 
                name='Password'
                onChange={changeHandler}
                placeholder='Enter Password'
                value={formData.password}
                 />
                 <span onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)};
             </span>
            </label>

            <label>
                <p>Confirm Password<sup>*</sup></p>
                <input 
                required
                type={showPassword ? ("text") : ("password")} 
                name='confirmPassword'
                onChange={changeHandler}
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                 />
                 <span onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)};
             </span>
            </label>
            </div>
            <button>
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignupForm