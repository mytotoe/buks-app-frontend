import { useState } from "react";
import OnboardingView from "./onboardingView";
import { serializedData, saveData } from "../../utils/helper";

export const OnboardingContainer = (props:any) => {
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

  const validatePassword = (password:string, passwordConfirm:string) => {
    return password === passwordConfirm;
  }

  const handleSubmit = () => {
    console.log("got here...", formData)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }
    fetch("http://localhost:4000/api/v1/signup", requestOptions)
      .then(response => response.json())
      .then(res => {
       saveData("userData", serializedData(res)); 
       props.history.push('/feeds');
      })
      .catch(error => {
        console.log(error)
      })
  }

  return <OnboardingView 
    handleSubmit={handleSubmit}
    updateFormData={updateFormData}
    validatePassword={validatePassword}
    formData={formData}
  />
}