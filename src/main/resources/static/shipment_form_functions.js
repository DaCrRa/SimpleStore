$( document ).ready(function() {
	enableOrDisableSubmitButton();
	enableOrDisableRemoveButtons();
	adjustItemsIndexes();
	addItemCheckboxBehavior();
});

function toggleCrossOut(j_checkbox) {
	if( j_checkbox.is(':checked') ) {
		j_checkbox.siblings(".itemFieldInput").css("text-decoration", "line-through");
	} else {
		j_checkbox.siblings(".itemFieldInput").css("text-decoration", "");
	}
}

function addItemCheckboxBehavior() {
	$(".itemCheckbox").on('change', function() {
		toggleCrossOut($(this));
	});
}

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
	$(".itemCheckbox").each(function(index, element) {
		element.setAttribute("name", "items[" + (index) + "].marked");
	});
}

function onAddItemClicked() {
	var itemFields = document.getElementById("itemFields");
	var lastItemField = itemFields.lastElementChild;
	var newItemField = lastItemField.cloneNode(true);
	itemFields.appendChild(newItemField);
	newItemField.getElementsByClassName("itemFieldInput")[0].value = "";
	var newCheckBox = newItemField.getElementsByClassName("itemCheckbox")[0];
	newCheckBox.checked = false;
	toggleCrossOut($(newCheckBox));
	adjustItemsIndexes();
	var itemIdInputToRemove = newItemField.getElementsByClassName("itemId");
	if (itemIdInputToRemove.length > 0) {
		newItemField.removeChild(newItemField.getElementsByClassName("itemId")[0]);
	}
	enableOrDisableRemoveButtons();
	enableOrDisableSubmitButton();
	addItemCheckboxBehavior();
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
