<p align="center">
  ![Badge](https://img.shields.io/badge/Autor-AndrewSoares-%237159c1?style=for-the-badge&logo=ghost)
</p>


## Escopo de Bloco

<p> Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.</p>

### Let

<p>Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável. </p>

### Const

<p>Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código. </p>

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

## Objetos

<p> Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.</p>

```diff
var pessoa = {
  nome: 'Andrew',
  idade: 18,
  profissao: 'Front End',
  possuiFaculdade: true,
}

pessoa.nome; // 'Andrew'
pessoa.possuiFaculdade; // true
```

### Palavra chave this

<p> this irá fazer uma referência ao próprio objeto.</p>

```diff
var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60

```

### Métodos

<p>É uma propriedade que possui uma função no local do seu valor. </p>

```diff
var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

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
```

## Operador rest(...rest)

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
console.log(resto) // idade: 18 localizacao{nacao: Brasil, estado: Rio de Janeiro }
```
