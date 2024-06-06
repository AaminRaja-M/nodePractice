import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddStudent from '../AddStudent/AddStudent'
import StudentList from '../StudentList/StudentList'
import UpdateStudent from '../UpdateStudent/UpdateStudent'
import SingleStudent from '../SingleStudent/SingleStudent'

const EmployeeRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/add' element={<AddStudent/>}/>
            <Route path='/stdlist' element={<StudentList/>}/>
            <Route path='/update' element={<UpdateStudent/>}/>
            <Route path='/std/:id' element={<SingleStudent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default EmployeeRouter
