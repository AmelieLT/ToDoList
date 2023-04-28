import React from 'react'
import CallAxios from '../services/CallAxios'
import { useEffect } from 'react'

const Form = ({ initialForm, activity, setActivities , addedInput, setAddedInput, editActivity, setEditActivities}) => {
  console.log(editActivity)
  console.log(addedInput)
  
  useEffect(() => {
    editActivity ? setAddedInput(editActivity) : setAddedInput(initialForm);
}, [])

  const handleInputChange = (event) => {
    setAddedInput({
      ...addedInput,
      [event.target.name]: event.target.value
    })
  }

  const createActivity = () => {
    CallAxios().submit(addedInput).then(res => {
      setActivities([...activity, res.data]);
    });
  }

  const updateTask = (data) => {
    CallAxios().update(data).then((res) => {
        if (res.status === 200) {
            const editedTask = activity.map(task => task.id === data.id ? data : task);
            setActivities(editedTask);
          
        };
    })};
   
    
 
  const handleSubmit = (event) => {
    event.preventDefault();
    
    addedInput.id === null ? createActivity(addedInput) : updateTask(addedInput)
    handleReset();
  
  }

  const handleReset = () => {
    setAddedInput(initialForm);
    setEditActivities('');
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