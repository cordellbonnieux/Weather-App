import {createHeader, createForm, resultsArea, createFooter} from './build'
import {getWeather, formTrigger, gatherWeather, displayWeather, defaultText, errorText} from './getWeather'
import {getImage, startImage} from './getImage'


// global variables
const main = document.getElementById("main")
const form = document.createElement('form')
const results = document.getElementById('results')

// build the page
createHeader()
createForm(main, form, getCountries())
resultsArea(defaultText())
createFooter()

// link up the API
formTrigger()

// get the starting background
startImage()

import "./style.css"

export async function getCountries(){
    try{
        const response = await fetch('http://countryapi.gear.host/v1/Country/getCountries')
        const data = await response.json()
        console.log(data)
        return data.Response
    } catch(error){
        console.error(error)
    }
}
