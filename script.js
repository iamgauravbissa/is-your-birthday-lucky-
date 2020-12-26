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
    // document.getElementById('overlay').style.display="block";
    // document.getElementById('hideme').style.display ="none";

//     anime.timeline({loop: true})
//   .add({
//     targets: '.ml15 .word',
//     scale: [10,1],
//     opacity: [0,1],
//     easing: "easeOutCirc",
//     duration: 800,
//     delay: (el, i) => 800 * i
//   }).add({
//     targets: '.ml15',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
//   window.setTimeout(relodefun , 5000);
swal({
    title: "Congratulations",
    text: "Your Birthday Is Lucky!",
    icon: "success",
  });
}

function youarenotlucky() {
    // document.getElementById('overlaynotlucky').style.display="block";
    // document.getElementById('hideme').style.display ="none";
   
    swal({
        title: "Sorry!",
        text: "Your Birthday Isn't Lucky",
        icon: "error",
      });
     
    
   
}

function relodefun() {
    location.reload();
}