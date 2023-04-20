import React from 'react'
import CallAxios from '../services/CallAxios'

const Form = ({ initialForm, activity, setActivities , addedInput, setAddedInput }) => {

  const handleInputChange = (event) => {
    setAddedInput({
      ...addedInput,
      [event.target.name]: event.target.value
    })
  }
 
  const handleReset = () => {
    addedInput(initialForm);
    //setEditTask('');
    //setError('');
};


  const handleSubmit = async (event) => {
    event.preventDefault();
    await CallAxios().submit(addedInput).then(res => {
      setActivities([...activity, res.data]);
    });
    handleReset();
  }

 
  return (
    <>
   <form onSubmit={handleSubmit}>
        <div className='boxForm'>
          <input className='inActivity' type='text' name='text' placeholder='introduzca actividad' onChange={handleInputChange} required ></input>
          <button className='btnAgregar' type='submit'>agregar</button>
        </div>
    </form> 
    </>
  )
}

export default Form