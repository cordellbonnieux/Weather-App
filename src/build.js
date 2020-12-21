// building blocks 
export function createHeader(){
    const wrapper = document.createElement('div')
      wrapper.setAttribute('id', 'headerWrapper')
      main.appendChild(wrapper)
    const title = document.createElement('h1')
        title.textContent = 'Get The Weather!'
        wrapper.appendChild(title)
}
export function createForm(main, form){
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
      text.innerHTML = `This app was created by `
      footer.appendChild(text)
      footer.appendChild(link)
}