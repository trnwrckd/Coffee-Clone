document.addEventListener("DOMContentLoaded", function (event) {
    navScrolled();
    setModalSrc();
});

navScrolled = () => {
    var navBar = document.getElementById("navBar");
    var navHeight = navBar.offsetHeight;
    // console.log(navHeight);
    window.onscroll = function () {
        if (window.pageYOffset > navHeight) {
            navBar.style.backgroundColor = "rgba(20, 2, 0,0.8)";
        }
        else {
            navBar.style.backgroundColor = "transparent";
        }
    };
}
setModalSrc = () => {
    var videoModal = document.getElementById("videoModal")
    var video = document.getElementById("video");
    var url = video.getAttribute("src");
    videoModal.addEventListener('hidden.bs.modal', function () {
        video.setAttribute("src", "");
        console.log("hidden");
    });
    videoModal.addEventListener('shown.bs.modal', function () {
        video.setAttribute("src", url);
        console.log("shown");
    });
}