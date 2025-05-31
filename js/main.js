let aantalProducten = 0;

function voegToeAanWinkelwagen() {
  aantalProducten += 1;
  document.getElementById("cartcount").textContent = aantalProducten;
}

const productContainer = document.getElementById('products');
const productTemplate = document.getElementById('product-template');

const products_array = [
  ["Deze piano wordt gekenmerkt door een warme en heldere klank.", 4299, "fotos/foto1.png", "Doutreligne Master D132 AdSilent 2 PE Black polished", false],
  ["De C2X heeft een rijke en heldere klank en produceert een mooie diepe toon.", 10999, "fotos/foto2.png", "Yamaha C2X SH3 PE Black polished", true],
  ["De slanke pianoklavieren van Casio zijn erg handig voor wie klein woont.", 419.99, "fotos/foto3.png", " Casio Privia PX-S1100 BK digitale piano ", true],
  ["Deze piano wordt gekenmerkt door een warme en heldere klank.", 4299, "fotos/foto4.png", "De Klavecimbel", true],
  ["De C2X heeft een rijke en heldere klank en produceert een mooie diepe toon.", 10999, "fotos/foto6.png", "Kawai GL10 153cm Grand Piano", true],
  ["De slanke pianoklavieren van Casio zijn erg handig voor wie klein woont.", 419.99, "fotos/foto7.png", "Yamaha P-145B ", false],
  
];

products_array.forEach((product, index) => {
  const [beschrijving, prijs, afbeelding, naam, beschikbaar] = product;

  const clone = productTemplate.cloneNode(true);
  clone.style.display = 'block';
  clone.setAttribute('id', 'product' + index);

  clone.querySelector('.product__img').src = afbeelding;
  clone.querySelector('.product__img').alt = naam;
  clone.querySelector('.product__title').textContent = naam;
  clone.querySelector('.product__description').textContent = beschrijving;

 if (!beschikbaar) {
  const knop = clone.querySelector('.product___button');
  knop.textContent = 'Uitverkocht';
  knop.disabled = true;
  knop.classList.add('uitverkocht');
}


  clone.querySelector('.product___button').addEventListener('click', voegToeAanWinkelwagen);

  productContainer.appendChild(clone);
});
