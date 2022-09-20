let input = ''
let screen = document.getElementById('screen')

function inputNumber(key) {
    screen.value += key
    input += key
    screenWatcher()
    
}

function inputOperator(key) { 
    if (input[input.length - 1] === '+' || input[input.length - 1] === '-' || input[input.length - 1] === '*' || input[input.length - 1] === '/') {
        input = input.substring(0, input.length -1)
        input += key

    } else {
        screen.value = ''
        input += key

    }

}

function clearExpression() {
    screen.value = ''
    input = ''

}

function backspace() {
    let inputBackspaced = String(screen.value)

    if (inputBackspaced === '') {

    } else {
        inputBackspaced = inputBackspaced.substring(0, inputBackspaced.length - 1)
        screen.value = inputBackspaced
        input = input.substring(0, input.length -1)
    }

}

function calculate() {
    if (input === ''){
        screen.value = ''
    } else {
        screen.value = eval(input)
    }

    screenWatcher()

}

function screenWatcher() {
    if (screen.value.length > 10) {
        alert('Esta calculadora não suporta valores acima de 10 dígitos')
        input = ''
        screen.value = ''

    }
    
}
