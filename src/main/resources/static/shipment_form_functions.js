$( document ).ready(function() {
	enableOrDisableSubmitButton();
	enableOrDisableRemoveButtons();
	adjustItemsIndexes();
});

function enableOrDisableRemoveButtons() {
	var removeButtons = $("button.removeItemField");
	if( removeButtons.length > 1) {
		removeButtons.removeAttr("disabled");
	} else {
		removeButtons.attr("disabled", "true");
	}
}

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

function adjustItemsIndexes() {
    $(".itemFieldText").each(function(index) {
        $(this).text("Item " + (index + 1));
    });
    $("button.removeItemField").each(function(index, element) {
        element.setAttribute("onclick", "onRemoveItemClicked(" + (index) +")");
    });
    $("input.itemFieldInput").each(function(index, element) {
        element.setAttribute("name", "items[" + (index) + "].name");
    });
    $("input.itemId").each(function(index, element) {
        element.setAttribute("name", "items[" + (index) + "].id");
    });
}

function onAddItemClicked() {
    var itemFields = document.getElementById("itemFields");
    var lastItemField = itemFields.lastElementChild;
    var newItemField = lastItemField.cloneNode(true);
    itemFields.appendChild(newItemField);
    newItemField.getElementsByClassName("itemFieldInput")[0].value = "";
    adjustItemsIndexes();
    var itemIdInputToRemove = newItemField.getElementsByClassName("itemId");
    if (itemIdInputToRemove.length > 0) {
        newItemField.removeChild(newItemField.getElementsByClassName("itemId")[0]);
    }
    enableOrDisableRemoveButtons();
    enableOrDisableSubmitButton();
}

function onRemoveItemClicked(itemIndex) {
    var itemFieldsContainer = document.getElementById("itemFields");
    var itemFields = itemFieldsContainer.children;
    itemFieldsContainer.removeChild(itemFields[itemIndex]);
    adjustItemsIndexes();
    enableOrDisableRemoveButtons();
    enableOrDisableSubmitButton();
}

function onType() {
    enableOrDisableSubmitButton();
}