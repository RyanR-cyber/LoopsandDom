const cars = ['chevy', 'ford', 'honda', 'toyota'];

for (let name of cars) {
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

document.querySelectorAll(".petList li").forEach(item => {
    const color = "blue"; // variable for color
    item.style.color = color; // changing css style
    }  ); // Change color of list items

  document.querySelectorAll(".pet2List li").forEach(item => {
    item.onclick = () => {
        item.classList.toggle("highlight");
    }
}); // Toggle class on click
