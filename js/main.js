let aantalProducten = 0;

function voegToeAanWinkelwagen() {
  aantalProducten += 1;
  document.getElementById("cartcount").textContent = aantalProducten;
}