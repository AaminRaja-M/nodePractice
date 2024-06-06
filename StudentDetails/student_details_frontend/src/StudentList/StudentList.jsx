import axios from 'axios'
import React, { useState } from 'react'
import StdListStyle from './StudentList.module.css'

const StudentList = () => {
  let[stdList, setStdList] = useState([])

  let fetchStdData = async() => {
    let {data} = await axios.get('http://localhost:4000/api/student/getStudents')
    // console.log(data);
    setStdList(data.data)
  }

  console.log(stdList);

  useState(() => {
    fetchStdData()
  }, [])

  return (
    <div className={StdListStyle.totalContainer}>
      <div className={StdListStyle.heading}>
        <h1>STUDENT LIST</h1>
      </div>
      
      <div className={StdListStyle.listContainer}>
        {stdList.map((ele) => {
          return(
            <div className={StdListStyle.cardContainer}>
              <h3>First Name : {ele.first_name}</h3>
              <h3>Last Name : {ele.last_name}</h3>
              <h3>Address : {ele.address}</h3>
              <h3>Email Address : {ele.email}</h3>
              <div>
                <button className={StdListStyle.btn1}>SHOW</button>
                <button className={StdListStyle.btn2}>UPDATE</button>
                <button className={StdListStyle.btn3}>DELETE</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default StudentList
