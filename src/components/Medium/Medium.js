import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Medium() {
  let [mediumTasks, setTasks] = useState([])
  let navigate = useNavigate()
  let toHome = () => {
    navigate('/')
  }
  return (
    <div className='color-primary medium'>
      {
        useEffect(() => {
          axios.get("http://localhost:3001/MediumPriority")
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
        <table className="table table-striped table-hover table-bordered w-75">
          <thead>
            <tr>
              <th className='display-5 text-center'>Medium Priority Tasks</th>
            </tr>
          </thead>
          <tbody>
            {
              mediumTasks?.map(todotask => (
                <tr>
                  <td><p className='lead'>{todotask.task}</p> </td>
                </tr>

              ))
            }
          </tbody>
          {mediumTasks.length == 0 && <h2 className='text-danger'>Empty !!</h2>}
          <button className="btn btn-secondary float-left mt-2" onClick={toHome}>Back to Home</button>
        </table>
      </div>
    </div>
  )
}

export default Medium