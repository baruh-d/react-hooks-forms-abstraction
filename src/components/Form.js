import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  })

  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName: event.target.value,
  //   })
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     lastName: event.target.value,
  //   })
  // }
  function handleChange(e){
    const name = e.target.name;
    let value = e.target.value;
    if(e.target.type === "checkbox"){
      value = e.target.checked;
    }
    setFormData({
          ...formData,
          [name]: value,
    })
  }  
  function handleSubmit(e){
    e.preventDefault();
    console.log(`formData`, formData);
  }
  return (
    <form>
      <input name="firstName" type="text" onChange={handleChange} value={formData.firstName} />
      <input name="lastName" type="text" onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange} checked={formData.admin}/>
      <button type="submit" onSubmit = {handleSubmit}>Submit</button>
    </form>
  );
}

export default Form;
