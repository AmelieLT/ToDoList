import React from 'react'
import Activitie from './Activitie'
import '../styles/style.css'
import { useEffect } from 'react'
import CallAxios from '../services/CallAxios'

const List = ({activity, setActivities, setEditActivities}) => {



async function callGet(){
  await CallAxios().get()
  .then(res => {
    setActivities(res.data)
  })
  }
  useEffect(() => {callGet()},[])

 

 async function deleteActivity(id){
  await CallAxios().trash(id)
  const fiteredActivities = activity.filter(task =>task.id !== id)
  setActivities(fiteredActivities)
  }
  useEffect(() => {callGet()},[])

return(
    <>
      <ul className='boxList'> 
        {activity.map(item => ( 
          <li key={item.id}> 
              <Activitie item={item} deleteActivity={deleteActivity} setEditActivities={setEditActivities}/>
          </li> ))} 
      </ul>
    </>
)}
export default List