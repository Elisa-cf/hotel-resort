const cards = document.querySelector(".cards");

const rooms = [
  {
    name: "Minnie",
    type: "double",
    guests: 2,
    petsFriendly: false,
    favorite: "false",
    picture:
      "https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347_960_720.jpg",
  },
  {
    name: "Bella",
    type: "double",
    guests: 2,
    petsFriendly: true,
    favorite: "false",
    picture:
      "https://cdn.pixabay.com/photo/2020/10/08/08/10/hotel-5637315_960_720.jpg",
  },
  {
    name: "Ariel",
    type: "triple",
    guests: 3,
    petsFriendly: true,
    favorite: "true",
    picture:
      "https://cdn.pixabay.com/photo/2017/04/28/22/16/room-2269594_960_720.jpg",
  },
  {
    name: "Alicia",
    type: "triple",
    guests: 3,
    petsFriendly: true,
    favorite: "true",
    picture:
      "https://cdn.pixabay.com/photo/2020/01/15/18/02/room-4768553_960_720.jpg",
  },
  {
    name: "Jasmine",
    type: "family",
    guests: 4,
    petsFriendly: false,
    favorite: "false",
    picture:
      "https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_960_720.jpg",
  },
  {
    name: "Aurora",
    type: "family",
    guests: 6,
    petsFriendly: false,
    favorite: "true",
    picture:
      "https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201__340.jpg",
  },
];

function createCard(title, imageUrl) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = title;
  cardBody.appendChild(cardTitle);

  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.innerHTML = "See more";
  cardBody.appendChild(cardButton);
}

//to iterate all the rooms:

// for (let i = 0; i < rooms.length; i++) {
//   createCard(rooms[i].name, rooms[i].picture);
// }

//select the 3 favorites:

rooms.forEach(function (favRoom) {
  if (favRoom.favorite === "true") createCard(favRoom.name, favRoom.picture);
});

//other way:

// rooms.forEach((room) => {
//   if (room.favorite === "true") createCard(room.name, room.picture);
// });
