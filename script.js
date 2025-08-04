let button = document.querySelector(".change-grid")
let grid = document.querySelector(".Container")

//Makes a listener to if the button is clicked, depending on what the number is excuetes the make grid function 
button.addEventListener("click", () => {
let amount = prompt("What grid length do you want (Enter one number)");

row.remove();
tiles.remove();

for (i = 0; i < amount; i++) {
    let row = document.createElement("div")
    row.className = ("row")
    grid.appendChild(row)

    for (j = 0; j < amount; j++) {
        let tiles = document.createElement("div")
        tiles.className = "tiles"
        row.appendChild(tiles)
       
    }     
}
})






//Makes 1 row of 10 divs then adds more rows 
