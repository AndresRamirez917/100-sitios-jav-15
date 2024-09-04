async function getData(){
    const arrTitle = ["Reach out to us", "Define goals", "Meet your team", "Go to work"]
    const result = await fetch('https://rickandmortyapi.com/api/character');
    const images = await result.json()
    console.log(arrTitle)
    console.log(images)
    
    images.results.forEach(element => {
   
        for(j = 0; j <= 4 ; j++){
            if(element.id == j){
              
                    const card = document.createRange().createContextualFragment(`
                        
                        <div class="card card-1">
                            <img src="${element.image}" alt="">
                            <p>${arrTitle[j-1]}</p>
                        </div>
                        
                        `)
                        const car_row = document.querySelector('.card-row');
                        car_row.append(card)
                        
                
    
            }
            if(element.id == j){
              
                const card = document.createRange().createContextualFragment(`
                    
                    
                <div class="card-services card-1">
                    <img src="${element.image}">
                    <h2>${element.name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate explicabo nobis consequatur molestiae nihil error doloribus cupiditate doloremque.</p>
                </div>
                      
                    
                    `)
                    const car_row = document.querySelector('.card-row2');
                    car_row.append(card)
                    
            

        }
        }
    });


}

getData()