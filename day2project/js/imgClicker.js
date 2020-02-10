console.log("it Works!");

let click = 0;
let heienahClicks = 0;
let buffaloClicks = 0;


document.getElementById('heienah').addEventListener('click', function() {
    heienahClicks++;
    document.getElementById('heienahClicks').textContent = heienahClicks;
    if (buffaloClicks >= 1) {
        buffaloClicks--;
        document.getElementById('buffaloClicks').textContent = buffaloClicks;
    }
})

document.getElementById('buffalo').addEventListener('click', function() {
    buffaloClicks++
    document.getElementById('buffaloClicks').textContent = buffaloClicks;
    if (heienahClicks >= 1) {
        heienahClicks--;
        document.getElementById('heienahClicks').textContent = heienahClicks;
    }
})
