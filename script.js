let input = ''
let screen = document.getElementById('screen')

function inputNumber(key) {
    screen.innerHTML += key
    input += key
    screenWatcher()
    
}

function inputOperator(key) { 
    if (input[input.length - 1] === '+' || input[input.length - 1] === '-' || input[input.length - 1] === '*' || input[input.length - 1] === '/') {
        input = input.substring(0, input.length -1)
        input += key

    } else {
        screen.innerHTML = ''
        input += key

    }

}

function clearExpression() {
    screen.innerHTML = ''
    input = ''

}

function backspace() {
    let inputBackspaced = String(screen.innerHTML)

    if (inputBackspaced === '') {

    } else {
        inputBackspaced = inputBackspaced.substring(0, inputBackspaced.length - 1)
        screen.innerHTML = inputBackspaced
        input = input.substring(0, input.length -1)
    }

}

function calculate() {
    if (input === ''){
        screen.innerHTML = ''
    } else {
        screen.innerHTML = eval(input)
    }

    screenWatcher()

}

function screenWatcher() {
    if (screen.innerHTML.length > 10) {
        alert('Esta calculadora não suporta valores acima de 10 dígitos')
        input = ''
        screen.innerHTML = ''

    }
    
}
