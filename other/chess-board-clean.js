let row;

for (var column = 0; column < 8; column++) {
  if (column % 2 === 0) {
    for (row = 0; row < 8; row++) {
      drawChessTile(row);
    }
  } else {
    for (row = 1; row <= 8; row++) {
      drawChessTile(row);
    }
  }
}

// for (var i = 0, r = 0; i < 64; i++) {
//     drawChessTile(i)
// }

// please note function hoisting effects as discussed!
// let drawChessTile = function () {

// }

// this function will be hoisted
function drawChessTile(rowAsArgument) {
  let chessTileDOMEl = document.createElement("div");
  chessTileDOMEl.className = "chess-tile";

  function setBackground(color) {
    chessTileDOMEl.style.backgroundColor = color;
  }

  rowAsArgument % 2 === 0 ? setBackground("white") : setBackground("black");

  document.querySelector("#chessboard").appendChild(chessTileDOMEl);
}
