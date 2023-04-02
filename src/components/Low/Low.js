import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Low.css'

function Low() {
  let [lowTasks, setTasks] = useState([])
  let navigate = useNavigate()
  let toHome = () => {
    navigate('/')
  }
  return (
    <div className='color-primary low'>
      {
        useEffect(() => {
          axios.get("http://localhost:3001/LowPriority")
            .then(response => {
              if (response.status === 200) {
                setTasks(response.data)
              }
            })
            .catch(err => {
              console.log(err)
            })
        }, [])
      }
      <div className="mt-3">
        <table className='table table-striped table-bordered table-hover w-75'>
          <thead><tr>
            <th className='display-5 text-center'>Low Priority Tasks</th>
          </tr>
          </thead>
          <tbody>
            {
              lowTasks?.map(todotask =>
              (
                <tr>
                  <td><p className='lead'>{todotask.task}</p></td>
                </tr>
              )
              )
            }
          </tbody>
        </table>
        {lowTasks.length == 0 && <h2 className='text-danger'>Empty !!</h2>}
        <button className="btn btn-secondary float-left" onClick={toHome}>Back to Home</button>
      </div>
    </div>
  )
}

export default Low