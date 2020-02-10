console.log('Hello BeachCoders!');
//SNOB'N'US

//String
//Number
//object
//Boolean
//Null
//Undefined
//Symbol

const name = "Max";
const middle = 'David';
const last = `Glova`;

const sentance = `Max said, "I'm learning at BeachCoders Academy"`;

//String in mutiple lines

const smallSong = "" +
    "I made a small small song"+
    "Made a small small song"+
    "I sang it all night long"+
    "All through"+
    "The wing and rain"+
    "Until the morning came"
    ;


    const firstName = "Jimbob";
    // Concatenation and interpolation
    const hello = `Hello my name is ${name} and I'm ${10 * 10} years old. Nice to meet you ${firstName}`;
    

// html 

const html = `
    <div>
        <h2>${firstName}</h2>
        <p>${hello}</p>
    </div>
`;

document.body.innerHTML = html; 
