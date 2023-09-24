import React from 'react'
import style from './Portfolio.module.css'
import port1 from '../../image/imagePort/poert1.png'
import port2 from '../../image/imagePort/port2.png'
import port3 from '../../image/imagePort/port3.png'
export default function Portfolio() {
  return<>
  <div className={style.port}>
    <div className="container py-5">
      <h3 className='text-center'>PORTFOLIO COMPONENT</h3>
      <div className="row g-4">
        <div className="col-md-4">
          <img src={port1} alt="" className='w-100' />
        </div>
        <div className="col-md-4">
          <img src={port2} alt="" className='w-100' />
        </div>
        <div className="col-md-4">
          <img src={port3} alt="" className='w-100' />
        </div>
        <div className="col-md-4">
          <img src={port1} alt="" className='w-100' />
        </div>
        <div className="col-md-4">
          <img src={port2} alt="" className='w-100' />
        </div>
        <div className="col-md-4">
          <img src={port3} alt="" className='w-100' />
        </div>
      </div>
    </div>
  </div>
  
  </>
}
