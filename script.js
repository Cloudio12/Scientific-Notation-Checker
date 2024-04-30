function checkNotation() {
    var input = document.getElementById("notationInput").value;
    var scientificNotationRegex = /^-?\d+(\.\d+)?[eE][+-]?\d*$/;

    if (scientificNotationRegex.test(input)) {
        document.getElementById("result").innerText = "Valid scientific notation!";
    } else {
        document.getElementById("result").innerText = "Invalid scientific notation. Please enter a valid notation.";
    }
}
