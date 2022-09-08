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

    /* A ideia da função é criar uma matriz de chaves e ver se na palavra inserida há a chave 0. Se houver, trocar pela chave 1 */

    let textInput = input.value
    let matrizCripto = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']]
    textInput = textInput.toLowerCase()

    for(let i = 0;i < matrizCripto.length; i++) {

        if(textInput.includes(matrizCripto[i][0])) {
            textInput = textInput.replaceAll(matrizCripto[i][0], matrizCripto[i][1])
        }
    }

    output.innerHTML = textInput

    telaComTexto()
}

function descriptografar () {

    let textInput = input.value
    let matrizCripto = [['e','enter'],['i','imes'],['a','ai'],['o','ober'],['u','ufat']]
    textInput = textInput.toLowerCase()

    for(let i = 0;i < matrizCripto.length; i++) {

        if(textInput.includes(matrizCripto[i][1])) {
            textInput = textInput.replaceAll(matrizCripto[i][1], matrizCripto[i][0])
        }
    }

    output.innerHTML = textInput

    telaComTexto()

}

function copiar() {

    let recebeCopia = document.getElementById('texto-criptografado').innerHTML

    navigator.clipboard.writeText(recebeCopia)

    .then(() => {
        alert('Texto copiado com sucesso!')
    })

}

var input = document.getElementById('input-text')
var output = document.getElementById('texto-criptografado')

telaSemTexto()

var buttonCripto = document.getElementById('button-criptografar')
buttonCripto.onclick = criptografar

var buttonDescripto = document.getElementById('button-descriptografar')
buttonDescripto.onclick = descriptografar

var buttonCopiar = document.getElementById('button-copiar')
buttonCopiar.onclick = copiar
