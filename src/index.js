// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.getElementsByTagName('header')
console.log(header);
const logoTitle = document.querySelector('#logoTitle')
console.log(logoTitle)
const firstCard = document.getElementsByClassName('card')[0]
console.log(firstCard);
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img')
console.log(imageFirstCard);
const titleFirstCard = firstCard.querySelector('h2')
console.log(titleFirstCard);
const subtitleFirstCard = firstCard.querySelector('h3')
console.log(subtitleFirstCard);
const textFirstCard = firstCard.querySelector('.card-text')
console.log(textFirstCard );
// C- traversing with dot notation
const link1FirstCard = firstCard.querySelector('.card-link')
console.log(link1FirstCard);
const link2FirstCard = firstCard.querySelectorAll('.card-link')[1]
console.log(link2FirstCard);


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const navItems = document.querySelectorAll('a')
//console.log(navItems);
// B- Loop over the links and console.log their text content
navItems.forEach(i => console.log(i.textContent))
// C- Turn the collection of links into a real array
let arr = Array.from(navItems)
 

console.log(arr[0]);
// D- Use .filter to find the anchor tag with the textContent of "Home"

arr.filter(i => {
    let home = i.textContent === 'Home'
    console.log(home);
    return home
})
// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
textFirstCard.textContent = "This is about a dog"
//  B- Have the students research online the difference between textContent and innerText

textFirstCard.style.fontSize = '2em'
// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes

let newLink = document.createElement('a')
newLink.textContent = 'Im new link'
titleFirstCard.appendChild(newLink)
// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element

const secondCard = firstCard.cloneNode(true)
const cardGroup = document.querySelector('.card-group')
cardGroup.appendChild(secondCard)
const thirdCard = firstCard.cloneNode(true)
cardGroup.appendChild(thirdCard)
// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
