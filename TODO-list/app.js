// TODO
// 


const enterButton = document.getElementById('enter');
const input = document.getElementById('userInput');
const ul = document.querySelector('ul');
const item = document.getElementsByTagName('li');

// helpers
function inputLength() {
    return input.value.length;
}

function listLength() {
    return item.length;
}

function createListElement() {
    const li = document.createElement('li'); // Creates an <li>
    li.appendChild(document.createTextNode(input.value)); // Creates a text value with the input
    ul.appendChild(li); // Adds li to ul
    input.value = ''; // Resets the input field

    function crossOut() {
        li.classList.toggle('done');
    }

    li.addEventListener('click', crossOut);

    const dBtn = document.createElement('button');
    dBtn.appendChild(document.createTextNode('X'));
    li.appendChild(dBtn);
    dBtn.addEventListener('click', deleteListItem)

    function deleteListItem(){
        li.classList.add('delete');
    }
}

function addListAfterKeyClick() {
    if(inputLength() > 0) {
        // makes sure taht an empty input doesn't create a li
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if(inputLength() > 0 && event.which === 13) {
        // this now looks to see if you hit 'enter'/ 'return'
        // the 13 value is the enter keycode this could be also displayed using event.keycode === 13;
        createListElement()
    }
}

enterButton.addEventListener('click', addListAfterKeyClick);
input.addEventListener('keypress', addListAfterKeyPress);