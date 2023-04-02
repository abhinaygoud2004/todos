import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AllTasks() {
  let [allTasks, setTasks] = useState([])
  let navigate = useNavigate()
  let toHome = () => {
    navigate('/')
  }
  return (
    <div className='alltasks'>
      {
        useEffect(() => {
          axios.get("http://localhost:3001/AllTasks")
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
              <td className="text-center display-5">All tasks</td>
            </tr>
          </thead>
          <tbody>
            {
              allTasks?.map(todotask => (
                <tr>
                  <td>    <p className='lead'>{todotask.task}</p></td>
                </tr>
              ))
            }
          </tbody>
          {allTasks.length == 0 && <h2 className='text-danger'>Empty !!</h2>}
          <button className="btn btn-secondary float-left mt-2" onClick={toHome}>Back to Home</button>
        </table>
      </div>

    </div>
  )
}

export default AllTasks