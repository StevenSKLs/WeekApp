import React, { useEffect, useState } from 'react'
import axios from 'axios'
import imgs from "./backgrounds"
import Loader from './Loader'

function Cardweather() {
    const [weather, setWeather] = useState({})
    const [loader, setLoader] = useState(false)
setTimeout(() => {
  setLoader(false)
}, 3000);
  useEffect(()=>{
    function success(pos) {
    const crd = pos.coords;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=a0766781adba5be1ffd32148f0401fa4`).then(res => setWeather(res.data))
  }
  setLoader(true)
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error);
  
},[])
let deg = weather.wind?.deg

let ambient = deg <59 ? imgs[0] : deg <86 ? imgs[1] : deg <300 ? imgs[2]:imgs[3];

document.body.style.background = `url(${ambient}) 0% 0% / 100% 100% no-repeat fixed`


console.log(weather)

const icon = weather.weather?.[0].icon
const urlIcon = icon ? <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" /> : "loading"

  return (
    <div className="App">
    {loader && <Loader />}
      <h1>Wheather App</h1>
      <h2>{weather.name},{' '}{weather.sys?.country}</h2>
      <div className='Box1'>
        <div>
        {urlIcon}
      </div>
        <div>
          <h2>{'"'}{weather.weather?.[0].description}{'"'}</h2>
          <div className='minBox1'>
          <i className="fa-solid fa-wind"></i>
          <p>Wind seed {weather.wind?.speed}</p>
          </div>

          <div className='minBox1'>
            {urlIcon}
          <p>hola</p>
          </div>

          <div className='minBox1'>
            <p>Pressure {deg}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cardweather