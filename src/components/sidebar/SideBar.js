import React from 'react'
import { BsSearch } from "react-icons/bs";
import './SideBar.css'
import { NavLink } from 'react-router-dom';

function SideBar() {
    return (
        <div className='row main container'>
            <div className="col-sm-12 p-4 left">
                <form action="">
                    <div className="form-floating">
                        <input type="text" placeholder='todolist' name="todolist" id="todolist" className='form-control' />
                        <label htmlFor="todolist" className=''>Search&nbsp;&nbsp;<span className=''><BsSearch /></span></label>
                    </div>
                </form>
                <NavLink to="/" className='nav-link'><h5 className="display-5">Today</h5></NavLink>
                <NavLink to="/AllTasks" className='nav-link'>All Tasks</NavLink>
                <hr />
                <NavLink to="/High" className='nav-link'>High</NavLink>
                <NavLink to="/Medium" className='nav-link'>Medium</NavLink>
                <NavLink to="/Low" className='nav-link'>Low</NavLink>
                <hr />
                <NavLink to="/Personal" className='nav-link'>Personal</NavLink>

            </div>
            {/* <div className="col-sm-8 right">
               <h6 className="display-6 mt-4 fw-semibold ms-5">Today</h6>
            </div> */}
        </div>
    )
}

export default SideBar