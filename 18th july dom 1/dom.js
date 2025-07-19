//  Access the element with ID "title" and update its innerText to "Welcome to JavaScript!".
let a =document.getElementById('title')
a.innerText = 'Welcome to Javascript'

// Select all elements with class "card" and change the background color of the third one to "lightgray".
let b=document.getElementsByClassName('card')
b[2].style.backgroundColor = 'lightgray'

// Use querySelector to select the first <h2> element and make its text italic using style.fontStyle.
let c=document.querySelector('.x')
c.style.fontStyle = 'italic'

// Change the innerHTML of an element with ID "info" to include a <u>Click here</u> link.
let d =document.getElementById("info")
d.innerHTML = '<u> Click Here </u>'

// Write a function that sets the font size of an element with ID "heading" to 40px when called.
// Add an event listener to a button with ID "hoverBtn" that changes the background of a <div> with ID "box" to "orange" when hovered.
let f=document.getElementById('box')
let e=document.getElementById('hoverBtn')
e.addEventListener('mousemove', function(){
    f.style.backgroundColor = 'orange'

})
// e.addEventListener('')
// On clicking a button with ID "hideBtn", hide a paragraph with ID "description" using style.display.
let g=document.getElementById('description')
let h =document.getElementById('hideBtn')
h.addEventListener('click' , function(){
    g.style.display= 'none'
})
// On clicking another button with ID "showBtn", show the hidden paragraph again.
let x = document.getElementById('showBtn')
x.addEventListener('click' ,function(){
     g.style.display= 'block'
})
// Select all <li> elements using getElementsByTagName and change the text of the last item to "Done".
let i = document.getElementsByTagName('li')
i[4].innerText='Done'

// Using querySelectorAll, select all elements with class "highlight" and set their text color to "purple". 
let j = document.querySelectorAll('.highlight')
j[0].style.color= 'purple'
j[1].style.color= 'purple'
j[2].style.color= 'purple'
j[3].style.color= 'purple'
