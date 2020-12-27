import {getWeather, formTrigger, gatherWeather, displayWeather, defaultText, errorText} from './getWeather'

// building blocks 
export function createHeader(){
  const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'headerWrapper')
    main.appendChild(wrapper)
  const title = document.createElement('h1')
    title.textContent = 'Get The Weather!'
    wrapper.appendChild(title)
}
export function createForm(main, form, picker){
  const wrapper = document.createElement('div')
    wrapper.setAttribute('id', 'formWrapper')
    form.setAttribute('name', 'form')
    form.setAttribute('onsubmit', 'return false')
    wrapper.appendChild(form)
  const search = document.createElement('input')
    search.setAttribute('type', 'text')
    search.setAttribute('name', 'textField')
    search.setAttribute('id', 'textField')
    form.appendChild(search)
    //form.appendChild(picker)
  const button = document.createElement('button')
    button.setAttribute('type', 'submit')
    button.textContent = 'search'
    form.appendChild(button)
  main.appendChild(wrapper)
}
export function resultsArea(info){
    results.innerHTML = ''
    const wrapper = document.createElement('div')
    results.appendChild(wrapper)
    wrapper.appendChild(info)
}
export function createFooter(){
    const footer = document.querySelector('footer')
    const text = document.createElement('p')
    const link = document.createElement('a')
      link.textContent = 'Cordell Bonnieux'
      link.setAttribute('href', 'https://cordellbonnieux.com')
      link.setAttribute('target', '_blank')
      link.style.display = 'inline'
      text.style.display = 'inline'
      text.innerHTML = `Built by `
      footer.appendChild(text)
      footer.appendChild(link)
}
export async function getCountries(){
  try{
      const response = await fetch('http://countryapi.gear.host/v1/Country/getCountries', {mode: 'no-cors'})
      const data = await response.json()
      console.log(data.Response)
      const dataObject = data.Reponse
      console.log(dataObject)
      console.log('about to exit getCountries()')
  } catch(error){
      console.error(error)
  }
}
//
getCountries()
//
export function countryPicker(){
  const countryList = getCountries()
  console.log('returned data' + ' ' + countryList)

  
  const picker = document.createElement('select')
      picker.setAttribute('id', 'countryPicker')
      picker.setAttribute('name', 'country')
      picker.textContent = 'country'
  for (let i = 0; i < countryList.length; i++){
      let option = document.createElement('option')
          option.setAttribute('value', countryList[i].Alpha2Code)
          option.textContent = countryList[i].Name
      picker.appendChild(option)
  }
  return picker
}