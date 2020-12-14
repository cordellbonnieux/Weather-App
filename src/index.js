import _ from "lodash";
import "./style.css";

const main = document.querySelector("main");

async function getWeather(){
  try {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Vancouver&appid=ebea71aaa693706b343e3ef899d424b3', {mode: 'cors'}) 
  const data = await response.json()
  console.log(data)
  } catch (error){
    console.error(error)
  }
}
getWeather()


