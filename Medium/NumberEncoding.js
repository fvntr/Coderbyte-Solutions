function NumberEncoding(str) {
    str = str.toLowerCase()
    return str.split("").map(getLetterNums).join("");
}

function getLetterNums(letter) {
    if (/[a-z]/.test(letter)) {
        return letter.charCodeAt(0) - 96;
    } else {
        return letter;
    }
}