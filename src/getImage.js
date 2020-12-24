export async function getImage(city, country, weather){
    const api = 'https://api.unsplash.com/search/photos/?client_id=I1M7qSibp17CDKzd25RnokV82U2i--yZbjGE7ittDcg&query='
    const url = api + city + '&' + country + '&' + weather
    try{
        const response = await fetch(url, {mode: 'cors'})
        const data = await response.json()
        changeBackground(data)
    } catch (error) {
        console.error(error)
    }
}
function changeBackground(data){
    const body = document.querySelector('body')
    const image = data.results[0].urls.full
        body.style.backgroundImage = `url(${image})`
}
export function startImage(){
    const body = document.querySelector('body')
    let date = new Date()
    let month = date.getMonth() + 1
    if (month == 1){
        body.style.backgroundImage = 'url(../src/months/january.jpg)'
    } else if (month == 2){
        body.style.backgroundImage = 'url(../src/months/february.jpg)'
    } else if (month == 3){
        body.style.backgroundImage = 'url(../src/months/march.jpg)'   
    } else if (month == 4){
        body.style.backgroundImage = 'url(../src/months/april.jpg)' 
    } else if (month == 5){
        body.style.backgroundImage = 'url(../src/months/may.jpg)'
    } else if (month == 6){
        body.style.backgroundImage = 'url(../src/months/june.jpg)'
    } else if (month == 7){
        body.style.backgroundImage = 'url(../src/months/july.jpg)'
    } else if (month == 8){
        body.style.backgroundImage = 'url(../src/months/august.jpg)'
    } else if (month == 9){
        body.style.backgroundImage = 'url(../src/months/september.jpg)'
    } else if (month == 10){
        body.style.backgroundImage = 'url(../src/months/october.jpg)'
    } else if (month == 11){
        body.style.backgroundImage = 'url(../src/months/november.jpg)'
    } else if (month == 12){
        body.style.backgroundImage = 'url(../src/months/december.jpg)'
    }
}