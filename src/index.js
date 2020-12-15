import _ from "lodash" // do i really need it?
import "./style.css"

// global variables
const main = document.querySelector("main")
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
function resultsArea(info){
  results.innerHTML = ''
  const wrapper = document.createElement('div')
  results.appendChild(wrapper)
  wrapper.appendChild(info)
}
function createFooter(){
  const footer = document.querySelector('footer')
  const text = document.createElement('p')
  const link = document.createElement('a')
    link.textContent = 'Cordell Bonnieux'
    link.setAttribute('href', 'https://cordellbonnieux.com')
    link.setAttribute('target', '_blank')
    link.style.display = 'inline'
    text.style.display = 'inline'
    text.innerHTML = `This app was created by `
    footer.appendChild(text)
    footer.appendChild(link)

}

// build the page
createHeader()
createForm()
resultsArea(defaultText())
createFooter()

// weather retrieval
async function getWeather(query){
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + query + '&appid=ebea71aaa693706b343e3ef899d424b3'
  try {
    const response = await fetch(url, {mode: 'cors'}) 
    const data = await response.json()
    console.log(data)
    //displayWeather(data)
  } catch (error) {
    console.error(error)
    resultsArea(errorText()) // this will not display
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
function displayWeather(data){
  //const 
  const city = document.createElement('h2')
  // resultsArea(plug in a complete grid here)
}