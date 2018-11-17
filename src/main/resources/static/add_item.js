function onAddItemClicked() {
    var itemFields = document.getElementById("itemFields");
    var lastItemField = itemFields.lastElementChild;
    var lastItemIndex = parseInt(lastItemField.getElementsByClassName("itemFieldInput")[0].getAttribute("name").match(/[0-9]+/));
    var newItemIndex = lastItemIndex + 1;
    var newItemField = lastItemField.cloneNode(true);
    newItemField.getElementsByClassName("itemFieldText")[0].firstChild.nodeValue = "Item " + (newItemIndex + 1) + ":";
    newItemField.getElementsByClassName("itemFieldInput")[0].setAttribute("name", "items[" + newItemIndex + "].name");
    newItemField.getElementsByClassName("itemFieldInput")[0].value = "";
    itemFields.appendChild(newItemField);
}