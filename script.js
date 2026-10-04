/* ==============================
   HAA STUDIO
   Main JavaScript
   ============================== */


/* ==============================
   EXPLORE BUTTON
   ============================== */

function goToExplore() {

    const exploreSection = document.getElementById("explore");

    if (exploreSection) {
        exploreSection.scrollIntoView({
            behavior: "smooth"
        });
    }

}


/* ==============================
   LIKE SYSTEM
   ============================== */

function likeArtwork(button) {

    if (!button) {
        return;
    }

    const isLiked = button.classList.contains("liked");

    if (isLiked) {

        button.classList.remove("liked");

        button.innerHTML = "♡ Like";

    } else {

        button.classList.add("liked");

        button.innerHTML = "♥ Liked";

    }

}


/* ==============================
   ARTWORK CARD
   ============================== */

function openArtwork(artworkId) {

    console.log("Opening artwork:", artworkId);

}


/* ==============================
   PAGE LOADED
   ============================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("HAA Studio loaded successfully.");

});
