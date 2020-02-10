console.log("it Works!");

let clicks = 0;

document.getElementById('brutalImages').addEventListener('click', function() {
    clicks++
    //console.log(clicks);
    document.getElementById('clicksCount').textContent = clicks;
})