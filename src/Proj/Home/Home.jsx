import React from 'react'
import style from './Home.module.css'
import image from '../../image/imageHome/download.jpg'
export default function Home() {
  return  <>
  
  <div className={style.home} >

    <div className="container pb-5 d-flex justify-content-center  align-items-center">
       <div className="card-page text-center ">
        <img src={image} alt="" className='w-100 rounded-circle' />
        <h2>START FRAMEWORK</h2>
        <p>Graphic Artist - Web Designer - Illustrator</p>
       </div>
    </div>
  </div>
  </>
}
