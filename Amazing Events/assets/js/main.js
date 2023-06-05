

//como window es el elemento global y principal, y nosotros vamos a acceder todo mediante el document, osea el dom, nos provee de métodos, para poder acceder a nuestro documento y poder cambiar su estructura su estilo, contenido, sacar/modificar, pero no es parte de js, es lo que se llama una web api.
//console.log(window)
//console.log([window.document.children.main])

//cuando hacemos console.log , viene de window, es un método de window, y al ser este global, se puede entrar desde document.

//console.log([document])


// esto se llama TRAVERSING DEL DOM
//console.log([document.children[0].children[1].children[0].children])


// getElementBy   
//pueden traerse por clase, por id o por etiqueta, y es más eficiente cuando necesitamos traer un solo elemento

//console.log(document.getElementById("navbarSupportedContent").textContent)

//console.log(document.getElementById("flexCheckDefault").style.backgroundColor ="orange")

//se puede guardar ese elemento en una variable
//por ejemplo:

//let checkbox = document.getElementById("titulo")
//console.log(titulo.backgroundColor = "orange") //esto no se suele usar mucho por que es el equivalente a modificar estilos. Lo que no debemos hacer-->preferir css
//lo que si es mejor modificar las clases/etiquetas del html
//console.log(titulo.textContent = "workshop dom")

//console.log([titulo])//sin corchetes se ve como etiqueta, y con corchetes puedo ver sus propiedades

// en consola podemos encontrar dentro de los de las propiedades de un titulo por ejemplo,  vas a encontrar 
// classList  muestra una lista como una especie de arrai en que cada class está en un índice
// className  va a mostrar las classes en un solo string


// encabezado = document.getElementsByClassName("card") 
//console.log([encabezado])

//let anchors = document.getElementsByTagName("a")
//.log([anchors])

//query Selector

//document.querySelector("selector")// primer elemento que coincida con el selector

//console.log(document.querySelectorAll)//Todos los elementos que coincidan con el selector
//let upComingEvents = document.getElementById("sectionUpcomigEvents")
//console.log(upComingEvents)

console.log(data)

let seccion = document.getElementById("contenedor")
console.log([seccion])
let currentDate = new Date(data.currentDate)
console.log (currentDate)



for (let i = 0; i < data.events.length; i++) {
//let eventdate = new Date(data.events[i].date)
     
  //  if (eventdate.getMonth() === 0 && eventdate.getFullYear() === 2023 ) {
        seccion.innerHTML +=`<div class="card bg-dark text-white shadow p-2 mb-5 ms-3 me-3 rounded border-white" style="width: 18rem;">
                            
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
                

     
                


        /*
        function crearPlantilla(objeto){
            return `<div class="card bg-dark text-white shadow p-2 mb-5 ms-3 me-3 rounded border-white" style="width: 18rem;">
                                        
                        <img src="${data.events[i].image}" class="card-img-top bg-body-tertiary rounded" alt="...">
                            
                        <div class="card-body ">
                            <h5 class="card-title d-flex justify-content-center"> ${data.events[i].name} </h5>
                            
                            <p class="card-text text-center">${data.events[i].description}</p>
                            <div class="card-body d-flex align-items-end        justify-content-between">
                                <p>Price: $ ${data.events[i].price}</p>
                                <button class="btn btn-outline-secondary w-25"><a class=" link-light  text-decoration-none" href="/details.html">Buy</a></button>
                            </div>
                        </div>
                            
                    </div>` 
                

        }


                 
        /*    seccion.innerHTML = ` <article>

                                        <h5> ${data.events[0].name}</h5>
                                        <img src="${data.events[1].image}" alt="imagen_evento">
                                        <p>${data.events[0].date}</p>
                                        <p>${data.events[0].description}</p>

                                    </article>` */





