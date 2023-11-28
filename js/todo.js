function toggleCard() {
    var cards = document.querySelectorAll('.holder');
    cards.forEach((card) => {
        var cardClasses = card.className.split(" ").slice(1);
        var checked = false;

        cardClasses.forEach((cardClass) => {
            if (cardClass != "inview2") {
                var checkbox = document.getElementById(`${cardClass}-checkbox`);
                if (checkbox.checked) {
                    checked = true;
                }
            }
        })

        card.style.display = checked ? 'block' : 'none';
    });
}

function toggleAll() {
    var checkboxes = document.querySelectorAll("input");
    var numUnchecked = 0;

    checkboxes.forEach((checkbox) => {
        if (!checkbox.checked) {
            numUnchecked++;
        }
    });

    if (numUnchecked === checkboxes.length) {
        var cards = document.querySelectorAll('.holder');
        cards.forEach((card) => {
            card.style.display = 'block';
        });
    }
}

function seeMore(id) {
    if (document.innerWidth < 600) {
        document.getElementById(`${id}-mobile-seemore`).style.display = "contents";
    }

    document.getElementById(`${id}-seemore`).style.display = "contents";
    console.log(`${id}-see-less`, document.getElementsByClassName(`${id}-see-less`)[0])

    //buttons
    document.getElementsByClassName(`${id}-see-less`)[0].style.display = "inline"
    document.getElementsByClassName(`${id}-see-more`)[0].style.display = "none"

}

function seeLess(id) {
    if (document.innerWidth < 600) {
        document.getElementById(`${id}-mobile-seemore`).style.display = "none";
    }
    document.getElementById(`${id}-seemore`).style.display = "none";

    //buttons
    document.getElementsByClassName(`${id}-see-less`)[0].style.display = "none"
    document.getElementsByClassName(`${id}-see-more`)[0].style.display = "inline"
}

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.card');

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
