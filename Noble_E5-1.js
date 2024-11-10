
function getRugNumbers() {
	console.log("heyooow");
	let length = document.getElementById("length-input").value;
    let width = document.getElementById("width-input").value;

    const result = parseInt(length) * parseInt(width) / 2;

    let outputElem = document.getElementById("output-text");

    outputElem.textContent = "The number of rugs that can fit in that room is: " + result;
}