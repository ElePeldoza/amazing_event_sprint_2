
console.log(data)

 
let currentDate = new Date(data.currentDate) //establezco variable de la fecha de base
console.log (currentDate)



for (let i = 0; i < data.events.length; i++) // creo un loop que recorra el largo del array
{
     let eventdate = new Date(data.events[i].date) //creo otra variable que es la fecha del evento x cada evento (lo recorre con la i)


     if(eventdate <= currentDate) { //si la fecha del evento es menor o igual a la data base 
           {

                let pastEvents = document.getElementById("pastEvents") //"llamo a la seccion donde contengo mis cartas en past event y donde le cree un id"
                
                //aca el inner llamas tu variable de la sección donde van tus cards y despues del += se escribe en tu html las cards con el id que le diste
                pastEvents.innerHTML  += `<div class="card bg-dark text-white shadow p-2 mb-5 ms-3 me-3 rounded border-white" style="width: 18rem;">
                            
                <img src="${data.events[i].image}" class="card-img-top bg-body-tertiary rounded" alt="...">
                    
                <div class="card-body ">
                    <h5 class="card-title d-flex justify-content-center"> ${data.events[i].name} </h5>
                    <p class="card-text text-end">${data.events[i].date}</p>
                    <p class="card-text text-center">${data.events[i].description}</p>
                    <div class="card-body d-flex align-items-end        justify-content-between">
                        <p>Price: $ ${data.events[i].price}</p>
                        <button class="btn btn-outline-secondary w-25"><a class=" link-light  text-decoration-none" href="/details.html">Buy</a></button>
                    </div>
                </div>
                    
            </div>`         
                
            }  
     }
    }