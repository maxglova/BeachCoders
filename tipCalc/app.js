/* TODO: 
 - capture the bill amount entered
 - calculate the bill amount + 15%
 - return the total amount to the DOM (#total)
 **Note: Keep in mind decimal points for cents.
 hint: Math JS built in methods
*/





function generateTax(){
    document.getElementById('calculate').addEventListener('click', function(){
        let billAmount = document.getElementById('bill').value;
        let taxRate = 1.15;
        let grandTotal = billAmount * taxRate;
        // alert(`Your Grand Total is: ${grandTotal}!`);
        document.getElementById('grand-total-prompt').style.display = `block`;
        document.getElementById('total').innerHTML = `${grandTotal}`;
    })
}
