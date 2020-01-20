for (var column = 0; column < 8; column++) {
  if (column % 2 === 0) {
    for (var row = 0; row < 8; row++) {
      let chessTileDOMEl = document.createElement("div");
      chessTileDOMEl.className = "chess-tile";
      row % 2 === 0
        ? (chessTileDOMEl.style.backgroundColor = "white")
        : (chessTileDOMEl.style.backgroundColor = "black");

      document.querySelector("#chessboard").appendChild(chessTileDOMEl);
    }
  } else {
    for (var row = 1; row <= 8; row++) {
      let chessTileDOMEl = document.createElement("div");
      chessTileDOMEl.className = "chess-tile";

      row % 2 === 0
        ? (chessTileDOMEl.style.backgroundColor = "white")
        : (chessTileDOMEl.style.backgroundColor = "black");

      document.querySelector("#chessboard").appendChild(chessTileDOMEl);
    }
  }
}
