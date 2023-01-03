import React, { useEffect, useState } from 'react'
import axios from 'axios'
import imgs from "./backgrounds"
import Loader from './Loader'

function Cardweather() {
    const [weather, setWeather] = useState({})
    const [loader, setLoader] = useState(false)
    const [temperature, setTemperature] = useState(true)
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

const tempK = weather.main?.temp
const tempF = (tempK - 273.15)* 9/5 + 32
const tempC = tempK - 273.15
const degF = tempF.toFixed(2)
const degC = tempC.toFixed(2)

const pressureP = weather.main?.pressure
const pressuremb = pressureP/100

const changeUnits = ()=>{
  setTemperature(!temperature)
}

const ambient = degF <59 ? imgs[0] : degF <86 ? imgs[1] : degF <300 ? imgs[2]:imgs[3];
document.body.style.background = `url(${ambient}) 0% 0% / 100% 100% no-repeat fixed`

const icon = weather.weather?.[0].icon
const urlIcon = icon ? <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" /> : <h2>No Data</h2>
const nameContry = icon ? <h2>{weather.name}{', '}{weather.sys?.country}</h2> : <h2>No Data  <i className="fa-solid fa-spinner rotate"></i></h2>


  return (
    <div className="App">
    {loader && <Loader />}
      <h1>Wheather App</h1>
      {nameContry}
      <div className='Box1'>
        <div className='minBox0' style={{fontSize:" 20px"}}>
        {urlIcon}
        <p className='texts'>{temperature ? degF:degC}{' '}{temperature ? '°F':'°C'}
        </p>
        
      </div>
        <div>
          <h2>{'"'}{weather.weather?.[0].description}{'"'}</h2>
          <div className='minBox1'>
          
          <p><i className="fa-solid fa-wind"></i>  Wind speed </p>
          <p className='texts'>{weather.wind?.speed} m/s</p>
          </div>

          <div className='minBox1'>
            {urlIcon}
          </div>
          <p className='texts'>Clouds {weather.clouds?.all} %</p>

          <div className='minBox1'>
            <p><i className="fa-solid fa-temperature-three-quarters"></i> Pressure</p>
           <p className='texts'>{pressuremb} mb</p>
          </div>
        </div>
      </div>
      <button className='button' onClick={changeUnits}>Changue Units °F/°C</button>
    </div>
  )
}
export default Cardweather