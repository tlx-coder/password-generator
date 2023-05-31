const numbers = '0123456789';
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

const generatePassword = (data) => {

    var charList = "", password = "";
    if (data.len === 0) {
        alert("Please enter the length");
    } else if (data.len>30) {
        alert("Please enter length less than 30");
    } else if (!data.upCase && !data.lowCase && !data.num && !data.sym) {
        alert("Please select atlease one checkbox");
    } else {
        if (data.upCase) {
            charList = charList + upperCaseLetters;
        }
        if (data.lowCase) {
            charList = charList + lowerCaseLetters;
        }
        if (data.num) {
            charList = charList + numbers;
        }
        if (data.sym) {
            charList = charList + specialCharacters;
        }

    }

    for (let i = 0; i < data.len; i++) {
        password += charList.charAt(Math.round(Math.random() * charList.length));
    }

    return password;
}

export default generatePassword;