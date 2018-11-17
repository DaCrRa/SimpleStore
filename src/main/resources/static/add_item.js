var counter=0;
function onAddItemClicked() {
    var newItemIndex = ++counter;
    var itemFields = document.getElementById("itemFields");
    var lastItemField = itemFields.lastElementChild;
    var newItemField = lastItemField.cloneNode(true);
    newItemField.getElementsByClassName("itemFieldText")[0].firstChild.nodeValue = "Item " + (newItemIndex + 1) + ":";
    newItemField.getElementsByClassName("itemFieldInput")[0].setAttribute("name", "items[" + newItemIndex + "].name");
    newItemField.getElementsByClassName("itemFieldInput")[0].value = "";
    itemFields.appendChild(newItemField);
}