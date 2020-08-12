let button = getElementById('button');

button.addEventListener('click', function(){
    let billAmt = document.querySelector('bill').value;
    let tipPercent = document.querySelector('tipPercent').value;
    let tip = billAmt / tipPercent;
    document.querySelector('Sum').value = parseFloat(billAmt) + parseFloat(tip);
    console.log(billAmt);


});