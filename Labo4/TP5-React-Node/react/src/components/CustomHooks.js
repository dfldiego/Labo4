import React, { useState } from "react";

const useSignUpForm = (cb, id) => {
  const [inputs, setInputs] = useState({});

  //atrapar el evento submit
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    debugger;
    console.log(inputs);
    // parametros de datos post
    const datapost = JSON.stringify(inputs);
    fetch(`http://localhost:3000/instrumento/${id}`, {
      method: "POST",
      body: datapost,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
    .then(response => console.log(response))

    cb();
  };

  const handleOnLoad = (data) => {
    setInputs((inputs) => ({
      ...inputs,
      ...data
    }));    
  }
  //atrapar el evento cuando cambia el input
  const handleInputChange = (event) => {
    
    if (!event.target) {
      return;
    }
    debugger;
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
    console.log(inputs.imagen);
  };

  //atrapar el evento cuando cambia el input file
  const handleInputChangeImage = (event) => {
    
    if (!event.target) {
      return;
    }
    debugger;
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.files[0].name
    }));
    console.log(inputs.imagen);
  };

  return {
    handleSubmit,
    handleInputChange,
    handleInputChangeImage,
    handleOnLoad,
    inputs
  };
};

export default useSignUpForm;
