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

swal({
    title: "Congratulations",
    text: "Your Birthday Is Lucky!",
    icon: "success",
  });
}

function youarenotlucky() {
     swal({
        title: "Sorry!",
        text: "Your Birthday Isn't Lucky",
        icon: "error",
      });
     
    
   
}
