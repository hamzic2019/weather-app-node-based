const forma = document.querySelector('.forma');
const city = document.querySelector('.city');
const searchBox = document.querySelector('.search-box');
const citycity = document.querySelector('.citycity');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const hum = document.querySelector('.hum');
const wind = document.querySelector('.wind'); 

forma.addEventListener('submit', (data) => {
    data.preventDefault();

    fetch(`http://localhost:3000/ask?city=${city.value}`)
        .then(response => {
            response.json()
                .then(data => {
                    if(data.exact === 'Clear'){
                        searchBox.className = 'search-box clear';
                        
                    }else if(data.exact === 'Snow') {
                        searchBox.className = 'search-box snow';
                    }else if(data.exact === 'Clouds') {
                        searchBox.className = 'search-box clouds';
                    }else {
                        searchBox.style.backgroundColor = "blue";
                    }

                    console.log(data);

                    citycity.innerHTML = data.city;
                    temp.innerHTML = data.temp + '*C';
                    desc.innerHTML = data.description;
                    hum.innerHTML = data.humidity + '%';
                    wind.innerHTML = data.wind;
                })
        })
})

console.log('HI TEHRE FORM SERVER SIDE')
