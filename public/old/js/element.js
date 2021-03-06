function createDecoration() {
    var className = $("#decorationDdl").find("a.dd-selected").find("label").text().trim().toLowerCase() + " tooltip tap-target";
    var imgName = $("#decorationDdl").find("a.dd-selected").find("label")[0].className.replace("dd-selected-text", "").trim();
    var elementType = $("#decorationDdlType").find("a.dd-selected").find("label").text().trim().toLowerCase()
    var faction = $("#decorationDdlFaction option:selected")[0].attributes[1].value;

    var img = createElement(idElement,
        imgName,
        $("#addNameMapDecoration").val(),
        className.toLowerCase(),
        "",
        elementType,
        createPos.y,
        createPos.x,
        $("#addTitleMapDecoration").val(),
        elementType,
        faction);

    $("." + elementType + "Section").append(img);
    if ($("#" + elementType)[0].checked) {
        $("#" + elementType)[0].checked = true;
        $("#" + idElement).show();
    }

    closeMenuDecoration();
    tooltipOne(idElement);
    idElement++;
};

function editElement() {
    var decorationToChange = $("#decorationToChange").val();
    var itemToChange = $("#" + decorationToChange);

    var title = $("#titleMapDecoration").val();
    var className = removeOldIcon(itemToChange[0].className
        .replace("icon", "")
        .replace("tooltipstered", "")
        .replace("draggable", "")
        .replace("inFront", "")
        .replace("  ", " ")
        .trim());

    className = removeOldSection(className);

    var userClass = $('#editDecorationDdl').data('ddslick').selectedData.userClass;
    var newIcon = getIconName(userClass.split(" ")).replace("icon-", "");

    var id = itemToChange[0].id;
    var pos = getElementPos("#" + decorationToChange);

    var newSection = $('#editDecorationDdlType').data('ddslick').selectedData.text.toLowerCase();
    var faction = $("#editDecorationDdlFaction option:selected").val();

    var img = createElement(id,
        userClass,
        "",
        className + " " + newIcon,
        "",
        newSection,
        pos.top,
        pos.left,
        title,
        newSection,
        faction);

    itemToChange.remove();
    $("." + newSection + "Section").append(img);
    $("#" + id).show();

    closeMenuDecoration();
    tooltipOne(id);
};

function removeOldSection(className) {
    for (var i = 0; i < elementType.length; i++) {
        className = className.replace(elementType[i], "");
    }

    return className;
};

function removeOldIcon(className) {
    var oldIcon = getIconName(className.split(" "));
    var oldClass = oldIcon.replace("icon-", "");

    var result = className.replace(oldIcon, "")
        .replace(oldClass, "");

    return result;
};

function getElementPos(element) {
    return {
        left: $(element)[0].offsetLeft + tryParseInt($(element).data("x"), 0),
        top: $(element)[0].offsetTop + tryParseInt($(element).data("y"), 0)
    };
};


function addMapDecoration(mousePos) {
    $(".editorBackground").show();

    var pos = getEditMenuPosition($(".player"), false, true);

    $(".addElement").css("top", mousePos.y);
    $(".addElement").css("left", mousePos.x);

    $(".addElement").show();

    $("#addNameMapDecoration").val("");
    $("#addTitleMapDecoration").val("");

    displayDropDownFaction($("#decorationDdlFaction"), null, false);
};

function getIconName(classes) {
    for (var i = 0; i < classes.length; i++) {
        if (classes[i].startsWith("icon-")) {
            return classes[i];
        }
    }

    return "";
};

function unselectElement() {
    $("#" + idSelectedElement).removeClass("draggable");
    $("#" + idSelectedElement).removeClass("inFront");

    idSelectedElement = 0;
};

function deleteElement() {
    $("#" + idSelectedElement).remove();
    closeMenuDecoration();
};

function htmlToObject(element) {
    var name = $(element)[0].attributes["name"] != undefined ? $(element)[0].attributes["name"].value : "";
    var img = getIconNameFromElement(element);
    var className = removeClassNameOnSave($(element)[0].className, ["tooltipstered", "tooltip", "tap-target", "inFront", "draggable", "icon", img, "  "]);
    var title = $(element)[0].attributes["alt"].value;
    var faction = $(element).data("faction").toString();

    var elementType = $(element).data("elementtype");

    var top = $(element)[0].style.top.replace("px", "").replace('"', "");
    var left = $(element)[0].style.left.replace("px", "");

    var obj = { "class": className.trim(), img, name, elementType, top, left, title, faction };

    return obj;
};
