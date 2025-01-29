const cardsAry = [
  {
    name: "instagram",
    icon: '<i class="fa-brands fa-instagram"></i>',
  },
  {
    name: "twitter",
    icon: '<i class="fa-brands fa-twitter"></i>',
  },
  {
    name: "tiktok",
    icon: '<i class="fa-brands fa-tiktok"></i>',
  },
  {
    name: "gitHub",
    icon: '<i class="fa-brands fa-github"></i>',
  },
  {
    name: "python",
    icon: '<i class="fa-brands fa-python"></i>',
  },
  {
    name: "docker",
    icon: '<i class="fa-brands fa-docker"></i>',
  },
  {
    name: "instagram",
    icon: '<i class="fa-brands fa-instagram"></i>',
  },
  {
    name: "twitter",
    icon: '<i class="fa-brands fa-twitter"></i>',
  },
  {
    name: "tiktok",
    icon: '<i class="fa-brands fa-tiktok"></i>',
  },
  {
    name: "gitHub",
    icon: '<i class="fa-brands fa-github"></i>',
  },
  {
    name: "python",
    icon: '<i class="fa-brands fa-python"></i>',
  },
  {
    name: "docker",
    icon: '<i class="fa-brands fa-docker"></i>',
  },
];
let flipCardAry = [];
let matchedPairs = 0;
flip();

// console.log(cardsAry);
var gameboard = document.getElementById("gameCard");
displayCards();
function flip() {
  for (let i = cardsAry.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [cardsAry[i], cardsAry[randomIndex]] = [cardsAry[randomIndex], cardsAry[i]];
  }
}

function displayCards() {
  cardsAry.forEach((current, index, arr) => {
    const card = document.createElement("div");

    card.setAttribute("id", index);
    card.classList.add("cardback");
    card.classList.add("active");
    gameboard.append(card);
    card.addEventListener("click", flipCard);
  });
}

function flipCard() {
  if (flipCardAry.length < 2 && this.classList.contains("active")) {
    let cardId = this.getAttribute("id");
    flipCardAry.push(this);
    this.classList.remove("cardback");
    this.innerHTML = cardsAry[cardId].icon;
    if (flipCardAry.length == 2) {
      setTimeout(checkMatch, 1000);
      // checkMatch();
    }
  }
}
function checkMatch() {
  const cardId1 = flipCardAry[0].getAttribute("id");
  const cardId2 = flipCardAry[1].getAttribute("id");
  if (cardsAry[cardId1].name === cardsAry[cardId2].name) {
    flipCardAry[0].style.border = "none";
    flipCardAry[0].innerHTML = "";
    flipCardAry[1].innerHTML = "";
    flipCardAry[0].classList.remove("active");
    flipCardAry[1].classList.remove("active");
    matchedPairs++;
    GameOver();
  } else {
    flipCardAry[0].innerHTML = "";
    flipCardAry[0].classList.add("cardback");
    flipCardAry[1].innerHTML = "";
    flipCardAry[1].classList.add("cardback");
  }
  flipCardAry = [];
}
function GameOver() {
  if (matchedPairs == cardsAry.length / 2) {
    while (gameboard.firstChild) {
      gameboard.removeChild(gameboard.firstChild);
    }
    gameboard.innerHTML = "You won";
    gameboard.classList.remove("game");
    gameboard.classList.add("won");
  }
}
function Reset() {
  window.location.reload();
}
