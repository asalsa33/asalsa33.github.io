function fancifyText() {
    var textInput = document.getElementById("text-input");
    var fancyOption = document.getElementById("fancy-option");
    var boringOption = document.getElementById("boring-option");
  
    if (fancyOption.checked) {
      textInput.style.fontSize = "4em";
      textInput.style.backgroundColor = "lightblue";
      textInput.style.fontWeight = "bold";
      textInput.style.textDecoration = "underline";
      alert("Text size changed!");
    } else if (boringOption.checked) {
      textInput.style.fontSize = "";
      textInput.style.backgroundColor = "";
      textInput.style.fontWeight = "normal";
      alert("Text styles boring!");
    }

}

function makeBigger() {
    var textInput = document.getElementById("text-input");
    textInput.style.fontSize = "24pt";
  }
function mooButton() {
        var textInput = document.getElementById("text-input");
        textInput.value = textInput.value.mooButton();
      
        var sentences = textInput.value.split(". ");
        var updatedSentences = sentences.map(function(sentence) {
          var words = sentence.split(" ");
          var lastWord = words[words.length - 1];
          words[words.length - 1] = lastWord + "-Moo";
          return words.join(" ");
        });
      
        textInput.value = updatedSentences.join(". ");
      }

