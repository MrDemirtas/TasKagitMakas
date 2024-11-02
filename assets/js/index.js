const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const statusMsg = document.querySelector(".statusMsg");

let score = {
  playerScore: 0,
  computerScore: 0,
};

const antiHamleler = {
  TAŞ: "KAĞIT",
  KAĞIT: "MAKAS",
  MAKAS: "TAŞ",
};

const hamleler = Object.keys(antiHamleler); // * ["TAŞ", "KAĞIT", "MAKAS"]

const computerSelected = () => {
  let computerSelect = hamleler[Math.floor(hamleler.length * Math.random())];
  return computerSelect;
};

const playerSelected = (hamle) => {
  let computerSelect = computerSelected();
  if (hamle != computerSelect && computerSelect != antiHamleler[hamle]) {
    statusMsg.innerHTML = `Bilgisayar <b>${computerSelect}</b> seçti<br><span class="green">Tebrikler kazandın!</span>`;
    score.playerScore++;
  } else if (hamle == computerSelect) {
    statusMsg.innerHTML = `Bilgisayar <b>${computerSelect}</b> seçti<br><span>Berabere!</span>`;
  } else {
    statusMsg.innerHTML = `Bilgisayar <b>${computerSelect}</b> seçti<br><span class="red">Maalesef kaybettin!</span>`;
    score.computerScore++;
  }
  updateScore();
};

const updateScore = () => {
  playerScore.innerHTML = score.playerScore;
  computerScore.innerHTML = score.computerScore;
};
