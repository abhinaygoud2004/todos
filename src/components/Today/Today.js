import React from 'react'
import { useContext } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Today.css'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TodosContext } from '../../contexts/TodoListProvider';

function Today() {
  let [completed, setCompleted] = useState([])
  let [todaytasks, setToday] = useState([])
  let isCompleted = (id) => {
    axios.put(`http://localhost:3001/update/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      getTodos();
      funCompleted();
  }
  let funCompleted=()=>{
    axios.get("http://localhost:3001/completed")
    .then(response => {
      if (response.status === 200) {
        setCompleted(response.data)
        console.log(response.data)
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
    useEffect(()=>{
     funCompleted();
    },[])
  let deleteTask = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  let navigate = useNavigate()
  let [todos, addNewTodo] = useContext(TodosContext)
  let { register, handleSubmit, formState: { errors } } = useForm();
  let addTask = (task) => {
    addNewTodo(task)
    navigate('/AllTasks')
  }
  let cancelTask = () => {
    navigate('/')
  }
  let getTodos=()=>{
    axios.get("http://localhost:3001/today")
      .then(response => {
        if (response.status === 200) {
          setToday(response.data)
          console.log(response.data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='today'>

      <h3 className='display-3 mb-3'>Today</h3>
      <div className="">
        {
          useEffect(() => {
            getTodos();
          }, [])
        }
        {
          todaytasks.map((todaytask) => (
            <div className="border border-2 mt-1 p-2 w-75 todayp d-flex gap-5">
              <div className="w-50">            <div className="form-check form-check-inline">
                <form action="">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="true" onClick={() => isCompleted(todaytask.id)} />
                  <label className="form-check-label" for="inlineCheckbox1"><h4>{todaytask.task}</h4></label>
                </form>
              </div>
                <p className='prioritytoday'>{todaytask.priority}</p>
                <p className='categorytoday'>{todaytask.category}</p></div>
              <button onClick={() => deleteTask(todaytask.id)} className='btn fs-4 delete'><span><AiOutlineDelete /></span></button>
            </div>
          ))
        }
      </div>
      <form onSubmit={handleSubmit(addTask)} className='form-today form w-75 mt-2 flex flex-wrap' action="">
        <div className="d-flex gap-2">
        <div className=" divPriority">
          <select class="form-select form-select-sm prioritySelect " aria-label=".form-select-sm example" {...register("Priority", { required: true })}>
            <option selected disabled value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        {errors.Priority?.type === "required" && <p className='text-danger fw-bold'>*Priority is required</p>}
        <div className="">
          <select class="form-select form-select-sm  category justify-evenly" aria-label=".form-select-sm example" {...register("Category", { required: true })}>
            <option selected disabled value="">Select Category</option>
            <option value="Personal">Personal</option>
            <option value="Professional">Professional</option>
          </select>
        </div>
        </div>
        {errors.Category?.type === "required" && <p className='text-danger fw-bold'>*Category is required</p>}
        <div className='mt-3 form-floating'>
          <p> <textarea name="task" id="task" cols="80" rows="3" placeholder='E.g. Get the assignment done.' {...register("task", { required: true })}>
          </textarea></p>
        </div>
        {errors.task?.type === "required" && <p className='text-danger fw-bold'>*task is required</p>}
        <button type='submit' className='btn btn-primary form-button'>Add Task</button>
      </form>
      {/* <button onClick={cancelTask} className='btn btn-secondary form-button2 me-3'>Cancel</button> */}


      <h1 className='mt-5'>Completed</h1>
      {
        completed.map((completed) => (
          <div className="border border-2 mt-1 p-2 w-75 todayp d-flex gap-5">
            <div className="w-50"><div className="form-check form-check-inline">
              <form action="">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="true" onClick={() => isCompleted(completed.id)} />
                <label className="form-check-label" for="inlineCheckbox1"><h4>{completed.task}</h4></label>
              </form>

            </div>

              <p className='prioritytoday'>{completed.priority}</p>
              <p className='categorytoday'>{completed.category}</p></div>
            <button onClick={() => deleteTask(completed.id)} className='btn fs-4 delete'><span><AiOutlineDelete /></span></button>
          </div>
        ))
      }

    </div>
  )
}

export default Today