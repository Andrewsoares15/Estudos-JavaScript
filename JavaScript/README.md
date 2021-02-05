## Operador rest(...rest)

/hr
<p> Usado para atribuir o restante do objeto/array para variável </p>

### Array:

```diff
const numeros = [1, 2, 3, 4, 5];
const [a, b, ...c] = numeros;

console.log(a) //1
console.log(b) //2
console.log(c) //[3, 4, 5]
```

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
console.log(eu.nome) // Andrew </br>
```
