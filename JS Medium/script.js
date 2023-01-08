// Prompt is used to take inputs from the user.

const input = prompt("Please enter some text in all upper case, all lower case or normally.");

if (input === input.toUpperCase()) {
  console.log("You are shouting!");
} else if (input === input.toLowerCase()) {
  console.log("You are whispering.");
} else {
  console.log("You are talking normally.");
}
