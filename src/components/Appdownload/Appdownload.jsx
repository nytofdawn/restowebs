import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'

const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>for better download this app <br /> Prethegem app </p>
        <img src={assets.apk_icon} alt="" />
    </div>
  )
}

export default Appdownload