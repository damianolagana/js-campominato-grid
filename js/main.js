// selezionare il bottone nella pagina html
const btnGenerate = document.getElementById("btnPlay")
const gridBox = document.getElementById("grid")


// quando l'utente clicca accade un evento
btnGenerate.addEventListener("click",function(){
    generateGrid();
})







//////////// FUNZIONI ////

function generateGrid(){


    for(let numeri = 1 ; numeri <= 100 ; numeri++){
        const numero = numeri
        const newElement = document.createElement("div");
        newElement.classList.add("square");
       

        gridBox.append(newElement);
        newElement.innerText = numero;


        newElement.addEventListener("click",function(){
            
            
            newElement.classList.add("clicked")

            newElement.classList.toggle("clicked")
        })

        


    } 

    
}


