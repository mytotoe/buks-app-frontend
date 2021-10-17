import { useState } from "react";
import AuthView from "./authView";
import { serializedData, saveData } from "../../utils/helper";

export const AuthContainer = (props:any) => {

  const [formData, setFormData] = useState({});

  const updateFormData = (event:any) => {
    
    const type = event.target.name;
    const value = event.target.value;

    setFormData(prevFormData => {
      return { 
        ...prevFormData, 
        [type]: value 
      }
    })
  }

  const handleSubmit = () => {
    console.log("got here...", formData)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }
    fetch("http://localhost:4000/api/v1/login", requestOptions)
      .then(response => response.json())
      .then(res => {
       saveData("userData", serializedData(res)); 
       props.history.push('/feeds');
      })
      .catch(error => {
        console.log(error)
      })
  }

  return <AuthView 
    handleSubmit={handleSubmit}
    updateFormData={updateFormData}
  />
}