import _ from "lodash";
import "./style.css";

const main = document.querySelector("main")

function createForm(){
  const wrapper = document.createElement('div')
    main.appendChild(wrapper)
  const form = document.createElement('form')
    form.setAttribute('onsubmit', 'return false')
    wrapper.appendChild(form)
  const search = document.createElement('input')
    search.type = 'text'
    search.setAttribute('id', 'textField')
    form.appendChild(search)
  const button = document.createElement('button')
    button.type = 'submit'
    button.textContent = 'search'
    form.appendChild(button)
}
createForm()
async function getWeather(query){
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=ebea71aaa693706b343e3ef899d424b3'
  try {
    const response = await fetch(url, {mode: 'cors'}) 
    const data = await response.json()
    console.log(data)
  } catch (error){
    console.error(error)
  }
}
function formSubmit(){ // this is not hooked up
  const query = document.getElementById('textField').value
  console.log('form submitted')
  console.log(query)
  //getWeather(query)
}