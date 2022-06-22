let sayi = 111;
let metin = "111";
let metin2 = "111.8";
let dogruYanlis = true;

console.log(typeof(dogruYanlis));
console.log(typeof(sayi));
console.log(typeof(metin));

console.log("Sayı : ", parseInt(metin));
console.log("Sayının türü : ", typeof(parseInt(metin)));
console.log("Sayı ve türü : ", parseInt(metin), typeof(parseInt(metin)));
console.log("Yuvarlanmış sayı : ", Math.ceil(parseFloat(metin2)));


stringSayi = sayi.toString();
console.log(stringSayi);