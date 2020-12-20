import _ from "lodash" // do i really need it?
import "./style.css"
import {createHeader, createForm, resultsArea, createFooter} from './build'

// global variables
const main = document.getElementById("main")
const form = document.createElement('form')
const results = document.getElementById('results')

// info text
function defaultText(){
  const p = document.createElement('p')
  p.textContent = 'enter a city in the search above to get the weather.'
  return p
}
function errorText(){
  const p = document.createElement('p')
  p.textContent = 'Hmm... Looks like there was an error with your search. Try again!'
  return p
}

// build the page
createHeader()
createForm(main, form)
resultsArea(defaultText())
createFooter()

// weather retrieval
async function getWeather(query){
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=ebea71aaa693706b343e3ef899d424b3'
  try {
    const response = await fetch(url, {mode: 'cors'}) 
    const data = await response.json()
    console.log(data)
    gatherWeather(data)
  } catch (error) {
    console.error(error)
    const err = errorText()
    resultsArea(err)
  }
}
form.addEventListener('submit', function(){
  if (document.form.textField.value == ''){
    return false
  } else {
    const query = document.getElementById('textField').value
    getWeather(query)
  }
})
function gatherWeather(data){
  const name = data.name
  const temp = data.main.temp
  const feelsLike = data.main['feels_like']
  const humidity = data.main.humidity
  const pressure = data.main.pressure
  const maxTemp = data.main['temp_max']
  const minTemp = data.main['temp_min']
  const weather = [{info: name, title: 'name'}, {info: temp, title: 'temp'}, {info: feelsLike, title: 'feels like'}, {info: humidity, title: 'humidity'}, {info: pressure, title: 'pressure'}, {info: maxTemp, title: 'max temp'}, {info: minTemp, title: 'min temp'}]
  let theWeather = displayWeather(weather)
  resultsArea(theWeather)
}
function displayWeather(weather){
  const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'weather')
  for (let i = 0; i < weather.length; i++){
    let title = weather[i].title
    let data = weather[i].info
    let wrap = document.createElement('div')
      wrap.setAttribute('id', title)
    let heading = document.createElement('span')
      heading.textContent = title + ': '
      heading.setAttribute('class', 'title')
    let info = document.createElement('span')
      info.textContent = data
      info.setAttribute('class', 'info')
    wrap.appendChild(heading)
    wrap.appendChild(info)
    wrapper.appendChild(wrap)
  }
  return wrapper
}