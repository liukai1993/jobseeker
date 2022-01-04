import { useState, useEffect } from "react";
import axios from "axios";


const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        fullname: '',
        email: '',
        dob: '',
        phone: '',
        address: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleChange = e => {
        const { name, value} =e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        console.log(values)
        axios.post('https://job-seeker-337208.wl.r.appspot.com/api', values)
            .then(response =>{
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    }, [errors])

    return {handleChange, values, handleSubmit, errors};
}



export default useForm;