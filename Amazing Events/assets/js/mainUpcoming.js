console.log(data)


let currentDate = new Date(data.currentDate)
console.log (currentDate)



for (let i = 0; i < data.events.length; i++) {
     let eventdate = new Date(data.events[i].date)
      
    if ( eventdate >= currentDate) { 
           let upComingEvents = document.getElementById("sectionUpcomigEvents")
            upComingEvents.innerHTML +=`<div class="card bg-dark text-white shadow p-2 mb-5 ms-3 me-3 rounded border-white" style="width: 300px;">
                            
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

         /*  else  {

                let pastEvents = document.getElementById("pastEvents")
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
                }*/
