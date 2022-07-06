function startCreating () {
    const body = document.querySelector('body');
    let gridSize = 25;
    let newDiv = [];
    let margin = 2;
    let box;
    let boxHeight = Math.floor((window.innerHeight - (gridSize + 1)*margin - 150 )/gridSize);
    console.log(boxHeight);
    console.log(window.innerWidth, window.innerHeight);

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