var btn = document.getElementById('btn');
btn.addEventListener('click', submitform);

function submitform() {
    var date = document.getElementById('Date').value;
    var lucky = document.getElementById('lucky').value;
    var sum = getsum(date);
    if(sum%lucky==0)
    {
        youarelucky();
    }
    else{
        youarenotlucky();
    }
}

function getsum(date) {
    var total = 0;
    var dd = date;
    for (i = 0; i < date.length; i++) {

        total += dd % 10;

        dd = Math.floor(dd / 10);
    }
    return total;
}

function youarelucky() {
    console.log("your are a lucky")
}

function youarenotlucky() {
    console.log("no you are not lucky")
}