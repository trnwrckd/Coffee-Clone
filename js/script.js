document.addEventListener("DOMContentLoaded", function (event) {
    navScrolled();
    counter();
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
counter = () => {
    var stats = document.getElementById("review-stats");
    let options = {
        root: document.getElementById("review"),
        rootMargin: '0px',
        threshold: 1
    }
    let observer = new IntersectionObserver(counterCallback, options);
    observer.observe(stats);
}

counterCallback = () => {
    var item1 = document.getElementsByClassName("stat-counter")[0];
    var item2 = document.getElementsByClassName("stat-counter")[1];
    var item3 = document.getElementsByClassName("stat-counter")[2];
    var item4 = document.getElementsByClassName("stat-counter")[3];
    animateValue(item1, 2536);
    animateValue(item2, 7321);
    animateValue(item3, 2013);
    animateValue(item4, 10017);
}

function animateValue(item, limit) {
    let startTimestamp = null;
    let i = 0;
    const step = (timestamp) => {
        console.log("inside step");
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / 1200, 1);
        item.innerHTML = Math.floor(progress * (limit - i) + i);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}