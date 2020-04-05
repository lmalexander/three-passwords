console.log("time to generate passwords");

const possibleChars = [
    "!", "@", "#", "$", "%", "^", "&","*","()",")","_","-","=","{","}","[","]","~","1","2","3","4","5","6","7","8","9","0","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","z","x","c","v","b","m","n",",",".","?","/","Q","W","E","R","T","Y","U","I","O","P","A","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"
];

function newPassword(possibleChars) {
    const random = Math.floor(Math.random() * possibleChars.length);
    const password = possibleChars[random];
    console.log(password);
    return password;
}
newPassword;

$("#genBtn").click(function() {
    newPassword;
    $("#newPW").push(password);
});
