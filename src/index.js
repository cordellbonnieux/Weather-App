import _ from "lodash" // do i really need it?
import "./style.css"

// global variables
const main = document.querySelector("main")
const form = document.createElement('form')

// building blocks 
function createHeader(){
  const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'headerWrapper')
    main.appendChild(wrapper)
  const title = document.createElement('h1')
    title.textContent = 'Get The Weather!'
    wrapper.appendChild(title)
}
function createForm(){
  const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'formWrapper')
    main.appendChild(wrapper)
    form.setAttribute('name', 'form')
    form.setAttribute('onsubmit', 'return false')
    wrapper.appendChild(form)
  const search = document.createElement('input')
    search.setAttribute('type', 'text')
    search.setAttribute('name', 'textField')
    search.setAttribute('id', 'textField')
    form.appendChild(search)
  const button = document.createElement('button')
    button.setAttribute('type', 'submit')
    button.textContent = 'search'
    form.appendChild(button)
}

// build the page
createHeader()
createForm()

// weather retrieval
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
form.addEventListener('submit', function(){
  if (document.form.textField.value == ''){
    return false
  } else {
    const query = document.getElementById('textField').value
    getWeather(query)
  }
})