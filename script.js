const galleryImages = [
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/12/Broadway_tower_edit.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/60/Naxos_Town_and_Castle.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/0/02/Claude_Monet_-_Waterloo_Bridge%2C_London%2C_at_Sunset.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/8/89/Van_Gogh_-_Red_Vineyards_at_Arles.jpg"
];

const gallery = document.getElementById("gallery");

galleryImages.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "CC Artwork";
    img.onclick = () => openLightbox(url);
    gallery.appendChild(img);
});

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

function openLightbox(url) {
    lightbox.innerHTML = `<img src='${url}'>`;
    lightbox.style.display = "flex";
}

lightbox.onclick = () => lightbox.style.display = "none";
