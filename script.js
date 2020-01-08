var add = document.getElementById("add");
var input = document.getElementById("champ");
var ul = document.querySelector("ul");


var checkInputLenght = function () {
    return input.value.length
};


var ajouterArticle = function () {
    var li = document.createElement("li");
    var textLi = document.createTextNode(input.value)
    var deleteButton = document.createElement("button");
    var textDeleteButton = document.createTextNode("Delete");
    deleteButton.className = "del"
    deleteButton.appendChild(textDeleteButton);
    li.appendChild(textLi);
    ul.appendChild(li)
    ul.appendChild(deleteButton)
    input.value = " "
    var lastC = ul.lastChild.innerHTML;

console.log(lastC)
};



if (document.body.classList.contains("del")) {
    var removeButton = document.getElementsByClassName("del");
    ul.removeChild("li");
    function removeAfterClick() {
        ul.removeChild(li)
    };
}



var addAfterClik = function () {
    if (checkInputLenght() > 0) {
        ajouterArticle()
    }
}

var afterPress = function () {
    if (checkInputLenght() > 0 && event.keyCode === 13) {
        ajouterArticle()
    }
}

input.addEventListener("keypress", afterPress);
add.addEventListener("click", addAfterClik);




