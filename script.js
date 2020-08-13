const button = document.querySelector('.Submit');
const billAmt = document.querySelector('.bill').value;
const tipPercent = document.querySelector('.tipPercent').value;

button.addEventListener('click', function(){
    var tip = tipPercent/ billAmt;
    document.querySelector('.Sum').value = parseFloat(billAmt) + parseFloat(tip);
    // console.log(billAmt);


});