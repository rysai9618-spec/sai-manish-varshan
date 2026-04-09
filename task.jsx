import React, { useState } from "react";
function TextInput({label,type,name,value,onChange,error}) {
  return (
    <div>
      <label>{label}</label><br/>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <p style={{color:"red"}}>{error}</p>
      <br/>
    </div>
  );
}
function App(){
  const initialState={
    name:"",
    email:"",
    password:""
  };
  const[formData,setFormData]=useState(initialState);
  const[errors,setErrors]=useState({});
  const[submittedData,setSubmittedData]=useState(null);
  function handleChange(e){
    const{name,value}=e.target;
    setFormData({
      ...formData,
      [name]:value
    });
    validate(name,value);
  }
  function validate(name,value){
    let errorMsg="";
    if(!value){
      errorMsg="This field is required";
    }
    if(name==="email"){
      const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(value && !emailPattern.test(value)){
        errorMsg="Invalid email format";
      }
    }
    setErrors({
      ...errors,
      [name]:errorMsg
    });
  }
  function handleSubmit(e){
    e.preventDefault();
    setSubmittedData(formData);
  }
  function handleClear(){
    setFormData(initialState);
    setErrors({});
    setSubmittedData(null);
  }
  const isValid=
    formData.name &&
    formData.email &&
    formData.password &&
    !errors.name &&
    !errors.email &&
    !errors.password;
  return(
    <>
    <h2>Signup Form</h2>
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
      />
      <TextInput
        label="Email"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextInput
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
      <button type="button" onClick={handleClear}>
      </button>
    </form>
    {submittedData && (
      <div>
        <h3>Preview</h3>
        <p>Name: {submittedData.name}</p>
        <p>Email: {submittedData.email}</p>
        <p>Password: {submittedData.password}</p>
      </div>
    )}
    </>
  );
}
export default App;