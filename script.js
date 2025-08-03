let grid = document.querySelector(".Box")
let num = 0

//Makes 1 row of 10 divs then adds more rows 
for (i = 0; i < 10; i++) {
    let row = document.createElement("div")
    row.className = ("row")
    grid.appendChild(row)

    for (j = 0; j < 10; j++) {
        let tiles = document.createElement("div")
        tiles.className = "tiles"
        row.appendChild(tiles)
       
    }   
    
    num += 1;
}