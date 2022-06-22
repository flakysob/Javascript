let username = "taha";
const domain = "gmail.com";
let borc = 10;
const kdv = 0.18;

let email = username + "@" + domain;
console.log("Merhaba " + email);

let info = `Merhaba ${email}
 

Hoş geldin!


${new Date().getHours()}:${new Date().getMinutes()} saati itibari ile borcunuz : ${borc+borc*kdv} TL`;


console.log(info);
console.log("Yukarıdaki satır", info.length , "karakter uzunluğundadır.");
console.log(`${username} isminin ilk harfi ${username[0]}'dır.`);
console.log(`${username} isminin son harfi ${username[username.length-1]}'dır. `);



