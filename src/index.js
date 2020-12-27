import {createHeader, createForm, resultsArea, createFooter, countryPicker} from './build'
import {getWeather, formTrigger, gatherWeather, displayWeather, defaultText, errorText} from './getWeather'
import {getImage, startImage} from './getImage'
import {countriesList} from './countries'

// global variables
const main = document.getElementById("main")
const form = document.createElement('form')
const results = document.getElementById('results')


// build the page
createHeader()
createForm(main, form, countryPicker(countriesList))
resultsArea(defaultText())
createFooter()

// link up the API
formTrigger()

// get the starting background
startImage()

import "./style.css"
