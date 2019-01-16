const messages = document.querySelector("#messages");

//arguments = html element, data inside the element, styles
const elementBuilder = (...arguments) => {
    return `<${arguments[0]} class="${arguments[2]}">${arguments[1]}</${arguments[0]}>`;
}

// Create an unordered list element
// const list = document.createElement('ul')

// Create a list item for our list
// const listItem = document.createElement('li')
// listItem.className = "president"
// listItem.textContent = "George Bush"

// Put the list item on the unordered list
// list.appendChild(listItem)

const msgItem = document.createElement('section');
msgItem.className = "message";
msgItem.textContent = "a message goes here"
messages.appendChild(msgItem);