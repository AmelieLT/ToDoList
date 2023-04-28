import React from 'react'
import CallAxios from '../services/CallAxios'

const Form = ({ initialForm, activity, setActivities , addedInput, setAddedInput }) => {

  const handleInputChange = (event) => {
    setAddedInput({
      ...addedInput,
      [event.target.name]: event.target.value
    })
  }
 
  const handleSubmit = (event) => {
    event.preventDefault();
    CallAxios().submit(addedInput).then(res => {
      setActivities([...activity, res.data]);
    });
    handleReset();
  }

  const handleReset = () => {
    setAddedInput(initialForm);
    //setEditTask('');
};
 
  return (
    <>
   <form onSubmit={handleSubmit}>
        <div className='boxForm'>
          <input className='inActivity' type='text' name='text' placeholder='introduzca actividad' value={addedInput.text} onChange={handleInputChange} required ></input>
          <button className='btnAgregar' type='submit'>agregar</button>
        </div>
    </form> 
    </>
  )
}

export default Form