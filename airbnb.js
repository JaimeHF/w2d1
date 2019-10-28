class AirbnbRoom {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

let rooms = [
  new AirbnbRoom("Wellington NZ", 1200),
  new AirbnbRoom("Bangkok", 2200),
  new AirbnbRoom("Madrid", 300),
  new AirbnbRoom("NY", 400)
];

drawRooms();

let sortPriceAscending = false;

document.querySelector("#price-sorter").onclick = function() {
  sortPriceAscending = !sortPriceAscending;

  if (sortPriceAscending) {
    rooms.sort(function(room1, room2) {
      if (room1.price > room2.price) return -1;
      return 1;
    });
  } else {
    rooms.sort(function(room1, room2) {
      if (room1.price > room2.price) return 1;
      return -1;
    });
  }

  drawRooms();
};

let sortNameAscending = false;

document.querySelector("#name-sorter").onclick = function() {
    sortNameAscending = !sortNameAscending;

  if (sortNameAscending) {
    // as per the LU JS | Data Types in JavaScript - number & string
    rooms.sort(function(room1, room2) {
        return room1.name.localeCompare(room2.name);
    });
  } else {
    rooms.sort(function(room1, room2) {
        return room2.name.localeCompare(room1.name);
    });
  }

  drawRooms();
};

function drawRooms() {
  let roomsDOMEl = document.querySelector("#rooms tbody");
  roomsDOMEl.innerHTML = "";

  rooms.forEach(room => {
    let roomDOMEl = document.createElement("tr");
    roomDOMEl.innerHTML = `
              <td>${room.name}</td>
              <td>${room.price} €</td>
          `;

    roomsDOMEl.appendChild(roomDOMEl);
  });
}
