let text = getElementbyId("")


let selectedText = window.getSelection().toString();


function boldtext() {
    document.getElementById("textarea1").style.fontWeight = "bold";
}
function under() {
    document.getElementById("textarea1").style.textDecoration = "underline";
}
function italic() {
    document.getElementById("textarea1").style.fontStyle = "italic";
}

function copy() {
    var copyText = document.getElementById("textarea1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}
