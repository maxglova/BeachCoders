console.log('it works');

const heading = document.querySelector('h2');
console span = document.querySelector('h2 span');
console.log('text.Content', heading.textContent);
console.log('innerText', heading.innerText);
console.log('span', span);

/* 
textContent gets the content of all elements, 
including <script> and <style> elements. 
In contrast, innerText only shows “human-readable” elements.
textContent returns every element in the node. 

In contrast, innerText is aware of styling and 
won’t return the text of “hidden” elements.
*/



