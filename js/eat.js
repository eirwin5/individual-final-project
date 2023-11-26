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
        const cardId = card.className.split(" ")[1];
        var checkbox = document.getElementById(`${cardId}-checkbox`);
        card.style.display = checkbox.checked ? 'block' : 'none';
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
    // console.log(`${id}-modal`, modal)
    modal.style.display = "block";
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function closeModel(id) {
    var modal = document.getElementById(`${id}-modal`);
    modal.style.display = "none";
}