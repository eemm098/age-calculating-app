


var submit = document.querySelector('.submit');
submit.addEventListener('click', function () {
    var d1 = document.getElementById('day').value;
var m1 = document.getElementById('month').value;
var y1 = document.getElementById('year').value;



var date = new Date();
var d2 = date.getDate();
var m2 = 1 + date.getMonth();
var y2 = date.getFullYear();
var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if(d1 > d2){
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
}
if(m1 > m2){
    m2 = m2 + 12;
    y2 = y2 - 1;
}


var d = d2 - d1;
var m = m2 - m1;
var y = y2 - y1;

    document.querySelector('.years').innerHTML = y;
    document.querySelector('.months').innerHTML = m;
    document.querySelector('.days').innerHTML = d;

})


















































// // let submit = document.querySelector("button.submit");

// submit.addEventListener("click", function () {
//     let d = document.getElementById("day").value;
//     let m = document.getElementById("month").value;
//     let y = document.getElementById("year").value;
  
//   if()
  
//     const currentYear = Date.now();
//     const birthDate = new Date(`${m} ${d} ${y}`);
  
//     const ageInMiliescond = currentYear - birthDate;
  
//     let year = Math.floor(ageInMiliescond / 1000 / 60 / 60 / 24 / 30 / 365);
//     let month = Math.floor(ageInMiliescond / 1000 / 60 / 60 / 24 / 30) % 365;
//     let day = Math.floor(ageInMiliescond / 1000 / 60 / 60 / 24) % 30;
  
//     document.querySelector(".years").innerHTML = year;
//     document.querySelector(".months").innerHTML = month;
//     document.querySelector(".days").innerHTML = day;
//   });