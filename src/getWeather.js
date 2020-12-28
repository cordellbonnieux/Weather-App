import {createHeader, createForm, resultsArea, createFooter} from './build'
import {getImage, startImage} from './getImage'

// weather retrieval
export function formTrigger(){
  const countrySelect = document.getElementById('countryPicker')
    form.addEventListener('submit', function(){
    if (document.form.textField.value == '' || countrySelect.value === null){
      resultsArea(invalidText())
      return false
    } else {
      const query = (document.getElementById('textField').value + ',' + countrySelect.value.toLowerCase())
      getWeather(query)
    }
  })
}
export async function getWeather(query){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=metric&appid=ebea71aaa693706b343e3ef899d424b3'
    try {
      const response = await fetch(url, {mode: 'cors'}) 
      const data = await response.json()
      gatherWeather(data)
    } catch (error) {
      console.error(error)
      const err = errorText()
      resultsArea(err)
    }
  }
  export function gatherWeather(data){
    const name = data.name
    const country = data.sys.country
    const temp = data.main.temp
    const feelsLike = data.main['feels_like'] 
    const humidity = data.main.humidity
    const pressure = data.main.pressure
    const maxTemp = data.main['temp_max']
    const minTemp = data.main['temp_min']
    const mainDescription = data.weather[0].main
    const description = data.weather[0].description
    const icon = data.weather[0].icon
    const weather = [{info: name, title: 'name'}, {info: country, title: 'country'}, {info: temp, title: 'temp'}, {info: feelsLike, title: 'feels like'}, {info: humidity, title: 'humidity'}, {info: pressure, title: 'pressure'}, {info: maxTemp, title: 'max temp'}, {info: minTemp, title: 'min temp'}, {info: mainDescription, title: 'main description'}, {info: description, title: 'description'}, {info: icon, title:'icon'}]
    let theWeather = displayWeather(weather)
    resultsArea(theWeather)
    getImage(name, country, mainDescription)
  }
export function displayWeather(weather){
    const wrapper = document.createElement('div')
      wrapper.setAttribute('id', 'weather')
    for (let i = 0; i < weather.length; i++){
      let title = weather[i].title
      let data = weather[i].info
      let wrap = document.createElement('div')
      let heading = document.createElement('span')
      let info = document.createElement('span')
        wrap.setAttribute('id', title.replace(/\s/g, ''))
        heading.setAttribute('class', 'title')
        info.textContent = data
        info.setAttribute('class', 'info')
      if (title == 'temp'){
        heading.textContent = '°C'
        wrap.appendChild(info)
        wrap.appendChild(heading)
      } else {
        heading.textContent = title
        wrap.appendChild(heading)
        wrap.appendChild(info)
      }
      wrapper.appendChild(wrap)
    }
    return wrapper
}

// info text
export function defaultText(){
    const p = document.createElement('p')
    p.textContent = 'enter a city in the search above to get the weather.'
    return p
  }
export function errorText(){
   const p = document.createElement('p')
   p.textContent = 'Hmm... Looks like there was an error with your search. Try again!'
   return p
}
function invalidText(){
  const p = document.createElement('p')
  p.textContent = 'Please type in a valid city name & choose a country before searching for the weather.'
  return p
}

import './results.css'