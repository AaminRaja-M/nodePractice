import React, { useState } from 'react'
import Elemet_1 from './Elemet_1'
import Elemet_2 from './Elemet_2'
import Elemet_3 from './Elemet_3'
import Elemet_4 from './Elemet_4'
import './TabsComponent.css'

const TabsComponent = () => {
    let[element, setElment] = useState(1)
  return (
    <div>
      <div className='tabs-div'>
        <div><button onClick={() => {setElment(1)}}>Element 1</button></div>
        <div><button onClick={() => {setElment(2)}}>Element 2</button></div>
        <div><button onClick={() => {setElment(3)}}>Element 3</button></div>
        <div><button onClick={() => {setElment(4)}}>Element 4</button></div>
      </div>

      <div>
        {element === 1 && <Elemet_1/>}
        {element === 2 && <Elemet_2/>}
        {element === 3 && <Elemet_3/>}
        {element === 4 && <Elemet_4/>}
      </div>
    </div>
  )
}

export default TabsComponent
