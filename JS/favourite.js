// cf12923a2ae64fe7d337944ac322fa74
// private key : 18f9f9f971b86a3b2b8b2fd9c62d15ac1a72154f
let allSuperheroContainer = document.querySelector('#allSuperheroContainer');

(function() {
    
    for (let i = 0; i < localStorage.length; i++) {
        
        let keyValue = JSON.parse(localStorage.getItem(localStorage.key(i)));
        // console.log(keyValue);
        showData(keyValue);
    }

    
})();



function showData(keyValue) {
    
    let template = document.querySelector('#templates');

    /* remove all previous serached result */
    // allSuperheroContainer.innerHTML = "";

    let heroId = keyValue.id;
    // console.log(heroId);

    let heroDetailsTemplate = template.content.querySelector('.singleHeroContainer');

    /* adding template to DOM */
    let heroDetails = document.importNode(heroDetailsTemplate, true);
    heroDetails.querySelector('.name').innerHTML = keyValue.name;
    let imgUrl = keyValue.thumbnail.path + '.jpg';
    heroDetails.querySelector('.heroImg').src = imgUrl;

    /* adding hero details to allSuperHeroContainer */
    allSuperheroContainer.appendChild(heroDetails);

    /* adding event listener to remove button */
    heroDetails.querySelector('#remove').addEventListener('click', function() {

        /* function to remove hero from allSuperHeroContianer and localstorage */
        let deleteHero = this;
        let toBeDeleted = deleteHero.parentNode.parentNode.parentNode;
        // console.log(toBeDeleted);
    
        localStorage.removeItem(heroId);
    
        allSuperheroContainer.removeChild(toBeDeleted);

        
    });

    /* event listener for more info button ------------------- */
    heroDetails.querySelector('.info').addEventListener('click', function(e){
        e.preventDefault();

        localStorage.setItem('idKey', heroId);  /* key is idKey(string) and value heroId(e.g. 184728) */
        window.location.assign('./info.html');
    })

}

function alertModal() {
    let toggle = document.getElementById("alertBox");
    toggle.className = "show";
    setTimeout(function(){ toggle.className = toggle.className.replace("show", ""); }, 3000);
}











