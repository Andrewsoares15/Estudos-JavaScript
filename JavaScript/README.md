## Fuctions

<p> Bloco de código que pode ser executado e reutilizado. </p>

```diff
function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4
```

### CallBack

<p> geralmente são funções que ocorrem após algum evento. </p>

```diff
addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
```

## OPERADORES LÓGICOS && e OPERADORES LÓGICOS ||

### &&

<p> Se ambos os valores forem true ele irá retornar o último valor verificado
    Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos </p>
```diff
true && true; // true
true && false; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
```
### ||

<p>Retorna o primeiro valor true que encontrar</p>
```diff
true || true; // true
true || false; // true
false || true; // true
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato

````
## Operador rest(...rest)

<p> Usado para atribuir o restante do objeto/array para variável </p>

### Array:

```diff
const numeros = [1, 2, 3, 4, 5];
const [a, b, ...c] = numeros;

console.log(a) //1
console.log(b) //2
console.log(c) //[3, 4, 5]
````

### Objetos:

```diff
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
console.log(eu.nome) // Andrew
```
