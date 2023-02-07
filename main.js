// import { countries_data} from './country_data.js'



const displayCard = document.querySelector('.display-area')
const inputEl = document.querySelector('.input')
const buttonSearch = document.querySelector('.search')
const error = document.querySelector('.error')

buttonSearch.addEventListener('click',setCountry)



function setCountry(){
    displayCard.innerHTML=''
    if(inputEl.value==''){
        validate();
    }
    else{
        // console.log(inputEl.value)
        error.textContent=''
        let data = countries_data.filter((el)=>el.name.toLowerCase()==(inputEl.value))
        // console.log(data)
        showResult(data[0])
    }
}

function validate(){
    console.log('no value')
    error.textContent='Enter country name first'
}

function showResult(data){
    console.log(data,'data')
    if(data){
        displayCard.innerHTML=`
        <div class="flag-div">
        <img class="flag" src=${data.flag} />
            </div>
            <h2 class="country-name">${data.name}</h2>
            <p class="capital"><span class="bold">Capital </span>: ${data.capital}</p>
            <p class="population"><span class="bold">Population </span>:${data.population}</p>
            <p class="language"><span class="bold">${data.languages.length>1 ? 'Languages' : 'Language'} </span>: ${data.languages.join(', ')}</p>
            `
            console.log('country found')
    }else{
        console.log('country not found')
        error.textContent='Result not found for '+inputEl.value;
    }
    inputEl.value=''
}