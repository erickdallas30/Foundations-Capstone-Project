let gameSection = document.querySelector('.games')

// api key
const apiKey = '1eb6840e99074476a7789e4165b8e538'

// get all games main page
axios.get(`https://api.rawg.io/api/games?key=${apiKey}&page_size=32`)
  .then((res) => {
    console.log(res.data.results);
    let { results } = res.data;

    let games = ''
    for (let i = 0; i < results.length; i++) {
      games += `
      <div class="cardGame">
        <div><p class="game-name">${results[i].name}</p></div>
        <div><img class="image" src="${results[i].background_image}" alt="game poster"></div>
        <div><p class="rating">Rating: ${results[i].rating}</p></div>
        <div>
            <a href="https://${results[i].stores[0].store['domain']}" target="_blank" ><button>${results[i].stores[0].store['name']}</button></a>            
        </div>        
      </div>
    `
    console.log(games)
    }
    gameSection.innerHTML = games
  })
  .catch((err) => {
    console.log(err);
});

// search function page 
let gameNameRef = document.getElementById('game-name')
let searchBtn = document.getElementById('search-btn')
let result = document.getElementById('result')
let input = document.querySelector('input[type="search"]')

let getGame = () => {
    let gameName = gameNameRef.value 
    let url = `https://api.rawg.io/api/games?key=${apiKey}&search=${gameName}`

    //if input is empty
    if(gameName.length <= 0){
        result.innerHTML = `<h3 class='msg'> Please Enter a Game Name</h3>`
    }

    //if input is Not empty
    else{
        axios.get(url)
        .then ((res) => {
            console.log(res.data.results)  
            let {results} = res.data                       
            
            result.innerHTML = `
            <div class='card'>
              <div class='info'>
                <img id='imgSearch' src=${results[0].background_image} class='poster'>
                <div>
                  <h2>${results[0].name}</h2>
                  <h3>Rating: ${results[0].rating}</h3>
                  <h4>Released: ${results[0].released}</h4>
                  <h5>ID: ${results[0].slug}</h5>
                </div>  
              </div>            
                     
              <div class='info'>
                <img id='imgSearch' src=${results[2].background_image} class='poster'>
                <div>
                  <h2>${results[2].name}</h2>
                  <h3>Rating: ${results[2].rating}</h3>
                  <h4>Released: ${results[2].released}</h4>
                  <h5>ID: ${results[2].slug}</h5>
                </div>
              </div>
                
              <div class='info'>
                <img id='imgSearch' src=${results[3].background_image} class='poster'>
                <div>
                  <h2>${results[3].name}</h2>
                  <h3>Rating: ${results[3].rating}</h3>
                  <h4>Released: ${results[3].released}</h4>
                  <h5>ID: ${results[3].slug}</h5>
                </div>            
              </div>             
            </div>`
        })
        
    }
}

searchBtn.addEventListener('click', getGame)
input.addEventListener('search', getGame)


//dark mode function
function darkMode() {
  let element = document.body;
  element.classList.toggle("color-mode");
}

  