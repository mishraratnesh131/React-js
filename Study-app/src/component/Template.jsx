import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
const Template = ({tittle, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div>
        <h1>{tittle}</h1>
        <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
        </p>
        {formtype === "signup" ?
        (<SignupForm setIsLoggedIn = {setIsLoggedIn}/>):
        (<LoginForm setIsLoggedIn = {setIsLoggedIn}/>)}

        <div>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>
        <button>
            <p>Sign Up With Google</p>
        </button>
        <div>
           <img src={frameImage} alt="Pattern" width={558} height={504} loading='lazy' />
           <img src={image} alt="Student" width={558} height={490} loading='lazy' />
        </div>
    </div>
  )
}

export default Template