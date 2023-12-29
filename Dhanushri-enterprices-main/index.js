const inputName = document.getElementById("input-name");
const inputReview = document.getElementById("input-review");
const listContainer = document.getElementById("display-review");

function display() {
    if (inputName.value === " " || inputReview.value === " ") {
        alert("The boxes are not empty");
    } else {
        let h6 = document.createElement("h6");
        h6.innerHTML = inputName.value;
        listContainer.appendChild(h6);

        let p = document.createElement("p");
        p.innerHTML = inputReview.value;
        listContainer.appendChild(p);

        let button = document.createElement("button");
        button.innerHTML = "Delete";
        listContainer.appendChild(button);
    }
    inputName.value = " ";
    inputReview.value = " ";
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
}, false);