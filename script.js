var button = document.querySelector('.Submit');

button.addEventListener('click', function(){
    var billAmt = document.querySelector('.bill').value;
    var tipPercent = document.querySelector('.tipPercent').value;
    var tip = billAmt / tipPercent;
    document.querySelector('.Sum').value = parseFloat(billAmt) + parseFloat(tip);
    console.log(billAmt);


});