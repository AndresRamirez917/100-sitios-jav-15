async function getData() {
  const arrTitle = ["Reach out to us","Define goals","Meet your team","Go to work",];
  const result = await fetch("https://rickandmortyapi.com/api/character");
  const images = await result.json();
  console.log(arrTitle);
  console.log(images);

  images.results.forEach((element) => {
    for (j = 0; j <= 4; j++) {
      if (element.id == j) {
        const card = document.createRange().createContextualFragment(`
                        
                        <div class="card card-1">
                            <img src="${element.image}" alt="">
                            <p>${arrTitle[j - 1]}</p>
                        </div>
                        
                        `);
        const car_row = document.querySelector(".card-row");
        car_row.append(card);
      }
      if (element.id == j) {
        const card = document.createRange().createContextualFragment(`
                    
                    
                <div class="card-services card-1">
                    <img src="${element.image}">
                    <h2>${element.name}</h2>
                    <h2>${element.status}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate explicabo nobis consequatur molestiae nihil error doloribus cupiditate doloremque.</p>
                </div>
                      
                    
                    `);
        const car_row = document.querySelector(".card-row2");
        car_row.append(card);
      }
    }
  });
}


const btn_validar = document.getElementById('btn-validar')

const validar = (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    const arr = [];
    const arrMessages = ["Nombre", "Email", "Mensaje"];
    arr.push(nombre, email, mensaje);
    for(i = 0; i < arr.length; i++){
        for(i = 0; i < arrMessages.length; i++){
            if(arr[i].value == ""){
                swal({
                    title: `El campo ${arrMessages[i]} no puede estar vacío`,
                    icon: "error",
                     })
               return false;
            }
            
        }
        if(!emailValido(email.value)){
            swal({
                title: `El campo ${arrMessages[1]} no tiene el formato correcto`,
                icon: "error",
                 })
                 return false;
        }
        swal({
            title: `Los datos fueron enviados satisfactoriamente`,
            icon: "success",
             })
             nombre.value = "";
             email.value = "";
             mensaje.value = "";
        return true;
    }

}

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

btn_validar.addEventListener("click", validar)
getData();
