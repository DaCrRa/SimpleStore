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
    $("span.itemFieldText").each(function(index) {
        $(this).text("Item " + (index + 1) + ":");
    });
    $("button.removeItemField").each(function(index, element) {
        element.setAttribute("onclick", "onRemoveItemClicked(" + (index) +")");
    });
    $("input.itemFieldInput").each(function(index, element) {
        element.setAttribute("name", "items[" + (index) + "].name");
    });
}

function onAddItemClicked() {
    var itemFields = document.getElementById("itemFields");
    var lastItemField = itemFields.lastElementChild;
    var newItemField = lastItemField.cloneNode(true);
    itemFields.appendChild(newItemField);
    newItemField.getElementsByClassName("itemFieldInput")[0].value = "";
    adjustItemsIndexes();
    enableOrDisableRemoveButtons();
    enableOrDisableSubmitButton();
}

function onRemoveItemClicked(itemIndex) {
    var itemFieldsContainer = document.getElementById("itemFields");
    var itemFields = itemFieldsContainer.children;
    itemFieldsContainer.removeChild(itemFields[itemIndex]);
    adjustItemsIndexes();
    enableOrDisableRemoveButtons();
}

function onType() {
    enableOrDisableSubmitButton();
}