import React, { useState } from 'react'
import addStdStyle from './AddStudent.module.css'
import axios from 'axios'

const AddStudent = () => {
    let[stdData, setStdData] = useState({first_name:"", last_name:"", phone_number:"", address:"", email:"", age:""})

    let updateStdData = ({target:{value, name}}) => {
        setStdData({...stdData, [name]:value})
    }
    
    let addStudentData = async(e) => {
        e.preventDefault();
        let sendData = await axios.post('http://localhost:4000/api/student/addStudent', stdData)
        console.log(sendData);
        setStdData({first_name:"", last_name:"", phone_number:"", address:"", email:"", age:""})
    }

    console.log(stdData);

  return (
    <div className={addStdStyle.container}>
      <form action="" onSubmit={addStudentData} className={addStdStyle.form}>
        <div>
            <h1>ADD DETAILS</h1>
        </div>
        <div>
            <input type="text" placeholder='First Name' name='first_name' onChange={updateStdData} value={stdData.first_name}/>
        </div>
        <div>
            <input type="text" placeholder='Last Name' name='last_name' onChange={updateStdData} value={stdData.last_name}/>
        </div>
        <div>
            <input type="text" placeholder='Address' name='address' onChange={updateStdData} value={stdData.address}/>
        </div>
        <div>
            <input type="text" placeholder='email address' name='email' onChange={updateStdData} value={stdData.email}/>
        </div>
        <div>
            <input type="number" placeholder='Phone Number' name='phone_number' onChange={updateStdData} value={stdData.phone_number}/>
        </div>
        <div>
            <input type="number" placeholder='age' name='age' onChange={updateStdData} value={stdData.age}/>
        </div>
        <div className={addStdStyle.buttonsDiv}>
            <div className={addStdStyle.buttonDiv1}>
                <button type='submit'>ADD</button>
            </div>
            <div className={addStdStyle.buttonDiv2}>
                <button type='reset'>CANCEL</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default AddStudent
