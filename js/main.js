// selezionare il bottone nella pagina html
const btnGenerate = document.getElementById("btnPlay")
const gridBox = document.getElementById("grid")


// quando l'utente clicca accade un evento
btnGenerate.addEventListener("click",function(){
    generateGrid();
})







//////////// FUNZIONI ////

function generateGrid(){

    let cellQuantity = 100
    let cellNumberSide = Math.sqrt(cellQuantity);

    for(let numeri = 1 ; numeri <= cellQuantity ; numeri++){
        
        const numero = numeri
       
        const newElement = document.createElement("div");
        newElement.classList.add("square");
        newElement.style.width =`calc(100% / ${cellNumberSide})`;
        newElement.style.height =`calc(100% / ${cellNumberSide})`;
        newElement.innerText = numero;

        gridBox.append(newElement);
       
    } 

    
}


