let square = document.getElementById("square");
console.log(square.style.left, square.style.top);

document.addEventListener("keydown", function(e) {
  console.log(e.key);
let leftPos = parseInt(square.style.left.slice(0, square.style.left.indexOf('p')));
let topPos = parseInt(square.style.top.slice(0, square.style.top.indexOf('p')));
  switch(e.key){
    case 'ArrowLeft':
        if(square.style.left !== '0px'){
        leftPos -= 10;
        square.style.left = `${leftPos}px`;
        }
          break;
    case 'ArrowRight':
        if(square.style.left !== '300px'){
        leftPos += 10;
        square.style.left = `${leftPos}px`; 
        }
        break;
    case 'ArrowUp':
        if(square.style.top !== '0px'){
        topPos -= 10;
        square.style.top = `${topPos}px`;
        }
        break;
    case 'ArrowDown':
        if(square.style.top !== '300px'){
        topPos += 10;
        square.style.top = `${topPos}px`;
        }
        break;
    default:
        break;
  }
});


function randomColor(){
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
}
square.addEventListener("click", function(e){
  if(e.target.id == 'square'){
  square.style.backgroundColor = randomColor();
  }
  
});

// 1. Create the button
const button = document.createElement("button");
button.innerHTML = "Generate Opponent";
// 2. Append somewhere
document.body.appendChild(button);
// 3. Add event handler
button.addEventListener ("click", function() {
  let oppSquare = document.createElement('div');
  oppSquare.style.backgroundColor = 'white';
  // oppSquare.style.top = '60px';
  // oppSquare.style.left = '180px';
  oppSquare.style.width = '50px';
  oppSquare.style.height = '50px';
  let parentElement = document.getElementById('game');
  parentElement.append(oppSquare);
  oppSquare.style.top = '60px';
  oppSquare.style.left = '180px';
});




