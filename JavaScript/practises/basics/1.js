
var today = new Date();
var day = today.getDay() - 1;
var dayList = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];

var hour = today.getHours();
var minute = today.getMinutes(); 


console.log("Gün : ",dayList[day]);
console.log("Saat : ", hour,":",minute);
