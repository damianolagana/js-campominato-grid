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
    let cellNumberSide = Math.ceil(Math.sqrt(cellQuantity)); 

    for(let i = 1 ; i <= cellQuantity ; i++){
        
       
        const newElement = document.createElement("div");
        newElement.classList.add("square");
        newElement.style.width =`calc(100% / ${cellNumberSide})`;
        newElement.style.height =`calc(100% / ${cellNumberSide})`;
        newElement.innerText = i;

        newElement.addEventListener("click",function(){
            this.classList.toggle("clicked")
        });


    
        gridBox.append(newElement);
       
    } 

    
}


