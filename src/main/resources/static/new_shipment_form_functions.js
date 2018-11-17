$( document ).ready(function() {
});


function enableOrDisableSubmitButton() {
    var submitAllowed = true;
    $("input.required").each(function(idx, element) {
        if (element.value.length == 0) {
            submitAllowed = false;
        }
    });
    if (submitAllowed) {
        $("#submitButton").removeAttr("disabled");
    } else {
        $("#submitButton").attr("disabled", "true");
    }
}

function onAddItemClicked() {
    var itemFields = document.getElementById("itemFields");
    var lastItemField = itemFields.lastElementChild;
    var lastItemIndex = parseInt(lastItemField.getElementsByClassName("itemFieldInput")[0].getAttribute("name").match(/[0-9]+/));
    var newItemIndex = lastItemIndex + 1;
    var newItemField = lastItemField.cloneNode(true);
    newItemField.getElementsByClassName("itemFieldText")[0].firstChild.nodeValue = "Item " + (newItemIndex + 1) + ":";
    newItemField.getElementsByClassName("itemFieldInput")[0].setAttribute("name", "items[" + newItemIndex + "].name");
    newItemField.getElementsByClassName("itemFieldInput")[0].value = "";
    newItemField.getElementsByClassName("removeItemField")[0].setAttribute("onclick", "onRemoveItemClicked(" + newItemIndex +")"); 
    itemFields.appendChild(newItemField);
    $("button.removeItemField").removeAttr("disabled");
    enableOrDisableSubmitButton();
}

function onRemoveItemClicked(itemIndex) {
    var itemFieldsContainer = document.getElementById("itemFields");
    var itemFields = itemFieldsContainer.children;
    for(i = itemIndex+1 ; i < itemFields.length ; i++) {
        itemFields[i].getElementsByClassName("itemFieldText")[0].firstChild.nodeValue = "Item " + i + ":";
        itemFields[i].getElementsByClassName("itemFieldInput")[0].setAttribute("name", "items[" + (i - 1) + "].name");
        itemFields[i].getElementsByClassName("removeItemField")[0].setAttribute("onclick", "onRemoveItemClicked(" + (i - 1) +")");
    }
    itemFieldsContainer.removeChild(itemFields[itemIndex]);
    if (itemFields.length == 1) {
        $("button.removeItemField").attr("disabled", "true");
    }
}

function onType() {
    enableOrDisableSubmitButton();
}