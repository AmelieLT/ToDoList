import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import List from '../components/List'
import '../styles/toDoPage.css'
import { useState } from 'react'

const ToDoPage = () => {

  const initialForm = {
    id: null,
    text: ''
};

  const [addedInput, setAddedInput] = useState(initialForm)
  const [activity, setActivities] = useState([]);

  return (
    <>
      <Header/>
      <div className="boxToDoPage">
        <Form initialForm={initialForm} addedInput={addedInput} setAddedInput={setAddedInput} activity={activity} setActivities={setActivities}/>
        <List activity={activity} setActivities={setActivities}/>
      </div>
    </>
    
  )
}

export default ToDoPage