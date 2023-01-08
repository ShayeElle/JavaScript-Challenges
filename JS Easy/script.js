let name1 = "Shaye";
let name2 = "Sam";

// To include variables inside ``, you need to use the ${variable} format.

if (name1.length > name2.length) {
    console.log(`The name ${name1} is longer than ${name2} by ${name1.length - name2.length} characters`);
} else if (name1.length < name2.length) {
    console.log(`The name ${name1} is shorter than ${name2} by ${name2.length - name1.length} characters`);
} else {
    console.log(`The names ${name1} and ${name2} are the same length`);
}


