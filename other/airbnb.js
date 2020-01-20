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

  document.querySelector("#price-sorter .sort").style.display = "inline-block";
  document.querySelector("#name-sorter .sort").style.display = "none";

  if (sortPriceAscending) {
    document.querySelector("#price-sorter .sort").className = "sort ascending";

    rooms.sort(function(room1, room2) {
      if (room1.price > room2.price) return -1;
      return 1;
    });
  } else {
    document.querySelector("#price-sorter .sort").className = "sort";
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

  document.querySelector("#price-sorter .sort").style.display = "none";
  document.querySelector("#name-sorter .sort").style.display = "inline-block";

  if (sortNameAscending) {
    document.querySelector("#name-sorter .sort").className = "sort ascending";
    // as per the LU JS | Data Types in JavaScript - number & string
    rooms.sort(function(room1, room2) {
      return room1.name.localeCompare(room2.name);
    });
  } else {
    document.querySelector("#name-sorter .sort").className = "sort";

    rooms.sort(function(room1, room2) {
      return room2.name.localeCompare(room1.name);
    });
  }

  drawRooms();
};

// predefined values. If not filteredRooms is passed, get by default rooms
function drawRooms(filteredRooms = rooms) {
  let roomsDOMEl = document.querySelector("#rooms tbody");
  roomsDOMEl.innerHTML = "";

  filteredRooms.forEach(room => {
    let roomDOMEl = document.createElement("tr");
    roomDOMEl.innerHTML = `
              <td>${room.name}</td>
              <td>${room.price} €</td>
          `;

    roomsDOMEl.appendChild(roomDOMEl);
  });
}

document.querySelector("#search").onkeyup = function(e) {
  let filteredRooms = rooms.filter(
    room => room.name.toUpperCase() === e.target.value.toUpperCase()
  );

  drawRooms(filteredRooms);
};
