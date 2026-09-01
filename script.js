const image = document.getElementById("profileImage");
const video = document.getElementById("profileVideo");

image.addEventListener("click", function() {
    image.style.display = "none";
    video.style.display = "block";
});