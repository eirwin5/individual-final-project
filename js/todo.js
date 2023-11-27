function seeMore(id) {
    document.getElementById(`${id}-seemore`).style.display = "contents";
    console.log(`${id}-see-less`, document.getElementsByClassName(`${id}-see-less`)[0])
    document.getElementsByClassName(`${id}-see-less`)[0].style.display = "contents"
    document.getElementsByClassName(`${id}-see-more`)[0].style.display = "none"
}

function seeLess(id) {
    document.getElementById(`${id}-seemore`).style.display = "none";
    document.getElementsByClassName(`${id}-see-more`)[0].style.display = "contents"
    document.getElementsByClassName(`${id}-see-less`)[0].style.display = "none"
}

// script.js
document.addEventListener("DOMContentLoaded", function () {
    var wHeight = window.innerHeight * 7.5;
    document.getElementById("megagrid").style.height = `${wHeight}px`;

    const items = document.querySelectorAll('.appear2');

    const active = function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('inview2');

            }
        });
    }
    const io2 = new IntersectionObserver(active);
    for (let i = 0; i < items.length; i++) {
        io2.observe(items[i]);
    }

});

document.addEventListener("load", function () {
    var wHeight = window.innerHeight;
    console.log(wHeight)
    document.getElementById("megagrid").style.height = wHeight;
})
