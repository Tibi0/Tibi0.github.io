let currentImageIndex = 0;
const images = [
    { src: "./en.jpg.jpg", caption: "Üdvözöllek! Csak egy átlagos hős vagyok a hétköznapokból (batman), aki úgy döntött, hogy a szuperképességeit (mint pl a zoknijaim eltüntetése vagy nasi evése) a nagyvilág szolgálatába állítja" },
    { src: "./palya.jpg.jpg", caption: "Mindig van egy történetem, amely feldobja a napjaidat...Akár egy hirtelen jött társasjáték-est, akár egy kirándulás a város körül (nem, ezt nem én fotóztam...sajnos)" },
    { src: "./kaja.jpg", caption: "Ne is álmodj róla, hogy kapsz a kajámból, én is éhes vagyok, nem csak te..." },
    { src: "./futas.jpg.jpg", caption: "Mindig készen állok egy gym date-re, még ha nem is látszik (batmant úgysem nyomod le a kondiban)" },
    { src: "./kukac.jpg.jpg", caption: "Ígérem, hogy a körülöttem lévő világ mindig tele lesz nevetéssel, izgalommal és különleges pillanatokkal, amik csak arra várnak, hogy felfedezzük őket együtt." },
    
];

const showImage = (index) => {
    const imgElement = document.getElementById('currentImage');
    const captionElement = document.getElementById('imageCaption');
    imgElement.src = images[index].src;
    imgElement.alt = `Kép ${index + 1}`;
    captionElement.textContent = images[index].caption; 
};

document.getElementById('nextButton').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});

document.getElementById('prevButton').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});


showImage(currentImageIndex);
