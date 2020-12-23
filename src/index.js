import {createHeader, createForm, resultsArea, createFooter} from './build'
import {getWeather, formTrigger, gatherWeather, displayWeather, defaultText, errorText} from './getWeather'
import {getImage, startImage} from './getImage'

// global variables
const main = document.getElementById("main")
const form = document.createElement('form')
const results = document.getElementById('results')

// build the page
createHeader()
createForm(main, form)
resultsArea(defaultText())
createFooter()

// link up the API
formTrigger()

// get the starting background
console.log(startImage())

import "./style.css"