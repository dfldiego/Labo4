import  { useState } from "react";

const useSignUpForm = (cb, id) => {
  const [inputs, setInputs] = useState({});
  const [imageFile, setimageFile] = useState({});

  //atrapar el evento submit
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    cargaImagen(e);
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
    setInputs({
      ...inputs,
      [event.target.name]: event.target.files[0].name
    });
    setimageFile({
      ...imageFile,
      [event.target.name]: event.target.files[0],
    });
    console.log(inputs.imagen);
  };

  //CARGA IMAGEN
  const cargaImagen = (e) => {
    let formData = new FormData();
    formData.append("imagen", imageFile.imagen);
    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((image) => {
        console.log("image:" + image);
      });
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
