const input = document.querySelector('#custom-input');
const generateBtn = document.querySelector('#normal-pwd');
const signBtn = document.querySelector('#sign-pwd');
const display = document.querySelector('#pwd-container');
const clearBtn = document.querySelector('#clear-btn');
const alphaNumeral = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz';
const signs = '!@#$%^&*';

let pwd = '';

//generate button function
function generatePassword() {
    
    for (let i = 0; i < 8; i++){
        let random = Math.floor(Math.random() * alphaNumeral.length);
        pwd += alphaNumeral[random];
    }
    return pwd;
    console.log(pwd);
}
//addsign btn function
function addSign() {
    for (let i = 0; i < 7; i++){
        let random = Math.floor(Math.random() * alphaNumeral.length);
        pwd += alphaNumeral[random];
    }
    let random = Math.floor(Math.random() * signs.length);
    return pwd += signs[random];

}
// user can input a word in the input and it will use that word to create a new password  for the user.

function userCreate(str){

    if (str.length < 9 ){
        return alert('text must be more than eight letters/alphabets');
    }

    let strUpper = str.toUpperCase();//string to uppercase
    let normalAndUpper = str + strUpper;//concantenating both strings
    //looping through the concantenated strings and giving the results a max number of 9
    for (let i = 0; i < 8; i++){
        let random = Math.floor(Math.random() * normalAndUpper.length);
        pwd += normalAndUpper[random];
    }
    return pwd;
}
// str.split() -- convert str to an array an loop through them to get an identical or more pleasing generated password

function randomStr(str) {
    let strArr = str.split("");
    console.log(strArr)
    let pass = '';
    if (str.length >= 8){
    for(let i = 0; i < 7; i++){
        let random = Math.floor(Math.random() * strArr.length);
        pass += strArr[random];
        
    }
    } else {
        alert('Your input is less than eight');
        console.log('input is less than eight')
    }
    return pass;
}
console.log(randomStr('Holyinfant!!!'))

//generatePassword();
//addSign();



generateBtn.addEventListener('click', () => {
    if (input.value === ''){
        display.textContent = generatePassword();
    }else {
        display.textContent = userCreate(input.value);
    }
})

signBtn.addEventListener('click', () => {
    display.textContent = addSign();
});

clearBtn.addEventListener('click', () => {
    pwd = '';
    display.textContent = '';
}) 

input.addEventListener ('keyup', (event) => {
    if (event.key === 'Enter' && input.value !== '') {
        display.textContent = userCreate(input.value);
    }
})
//clipboard API
display.addEventListener('click', async () => {
    let copyText = display.textContent;
    try {
        await navigator.clipboard.writeText(copyText);
        alert('Text has been copied successfully.');
    }
    catch (err) {
        console.error('Could not write to clipboard', err);

        try {
            await navigator.clipboard.readText(copyText);
        }
        catch {
            console.error('Could not read text');
        }
    }
})
