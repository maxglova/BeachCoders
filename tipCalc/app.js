/* TODO: 
 - Add ability to divide the bill
 - Add invalid input error alert
 - 
*/

function inputValueCheck() {
    if (document.getElementById('bill', 'tipRate')){
        
    }
}



function generateTax(){
    document.getElementById('calculate').addEventListener('click', function(){
        let billAmount = document.getElementById('bill').value;
        let taxRate = 1.15;
        let tipRate = document.getElementById('tipRate').value;
        tipRate = parseFloat(tipRate);
        tipRate = tipRate / 100 * billAmount;
        console.log(tipRate)
        let grandTotal = Math.round(billAmount * taxRate + tipRate);
        console.log(grandTotal)
        // alert(`Your Grand Total is: ${grandTotal}!`);
        document.getElementById('grand-total-prompt').style.display = `block`;
        document.getElementById('total').innerHTML = `${grandTotal}`;
    })
}
console.log(tipRate);