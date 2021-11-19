const BancoAlunos = [
  
]

document.querySelector('#adicionar').addEventListener('click', (e) => {
    e.preventDefault()
    BancoAlunos.push(cadastrarAluno())

})
document.querySelector('#criarTabela').addEventListener('click', (e) => {
    e.preventDefault()
    criarTabela()
    
})
document.querySelector('#limparTabela').addEventListener('click', (e) => {
    location.reload()
    
})

function getInputNumberValue(id){
    return Number(document.getElementById(id).value)
}
function cadastrarAluno(){
    const nome = document.getElementById('nome').value.toUpperCase() //vai pegar do campo nome 
    const nota1 = getInputNumberValue('nota1') // pegar do campo nota1
    const nota2 = getInputNumberValue('nota2') //pegar do campo nota2
    const nota3 = getInputNumberValue('nota3')//pegar do campo nota3

    if(BancoAlunos.length > 10){
        alert('a quantidade de alunos passaram de 10, mas você pode continuar cadastrando ;)' )
    }

    if(validando(BancoAlunos, nome)){
        alert(`${nome}já existe`)
        return
    }

    return{        
            nome,
            nota1,
            nota2,
            nota3,
            media: (nota1+nota2+nota3)/3
        }
}

function validando(alunos, aluno){
    let verdade;
    alunos.forEach(element => {    
        if(element.nome === aluno) {
            verdade =  true
            return
        }
    });
    return verdade
}

function criarTabela(){
    const section2 = document.querySelector('.placeTable')
    section2.innerHTML = ""
    const table = document.createElement('table')
    table.setAttribute('border', '1')
    let tabelaComDado =" ";
    let mediaDaTurma;
    tabelaComDado += ` <tbody>
        <tr>
            <th>Aluno</th>
            <th>Nota1</th>
            <th>Nota2</th>
            <th>Nota3</th>
            <th>Media</th>
        </tr>
        `
    BancoAlunos.forEach(element =>{

        mediaDaTurma =+ Number(element.media)

        tabelaComDado += `
        <tr>
            <td>${element.nome}</td>
            <td>${element.nota1}</td>
            <td>${element.nota2}</td>
            <td>${element.nota3}</td>
            <td>${element.media}</td>
        </tr>

        </tbody
        `
    })
    tabelaComDado += `
        <tr>
        <td> ${(mediaDaTurma/BancoAlunos.length).toFixed(2)}</td>
        </tr>
    `
    table.innerHTML = tabelaComDado
    section2.appendChild(table)
}



// toda vez que apertar o botão adicionar vai colocar o objeto dentro do array
