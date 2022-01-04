import React from 'react';
import useForm from './useForm';
import validate from './validateInfo'
import './Form.css'

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

    return (
        <div className="form-content-right">
            <form className='form' onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className='form-inputs'>
                    <label htmlFor='fullname'
                    className='form-label'>
                        Full Name
                    </label>
                    <input 
                        id='fullname'
                        type='text' 
                        name='fullname' 
                        className='form-input' 
                        placeholder='Enter your full name'
                        value={values.fullname}
                        onChange={handleChange}
                    />
                    {errors.fullname && <p>{errors.fullname}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='dob'
                    className='form-label'>
                        Date of Birth
                    </label>
                    <input 
                        id='dob'
                        type='date' 
                        name='dob' 
                        className='form-input' 
                        placeholder='Enter your date of birth'
                        value={values.dob}
                        onChange={handleChange}
                    />
                    {errors.dob && <p>{errors.dob}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='phonenumber'
                    className='form-label'>
                        Phone Number
                    </label>
                    <input 
                        id='phone'
                        type='tel' 
                        name='phone' 
                        className='form-input' 
                        placeholder='Enter your phone number'
                        value={values.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <p>{errors.phone}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email'
                    className='form-label'>
                        Email
                    </label>
                    <input 
                        id='email'
                        type='email' 
                        name='email' 
                        className='form-input' 
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                
                <div className='form-inputs'>
                    <label htmlFor='Address'
                    className='form-label'>
                        Address
                    </label>
                    <input 
                        id='address'
                        type='address' 
                        name='address' 
                        className='form-input' 
                        placeholder='Enter your address'
                        value={values.address}
                        onChange={handleChange}
                    />
                    {errors.address && <p>{errors.address}</p>}
                </div>

                <button className='form-input-btn' type='submit'>
                    Create Account
                </button>
                
            </form>
        </div>
    )
}

export default FormSignup
