// api key
const apiKey = '1eb6840e99074476a7789e4165b8e538'

let gameNameRef2 = document.getElementById('game-name2')
let searchBtn2 = document.getElementById('search-btn2')
let result2 = document.getElementById('result2')
let input2 = document.querySelector('input[type="search"]')

//function for search game trailers
let getGame2 = () => {
    let gameName2 = gameNameRef2.value 
    let url = `https://api.rawg.io/api/games/${gameName2}/movies?key=${apiKey}`

    //if input is empty
    if(gameName2.length <= 0){
        result2.innerHTML = `<h3 class='msg'> Please Enter a Game Name</h3>`
    }

    //if input is Not empty
    else{
        axios.get(url)
        .then ((res) => {
            console.log(res.data.results)  
            let {results} = res.data                   
            
            result2.innerHTML = `
            <div class='info'>                
                <div>
                    <h2>${results[0].name}</h2>   
                    <iframe width="560" height="315"
                    src="${results[0].data.max}">
                    </iframe>
                </div>
                
            </div>`
        })
        
    }
}
searchBtn2.addEventListener('click', getGame2)
input2.addEventListener('search', getGame2)

//dark mode function
function darkMode() {
    let element = document.body;
    element.classList.toggle("color-mode");
  }