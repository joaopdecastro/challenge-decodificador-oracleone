function telaSemTexto () {
    let output = document.getElementById('output')
    let botaoCopiar = document.getElementById('button-copiar')
    
    output.style.display = 'none'
    botaoCopiar.style.display = 'none'

    document.querySelector('.coluna-direita').classList.add('coluna-direita-sem-mensagem')
}

function telaComTexto() {
    let semTexto = document.getElementById('sem-texto')

    semTexto.style.display = 'none'
}

var textoCriptografado = document.getElementById('texto-criptografado')

if (textoCriptografado.value == '') {
    telaSemTexto()
} else {
    telaComTexto()
}