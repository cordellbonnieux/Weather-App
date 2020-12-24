import {createHeader, createForm, resultsArea, createFooter} from './build'
import {getWeather, formTrigger, gatherWeather, displayWeather, defaultText, errorText} from './getWeather'
import {getImage, startImage} from './getImage'


// global variables
const main = document.getElementById("main")
const form = document.createElement('form')
const results = document.getElementById('results')

// build the page
createHeader()
createForm(main, form, '???')
resultsArea(defaultText())
createFooter()

// link up the API
formTrigger()

// get the starting background
startImage()

import "./style.css"


// this needs to be re-organized!

export async function getCountries(){
    try{
        const response = await fetch('http://countryapi.gear.host/v1/Country/getCountries')
        const data = await response.json()
        console.log(data.Response)
        return countryPicker(data.Response)
    } catch(error){
        console.error(error)
    }
}
export function countryPicker(countryList){
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


