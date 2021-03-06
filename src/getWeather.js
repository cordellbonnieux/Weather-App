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
    const weather = [{info: name, title: 'name'}, {info: country, title: 'country'}, {info: temp, title: 'temp'}, {info: feelsLike, title: 'feels like'}, {info: mainDescription, title: 'main description'}, {info: description, title: 'description'}, {info: humidity, title: 'humidity'}, {info: pressure, title: 'pressure'}, {info: maxTemp, title: 'max temp'}, {info: minTemp, title: 'min temp'}]
    let theWeather = displayWeather(weather)
    resultsArea(theWeather)
    getImage(name, country, mainDescription)
  }
export function displayWeather(weather){
    const wrapper = document.createElement('div')
      wrapper.setAttribute('id', 'weather')
    const whereWrapper = document.createElement('div')
      whereWrapper.setAttribute('id', 'where')
    const tempWrapper = document.createElement('div')
      tempWrapper.setAttribute('id', 'temperature')
    const descriptionWrapper = document.createElement('div')
      descriptionWrapper.setAttribute('id', 'moreInfo')
    for (let i = 0; i < weather.length; i++){
      let title = weather[i].title
      let data = weather[i].info
      let wrap = document.createElement('div')
      let heading = document.createElement('span')
      let info = document.createElement('span')
        wrap.setAttribute('id', title.replace(/\s/g, ''))
        heading.setAttribute('class', 'title')
        heading.textContent = title
        info.setAttribute('class', 'info')
        info.textContent = data         
      if (title == 'temp'){
        heading.textContent = '°C'
        wrap.appendChild(info)
        wrap.appendChild(heading)
      } else if (title == 'feels like' || title == 'max temp' || title == 'min temp'){
        let symbol = document.createElement('span')
          symbol.setAttribute('class', 'symbol')
          symbol.textContent = '°C'
        heading.textContent = title + ' '
        wrap.appendChild(heading)
        wrap.appendChild(info) 
        wrap.appendChild(symbol)
      } else if (title == 'humidity'){
        info.textContent = data + '%'
        heading.textContent = title + ' '
        wrap.appendChild(heading)
        wrap.appendChild(info)
      } else if (title == 'pressure'){
        let symbol = document.createElement('span')
          symbol.setAttribute('class', 'symbol')
          symbol.textContent = 'mb'
        heading.textContent = title + ' '
        wrap.appendChild(heading)
        wrap.appendChild(info) 
        wrap.appendChild(symbol)
      }else if (title == 'main description'){
        let symbol = document.createElement('span')
          symbol.setAttribute('class', 'slash') 
          symbol.textContent = '/'
        heading.textContent = title
        wrap.appendChild(info)
        wrap.appendChild(symbol)
        wrap.style.display = 'inline-block'
      } else if (title == 'description'){
        heading.textContent = title
        wrap.appendChild(info)
        wrap.style.display = 'inline-block'
      } else {
        wrap.appendChild(heading)
        wrap.appendChild(info)
      }
      if (title == 'name' || title == 'country'){
        heading.style.display = 'none'
        whereWrapper.appendChild(wrap)
      } else if (title == 'temp' || title == 'feels like' || title == 'max temp' || title == 'min temp'){
        tempWrapper.appendChild(wrap)
      } else if (title == 'main description' || title == 'description' || title == 'humidity' || title == 'pressure'){
        descriptionWrapper.appendChild(wrap)
      } else {
        console.log(title + " didn't make it!")
      }
    }
    wrapper.appendChild(whereWrapper)
    wrapper.appendChild(tempWrapper)
    wrapper.appendChild(descriptionWrapper)
    reDoFooter()
    return wrapper
}
function reDoFooter(){
  const oldFooter = document.querySelector('footer')
    oldFooter.remove()
  const newFooter = document.createElement('footer')
  const body = document.querySelector('body')
    body.appendChild(newFooter)
  createFooter()
}
// info text
export function defaultText(){
    const p = document.createElement('p')
    p.textContent = 'enter a city in the search above to get the weather.'
    p.style.cssText = 'background: rgba(235, 235, 235, 0.8); border-radius:2px; text-align:center; padding:10px;'
    return p
  }
export function errorText(){
   const p = document.createElement('p')
   p.textContent = 'Hmm... Looks like there was an error with your search. Try again!'
   p.style.cssText = 'background: rgba(235, 235, 235, 0.8); border-radius:2px; text-align:center; padding:10px;'
   return p
}
function invalidText(){
  const p = document.createElement('p')
  p.textContent = 'Please input a valid city name & country before searching for the weather.'
  p.style.cssText = 'background: rgba(235, 235, 235, 0.8); border-radius:2px; text-align:center; padding:10px;'
  return p
}

import './results.css'