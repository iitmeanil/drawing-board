//setting a global size value to be used for resetting the grid
let globalGridSize =16;

// takes user input, checks it and passes it for creating the page
function setSize() {
    let num = prompt("Enter the Size of Grid you want (number between 10 and 100)",16);
    if (+num >=10 && +num <=100){
        startCreating (+num);
    }
}


// creates the grid page
function startCreating (gridSize = 16) {
    let newDiv = [];
    let margin = 0;
    let box;
    let outerBoxHeight = "600px";
    globalGridSize = gridSize;
    const body = document.querySelector('body');

    // clearing the body element completely, this is needed when re-creating the grid
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
    resetButton.addEventListener('click',() => {
        startCreating(globalGridSize);
    });
    buttonsDiv.appendChild(resetButton);

    const sizeButton = document.createElement("button");
    sizeButton.textContent = "Set Size";
    sizeButton.addEventListener ('click',setSize);
    buttonsDiv.appendChild(sizeButton);

    const sketchPad = document.createElement("div");
    sketchPad.classList.add("sketchPad");
    sketchPad.style.cssText = `height: ${outerBoxHeight}; width: ${outerBoxHeight}`;
    body.appendChild(sketchPad);

    
    let boxHeight = Math.floor((sketchPad.offsetHeight-5)/gridSize);// taking sketchpad height dynamically to take care of flexing.
    console.log(`boxheight: ${boxHeight}, gridsize: ${gridSize}`);
    console.log (`outerbox height: ${outerBoxHeight}, sketchpad offset height: ${sketchPad.offsetHeight}`);

    // creating grids of divs, there is outer div which are like vertically stacked boxes and then internal divs which are horizotal stacked
    for (let i = 0; i < gridSize; i++) {
        newDiv[i] = document.createElement("div");
        newDiv[i].classList.add("outerBox");
        sketchPad.appendChild(newDiv[i]);
        
        for (let j = 0; j < gridSize; j++){
            box = document.createElement("div");
            //box.textContent = "x";
            box.style.cssText = `margin: ${margin}px; height: ${boxHeight}px; width: ${boxHeight}px`;
            box.classList.add("innerBox");
            box.addEventListener("mouseover", (e) => {
                e.target.classList.add("hoverStyle"); 
            });
            box.addEventListener("mouseleave", (e) => {
                e.target.classList.remove("hoverStyle"); // removing dark style and applying light color as the mouse leaves the bx
                e.target.classList.add("hoverOffStyle");
            });
           newDiv[i].appendChild(box);
        }
    }
}