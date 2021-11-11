// Write your code here!

// main.remove();

// const newHeader = document.createElement("h1");

// newHeader.setAttribute("id", "victory");

// newHeader.textContent = "Jeni is the champion";

// document.body.append(newHeader);

const element = document.getElementById("main")
element.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'

newHeader.textContent = "Kyle is the champion"
document.body.append(newHeader)