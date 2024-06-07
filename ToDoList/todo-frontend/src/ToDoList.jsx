import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoIosRadioButtonOn } from "react-icons/io";
import './ToDoList.css'
import { click } from "@testing-library/user-event/dist/click";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { TfiAlarmClock } from "react-icons/tfi";
import axios from "axios";

const ToDoList = () => {

  let [item, setItem] = useState({task:'', status: '', tdate:''});
  let [list, setList] = useState([]);
  let[displayList, setDisplayList] = useState([])
  let[sortByDateDispList, setSortByDispList] = useState([])
  let [empty, setEmpty] = useState(false)
  let[inputClicked, setInputClicked] = useState(false)
  let[search, setSearch] = useState('')
  let[calendarDis, setCalendarDis] = useState(false)
  let [date, setDate] = useState(new Date());
  let[calendarDis2, setCalendarDis2] = useState(false)
  let[zoom, setZoom] = useState(1)
  let[btnZoom, setBtnZoom] = useState(1)
  let[dateEmpty, setDateEmpty] = useState(false)
  let[isDispList, setISDispList] = useState(false)
  let[isSortByDateDispList, setIsSortByDateDispList] = useState(false)
  let[taskToUpdate, setTaskToUpdate] = useState({})
  let[id, setId] = useState()
  // ????????

  let fetchTasksData = async() => {
    // console.log('data fetching from backend');
    let {data} = await axios.get(`http://localhost:3500/api/task/getTasks`)
    let fetchedData = data.TotalTasks
    setList(fetchedData)
    setDisplayList(fetchedData)
    
  }

  function updateDate(val) {
    setItem({...item ,tdate : val.toLocaleDateString("en-GB")});
 }

  let updateItem = ({ target: { value } }) => {
    setItem({...item, task: value, status: false});
  };

  let addItem = async() => {
    // item.task && setList(Array.from(new Set([...list, item])));
    (item.task && item.tdate) && setList([...list, item]);
    if(item.task && item.tdate){
      console.log('backend adding function entered');
      let sendData = await axios.post(`http://localhost:3500/api/task/addTask`, item)
      console.log(sendData);
    }
    (item.task && item.tdate) && setDisplayList([...list, item]);
    item.task ? setEmpty(false) : setEmpty(true)
    item.tdate ? setDateEmpty(false) : setDateEmpty(true)
    if(item.task && item.tdate){
      setItem({task:'', status: '', tdate: ''})
    }
    setCalendarDis(false)
  };

  let deleteItem = async(ind, tid) => {
    let newList = list.filter((_, index) => index !== ind);
    await axios.delete(`http://localhost:3500/api/task//deleteTask/${tid}`)
    setList(newList)
    setDisplayList(newList)
  }

  let statusToggle = async(ind, stat, tid) => {
    list.forEach((ele, index) => {
      if(index === ind){
        let prevArr = [...list]
        prevArr[ind].status = stat
        setList([...prevArr])

        // setTaskToUpdate(prevArr[ind])
      }
    })
  }

  let statusToggleBackend = async(tid) => {
    console.log(taskToUpdate);
    let updatedtask = await axios.put(`http://localhost:3500/api/task//updateTask/${tid}`, {...taskToUpdate, status:taskToUpdate.status})
    console.log(updatedtask);
  }

  let updateSearch = ({target:{value}}) => {
    setSearch(value)
    setCalendarDis(false)
    setCalendarDis2(false)
  }

  let fetchSearch = () => {
    let searchedArr = list.filter((ele) => {
      return ele.task.includes(search)
    })
    setDisplayList(searchedArr)
    setCalendarDis(false)
    setCalendarDis2(false)
  }

  let reset = () => {
    setDisplayList(list)
    setCalendarDis(false)
    setCalendarDis2(false)
  }

  let completedFetch = () => {
    let completedArr = list.filter((ele) => {
      return ele.status == true
    })
    setDisplayList(completedArr)
    setCalendarDis(false)
    setCalendarDis2(false)
  }

  let inCompletedtFetch = () => {
    let inCompletedArr = list.filter((ele) => {
      return ele.status == false
    })
    setDisplayList(inCompletedArr)
    setCalendarDis(false)
    setCalendarDis2(false)
  }

  let calenderShow = () => {
    setCalendarDis(!calendarDis)
    setCalendarDis2(false)
  }

  let calenderSortDisp = () => {
    setCalendarDis2(!calendarDis2)
    setCalendarDis(false)
    setISDispList(false) //!
  }

  let sortByDate = (val) => {
    let sortedByDateArr = list.filter((ele) => {
      return ele.tdate == val.toLocaleDateString("en-GB")
    })
    setSortByDispList(sortedByDateArr)

    if(sortedByDateArr != []){
      setIsSortByDateDispList(true)
    }
  }

  let updateZoom = (operator) => {
    if(operator === '+'){
      setZoom(zoom + 0.1)
      setBtnZoom(btnZoom - 0.05)
    }else if(operator === '-'){
      setZoom(zoom - 0.1)
      setBtnZoom(btnZoom + 0.05)
    }
  }

  let clearCalendar = () => {
    setCalendarDis2(false)
  }

  useEffect(() => {
    if(calendarDis2){
      setISDispList(false)
    }else if(displayList){
      setISDispList(true)
    }else if(displayList == []){
      setISDispList(false)
    }
  })

  useEffect(() => {
    fetchTasksData()
  }, [])

  useEffect(() => {
    statusToggleBackend(id)
  }, [taskToUpdate])

  console.log(taskToUpdate)

  return (
    <section className="totalSection" style={{transform:`scale(${zoom})`}}>

      <div className="zoom-btn-container" style={{transform:`scale(${btnZoom})`}}>
        <button className="zoom-btn" onClick={() => updateZoom('+')}>+</button>
        <button className="zoom-btn" onClick={() => updateZoom('-')}>-</button>
      </div>

      <section className="todoSection">

        <div className="todoinput">
          <div onClick={() => setInputClicked(true)}>
            {inputClicked ? <input type="text" value={item.task} onChange={updateItem} placeholder = '' /> : <input type="text" value={item.task} onChange={updateItem} placeholder="Enter the task"/> }
          </div>
          <button onClick={addItem}>Add</button>
        </div>

        <div className="dateBtn-div">
          <h3>The selected date is - {item.tdate}</h3>
          <button onClick={calenderShow} className="dateBtn">Select Date</button>
        </div>

        {calendarDis && 
        <div className="calendar">
          <div><h3>Select date for the task</h3></div>
        <Calendar
              onChange = {updateDate}
              value = {date}
              minDate = {new Date()}
              showNeighboringMonth = {true} 
           />
        </div>}

        <div className="dateBtn-div">
          <button onClick={calenderSortDisp} className="dateBtn">Sort by Date</button>
        </div>

        <div className="search-buttons-container">
          <div>
            <input type="text" placeholder="Search your task" onChange={updateSearch} />
            <button onClick={fetchSearch}>Search</button>
          </div>
          <div>
            <button onClick={completedFetch} style={{background:'green'}}>Completed Tasks</button>
            <button onClick={inCompletedtFetch} style={{background:'red'}}>Pending Tasks</button>
            <button onClick={reset} style={{background:'gray'}}>Reset</button>
          </div>
        </div>

        {empty && <div className="emptyMessage">
          <h2 style={{color:"red"}}>{empty && "Add any task"}</h2>
        </div>}

        {dateEmpty && <div className="emptyMessage">
          <h2 style={{color:"red"}}>{dateEmpty && "Add the date"}</h2>
        </div>}

        {isDispList && <div className="todolist">
          {displayList.map((ele, index) => {
            // console.log(ele._id);
            return (
              <div className="todosContainer">
                <i>
                  <TfiAlarmClock />
                </i>
                <div>
                  <p>{ele.task}</p>
                </div>
                <p>{ele.tdate}</p>

                {ele.status ? <i onClick={() => {statusToggle(index, false, ele._id)}} className="statusGreen"><IoIosRadioButtonOn /></i>: <i onClick={() => {statusToggle(index, true, ele._id)}} className="statusRed"><IoIosRadioButtonOn /></i>}
                <i onClick={() => {deleteItem(index)}} className="deleteIcon">
                  <MdDelete />
                </i>
              </div>
            );
          })}
        </div>}

        {calendarDis2 &&
        <div className="calendar">
          <div><h3>Sort by date</h3></div>
         <Calendar
              onChange = {sortByDate}
              value = {date}
              minDate = {new Date()}
              showNeighboringMonth = {true} 
           />

            {isSortByDateDispList &&
              <div className="todolist-sortedByDate">
              {sortByDateDispList.map((ele, index) => {
                return (
                  <div className="todosContainer">
                    <i>
                      <TfiAlarmClock />
                    </i>
                    <div>
                      <p>{ele.task}</p>
                    </div>
                    <p>{ele.tdate}</p>

                    {ele.status ? <i onClick={() => statusToggle(index, false)} className="statusGreen"><IoIosRadioButtonOn /></i>: <i onClick={() => statusToggle(index, true)} className="statusRed"><IoIosRadioButtonOn /></i>}
                    <i onClick={() => {deleteItem(index)}} className="deleteIcon">
                      <MdDelete />
                    </i>
                    
                  </div>
                );
              })}
              </div>
              
            }

            <div className="clear-btn-div">
              <button className="calendar-clear-btn" onClick={clearCalendar}>Hide Calendar</button>
            </div>
        </div>}
    </section>
    </section>
  )
}

export default ToDoList
