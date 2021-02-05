### Objetos:

const eu = {
nome: 'Andrew',
sobrenome: 'Soares',
idade: 18,
localizacao: {
nacao: 'Brasil',
estado: 'Rio de Janeiro'
},
}
const {nome, sobrenome, ...resto} = eu
console.log(nome, sobrenome) // Andrew Soares
console.log(resto) // {idade: 18, localizacao: {nacao: 'Brasil', cidade: 'Rio de Janeiro'}
