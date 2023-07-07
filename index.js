/*const fruit = ["🍏", "🍎", "🍊"];

fruit.unshift(1,2) // add in the beginning
fruit.push(6,7) // add at the end
fruit.splice(3,0,4,5) // add to the middle
fruit.shift() // delete in the beginning
fruit.pop() // delete at the end
fruit.shift() // delete in the beginning
fruit.pop()  // delete at the end
fruit.splice(1,2) // delete in the middle
console.log(fruit)

const movieCharacters = ["Rachel", "Monica", "Ross", "Phoebe"]

movieCharacters.unshift("Joey")
movieCharacters.push("Chandler");
console.log(movieCharacters);

const numbers = [1, 2, 3, 6, 7, 8, 9, 10];

numbers.splice(3,0, 4,5)
//numbers.pop();
//numbers.shift();
numbers.splice(4,3)
console.log(numbers); 

// FOR EACH()

const friends = ["Anna", "Olga", "Maria"];

//friends.forEach(function(item) {
//    console.log(item);
//})

friends.forEach(item => {
    console.log(item + " " + "is my best friend");
}) 

const books = ["Breaking Free", "The women's heart", "Wisdom for mothers", "Jesus in me"];

books.forEach(function(item, index) {
    console.log(index, item);
}) 

const images = document.querySelectorAll('img');

images.forEach(function(item){
    item.addEventListener('click', clicked)
})
function clicked() {
    alert('Hello Italy');
} 

const imageOne = document.querySelector('#one');
const imageTwo = document.querySelector('#two');
const imageThree = document.querySelector('#three');

imageOne.addEventListener('click', function(){
    alert('Hello Rome')
})

imageTwo.addEventListener('click', function(){
    alert('Hello Florence')
})

imageThree.addEventListener('click', function(){
    alert('Hello Milan')
}) 


const images = document.querySelectorAll('img');

images.forEach(function(item) {
    item.addEventListener('click', clicked)
})
function clicked() {
    alert('You clicked here')
} */


// web app

const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('selected')
        console.log('clicked');
    })

    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected');
        })
    }
})
