export default function Validation(values) {
    const errors = {};
  
    // Define the password pattern correctly as a RegExp object
   
    if (!values.Tin) {
      errors.Tin = "TIN is required";
    }
  
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 10 || values.password.length > 12) {
      errors.password = "Password must be between 10 and 12 characters long";
    } 
  
    return errors;
  }
  