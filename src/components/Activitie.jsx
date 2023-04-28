import React from 'react'
import pen from '../assets/images/pen-to-square-solid.svg'
import trash from '../assets/images/trash-solid.svg'
import '../styles/style.css'

const Activitie = ({deleteActivity, activity, id, text, setEditActivities, item}) => {
  return (
    <>
        <div className='boxActivitie'>
            <p>{text}</p>
            <div className='boxIcons'>
              <button onClick={() => setEditActivities(item)}>
                <img src={pen} alt='cambia tu actividad'/>
              </button>

              <button onClick={()=>deleteActivity(id)}>
               <img src={trash} alt='borra esa actividad de la lista'/>
              </button>
            </div>
        </div>
    </>
  )
}

export default Activitie