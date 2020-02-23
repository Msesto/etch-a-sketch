const container = document.getElementById("container");

function totalCells(length){
    for(let i = 0; i < length; i++){
        const g = document.createElement("div");
        g.setAttribute("id", "myCell");
        container.appendChild(g);
    }
}
totalCells(256)

const clear = document.getElementById("clear");
clear.addEventListener("click", ()=>{
    let numberOfCells = prompt("How many cells, do you want on each side?","16")
    gridBuilder(numberOfCells);
})

function gridBuilder(x){
    document.getElementById('container').innerHTML = ''
    totalCells(x*x);
    let fr = "";
    for(let i=0; i<x; i++){
        fr = fr + "1fr ";
    }
    container.style.gridTemplateColumns = fr;
    container.style.gridTemplateRows = fr;

    let cuadraditos = document.querySelectorAll("#myCell");
    cuadraditos.forEach((e)=>{
        let passBys = 0
        e.addEventListener("mouseover", (x)=>{
            passBys = passBys + 1;
            if(passBys < 10){    
                e.style.backgroundColor = random_color();
            } else { 
                e.style.backgroundColor = "black";
            } 
    })
    })
}
let cells = document.querySelectorAll("#myCell");
    cells.forEach((e)=>{
        let passBys = 0
        e.addEventListener("mouseover", (x)=>{
            passBys = passBys + 1;
            if(passBys < 10){    
                e.style.backgroundColor = random_color();
            } else { 
                e.style.backgroundColor = "black";
            }
        }) 
    })


function random_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
};
