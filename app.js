const cars = ['chevy', 'ford', 'honda', 'toyota'];

for (name of cars) {
    console.log(name);
    if (name === 'honda') {
        console.log('we found the Honda!');
        break;
    }
} // For Loop

let i = 5;
let j = 10;

while (i <=6) {
    i += j;
    i++;
   
}
console.log("Total is:"+ j); // While Loop
    
const text = document.querySelector(".title");

text.classList.add("change"); //Change css with JS

const carsList = document.querySelectorAll(".carsList li");

for (cars of carsList) {
    cars.addEventListener ("click", function() {
        this.style.color = "red";
    });
} // Change color of list item on click