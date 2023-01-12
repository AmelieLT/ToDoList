import React from 'react'
import CallAxios from '../services/CallAxios'

const Form = ({ addedInput, setAddedInput }) => {

  const handleInputChange = (event) => {
    setAddedInput({
      ...addedInput,
      [event.target.text]: event.target.value
    })
  }

  const handleSubmit = (event,) => {
    event.preventDefault();
    CallAxios().post(addedInput);

  }

  return (
    <>
   <form onSubmit={handleSubmit}>
        <div className='boxForm'>
          <input className='inActivity' type='text' text='text' placeholder='introduzca actividad' onChange={handleInputChange} required ></input>
          <button className='btnAgregar' type='submit'>agregar</button>
        </div>
    </form> 
    </>
  )
}

export default Form