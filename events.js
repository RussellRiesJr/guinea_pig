// You'll be using element.classList to manipulate the CSS classes on elements.
// Note: Output target is the output-target element.
var outputTarget = document.getElementById("output-target");
// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

function sectionClick(mouseEvent) {
  var elementText = mouseEvent.target.innerHTML;
  outputTarget.innerHTML = "<p>You clicked on the " + elementText + " section!";
}

var aSection = document.getElementsByClassName("article-section");
for (var i = 0; i < aSection.length; i++) {
  aSection.item(i).addEventListener("click", sectionClick);
}
// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
function mouseOverHead(mouseEvent) {
  var mouseOverText = mouseEvent.target.innerHTML;
  outputTarget.innerHTML = "<p>You moved your mouse over the header!</p>";
}
var header = document.getElementById("page-header");
header.addEventListener("mouseover", mouseOverHead);
// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
function mouseOffHead(mouseEvent) {
  var mouseOffText = mouseEvent.target.innerHTML;
  outputTarget.innerHTML = "<p>You left me!!</p>"
}

header.addEventListener("mouseout", mouseOffHead);

// When you type characters into the input field, the output element should mirror the text in the input field.
var textInput = document.getElementById("keypress-input");

textInput.addEventListener("keyup", function(event) {
  outputTarget.innerHTML = event.target.value;
});

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
var pig = document.getElementById("guinea-pig");
var color = document.getElementById("add-color");
color.addEventListener("click", function(event) {
  pig.classList.toggle("blue");
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
var biggen = document.getElementById("make-large");
biggen.addEventListener("click", function(event) {
  pig.classList.toggle("biggify");
});


// When you click the "Capture it" button, the guinea-pig element should have a border added to it.

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

// The first section's text should be bold.

// The last section's text should be bold and italicized.

// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
