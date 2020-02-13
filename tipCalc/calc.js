/* TODO: 
 - capture the bill amount entered
 - calculate the bill amount + 15%
 - return the total amount to the DOM (#total)
 **Note: Keep in mind decimal points for cents.
 hint: Math JS built in methods
*/

function calculateTotal() {
    let bill = document. getElementById('bill').value;
    const totalDOM = document.getElementById('total');
    if (isNaN(bill)) {
        alert('Please Enter a FACKING number');
    } else {
    // convert string to number
    bill = parseFloat(bill);

    let total = bill * 0.15 + bill;
    // round to two decimal places
    total = Math.round(total * 100) / 100;
    totalDOM.textContent = `Total w/ tip $ ${total}`;
    console.log("Total", typeof total, "bill", typeof bill)
    }
}

document.getElementById('calculate').onclick = function() {
    calculateTotal();
}
