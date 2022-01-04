import React, {useState} from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'
import logo from "./img-5.png"

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div className='form-container'>
            <div className='form-content-left'>
                <img src={logo} className='form-img'/>
            </div>

            {!isSubmitted ? <FormSignup submitForm=
            {submitForm} /> : (<FormSuccess />)}
        </div>
    )
}

export default Form
