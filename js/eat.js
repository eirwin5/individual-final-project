function showfilter() {
    var filter_form = document.getElementById("filter-form");
    var filter_container = document.getElementById("filter");
    var curr_display = filter_form.style.display;
    var grid = document.getElementsByClassName("grid")[0];


    if (curr_display === "none" || !curr_display) {
        filter_form.style.display = "contents";
        filter_container.style.width = "20%";
        grid.style.width = "80%";
    }
    else {
        filter_form.style.display = "none";
        filter_container.style.width = "5%";
        grid.style.width = "100%";
    }

}

function toggleCard() {
    var cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        var cardClasses = card.className.split(" ").slice(1);
        var checked = false;

        cardClasses.forEach((cardClass) => {
            var checkbox = document.getElementById(`${cardClass}-checkbox`);
            if (checkbox.checked) {
                checked = true;
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
        var cards = document.querySelectorAll('.card');
        cards.forEach((card) => {
            card.style.display = 'block';
        });
    }
}

function openModel(id) {
    var modal = document.getElementById(`${id}-modal`);
    modal.style.display = "block";

    document.body.style.overflow = "hidden";
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModel(id);
        }
    }
}

function closeModel(id) {
    var modal = document.getElementById(`${id}-modal`);
    document.body.style.overflow = "scroll";
    modal.style.display = "none";
}