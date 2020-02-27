console.log('it works');

const jokeButton = document.querySelector('.jokeBtn');
const jokeHolder = document.querySelector('.joke p')

async function fetchJoke() {
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json',
        }
    });
    const data = await res.json();
    console.log(data);
    return data
}

async function handleClick() {
    const { joke } = await fetchJoke();
    jokeHolder.textContent = joke;
}

jokeButton.addEventListener('click', handleClick);

fetchJoke();