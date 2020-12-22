export async function getImage(city, country, weather){
    console.log('getImage has fired')
    const api = 'https://api.unsplash.com/search/photos/?client_id=I1M7qSibp17CDKzd25RnokV82U2i--yZbjGE7ittDcg&query='
    const url = api + city + '&' + country + '&' + weather
    try{
        const response = await fetch(url, {mode: 'cors'})
        const data = await response.json()
        console.log(data)
        changeBackground(data)
    } catch (error) {
        console.error(error)
    }
}
function changeBackground(data){
    const body = document.querySelector('body')
    const image = data.results[0].urls.full
        body.style.backgroundImage = `url(${image})`
        body.style.backgroundSize = 'cover'
        body.style.backgroundRepeat = 'no-repeat'
    console.log('image url = ' + image)
}