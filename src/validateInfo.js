export default function validateInfo(values) {
    let errors = {}

    if(!values.fullname.trim()) {
        errors.fullname = "Username required";
    }

    if (!values.email) {
        errors.email = 'Email required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
      if (!values.dob) {
        errors.dob = 'Date of Birth is required';
      } 
    
      if (!values.phone) {
        errors.phone = 'Phone number is required';
      }
      if (!values.address) {
        errors.address = 'Address is required';
      }
      return errors;
}