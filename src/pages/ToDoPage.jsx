import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import List from '../components/List'
import '../styles/toDoPage.css'
import { useState } from 'react'


const ToDoPage = () => {


  const [activity, setActivities] = useState([]);
  const [editActivity, setEditActivities] = useState();
  

  


  

  return (
    <>
      <Header/>
      <div className="boxToDoPage">
        <Form activity={activity} setActivities={setActivities} editActivity={editActivity} setEditActivities={setEditActivities}/>
        <List activity={activity} setActivities={setActivities} setEditActivities={setEditActivities}/>
      </div>
    </>
    
  )
}

export default ToDoPage