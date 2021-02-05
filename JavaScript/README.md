### Objetos:

```diff
const eu = { </br>
nome: 'Andrew', </br>
sobrenome: 'Soares', </br>
idade: 18, </br>
localizacao: { </br>
nacao: 'Brasil', </br>
estado: 'Rio de Janeiro'
}, </br>
} </br>
const {nome, sobrenome, ...resto} = eu </br>
console.log(nome, sobrenome) // Andrew Soares </br>
console.log(resto) // {idade: 18, localizacao: {nacao: 'Brasil', cidade: 'Rio de Janeiro'} 
```
