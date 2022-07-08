let globalGridSize =16;
function setSize() {
    let num = prompt("Enter the Size of Grid you want (number between 10 and 100)",16);
    if (+num >=10 && +num <=100){
        startCreating (+num);
    }
}

function startCreating (gridSize = 16) {
    if (isNaN(gridSize)) {
        gridSize = globalGridSize;
    }
    globalGridSize = gridSize;
    const body = document.querySelector('body');
// clearing the body
    let child = body.firstChild;
    while(child) {
        body.removeChild(child);
        child = body.firstChild;
    }


// adding header and buttons
    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Sketch Pad";
    body.appendChild(heading);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");
    body.appendChild(buttonsDiv);

    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.addEventListener('click',startCreating);
    buttonsDiv.appendChild(resetButton);

    const sizeButton = document.createElement("button");
    sizeButton.textContent = "Set Size";
    sizeButton.addEventListener ('click',setSize);
    buttonsDiv.appendChild(sizeButton);

    // creating grids of divs
    let newDiv = [];
    let margin = 1;
    let box;
    let boxHeight = Math.floor((window.innerHeight - (gridSize + 1)*margin - 200 )/gridSize);
    console.log(boxHeight, gridSize);
    //console.log(window.innerWidth, window.innerHeight);

    for (let i = 0; i < gridSize; i++) {
        newDiv[i] = document.createElement("div");
        newDiv[i].classList.add("outerBox");
        body.appendChild(newDiv[i]);
        
        for (let j = 0; j < gridSize; j++){
            box = document.createElement("div");
            //box.textContent = "x";
            box.style.cssText = `margin: ${margin}px; height: ${boxHeight}px; width: ${boxHeight}px`;
            box.classList.add("innerBox");
            box.addEventListener("mouseover", (e) => {
                e.target.classList.add("hoverStyle"); 
            });
            box.addEventListener("mouseleave", (e) => {
                e.target.classList.remove("hoverStyle"); 
                e.target.classList.add("hoverOffStyle");
            });

            
            newDiv[i].appendChild(box);
        }
    }
}