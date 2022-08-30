function telaSemTexto () {
    let output = document.getElementById('output')
    let botaoCopiar = document.getElementById('button-copiar')
    
    output.style.display = 'none'
    botaoCopiar.style.display = 'none'

    document.querySelector('.coluna-direita').classList.add('coluna-direita-sem-mensagem')
}

function telaComTexto() {
    let semTexto = document.getElementById('sem-texto')
    let output = document.getElementById('output')
    let botaoCopiar = document.getElementById('button-copiar')

    semTexto.style.display = 'none'
    output.style.display = 'block'
    botaoCopiar.style.display = 'block'
}

function criptografar () {

    let resultado = ''

    for (let i = 0; i < input.value.length; i++) {

        if (input.value[i] == 'e') {
            resultado = resultado + 'enter'
        } else if (input.value[i] == 'i') {
            resultado = resultado + 'imes'
        } else if (input.value[i] == 'a') {
            resultado = resultado + 'ai'
        } else if (input.value[i] == 'o') {
            resultado = resultado + 'ober'
        } else if (input.value[i] == 'u') {
            resultado = resultado + 'ufat'
        }else {
            resultado = resultado + input.value[i]
        }
        
    }
   
    output.innerText = resultado

    telaComTexto()
}

function descriptografar () {

//criar função

}

var input = document.getElementById('input-text')
var output = document.getElementById('texto-criptografado')

telaSemTexto()

var buttonCripto = document.getElementById('button-criptografar')
buttonCripto.onclick = criptografar




