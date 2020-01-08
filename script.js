var add = document.getElementById("add");
var input = document.getElementById("champ");
var ul = document.querySelector("ul");
var removeButton = document.getElementsByClassName("del");


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
    li.appendChild(deleteButton)
    input.value = " "


    deleteButton.addEventListener("click",removeItem)

    function removeItem () {
        li.parentNode.removeChild(li)
    }

};







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




