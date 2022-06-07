const allLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = "!@#$%^&*()_+{}[]?<>"



const createPassword = (length= 8, hasNumbers = true, hasSymbols = true) => {
    let characters = allLetters
    hasNumbers ? (characters += numbers) : ''
    hasSymbols ? (characters += symbols) : ''
    return genPassword(length, characters)
}

const genPassword = (length, characters) => {
    let password = ''
    for(let i = 0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return password
}

module.exports = createPassword