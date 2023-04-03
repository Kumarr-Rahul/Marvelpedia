// cf12923a2ae64fe7d337944ac322fa74
// private key : 18f9f9f971b86a3b2b8b2fd9c62d15ac1a72154f

let searchCharacter = document.querySelector('input[type="search"]');
let searchButton = document.querySelector('button[type="submit"]');

searchButton.addEventListener('click', async function(event) {
    event.preventDefault();
    let searchedItem = searchCharacter.value;
    
    let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchedItem}&apikey=c2595c6e10b8e75e6bd3b3c61b14547c&hash=77964d9b5c2bef6213992685d7c2dfd4&ts=1`

    /* fetch data from marvel api */
    await fetch(url)
    .then( (response) => response.json())
    .then( (data) => showCharacter(data))
    .catch ( (error) => console.log('error',error));


    /* alternate method to fetch api */
    // let xhrRequest = new XMLHttpRequest();
    // xhrRequest.open('get', url);
    // xhrRequest.send();

    // xhrRequest.onload = function() {
    //     let resultObject = JSON.parse(xhrRequest.response);
    //     console.log(resultObject);
    // }

});


let allSuperheroContainer = document.querySelector('#allSuperheroContainer');
let template = document.querySelector('#templates');

function showCharacter(object) {

    /* remove all previous serached result */
    allSuperheroContainer.innerHTML = "";

    let heroDetailsTemplate = template.content.querySelector('.singleHeroContainer');
    
    let charactersArray = object.data.results;
    
    for(let i = 0; i < charactersArray.length; i++) {
        let heroId =  charactersArray[i].id;
        console.log(charactersArray[i]);
        
        /* adding template to DOM */
        let heroDetails = document.importNode(heroDetailsTemplate, true);
        heroDetails.querySelector('.name').innerHTML = charactersArray[i].name;
        let imgUrl = charactersArray[i].thumbnail.path + '.jpg';
        heroDetails.querySelector('.heroImg').src = imgUrl;
        console.log(imgUrl);

        allSuperheroContainer.appendChild(heroDetails);
    }

    
}



