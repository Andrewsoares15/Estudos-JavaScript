![Badge](https://img.shields.io/badge/Autor-AndrewSoares-%237159c1?style=for-the-badge&logo=ghost)
## Travesing e Manipulação
 ### Travesing
 <p> Como navegar pelo DOM, utilizando suas propriedades e métodos. </p>


## Eventos
### AddEventListener
<p> Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento. </p>

```diff
const link = document.querySelector('a');
function mouseEntrou(){
console.log('Entrou com o mouse');
}

link.addEventListener('mouseEnter', mouseEntrou)

// O terceiro parâmetro é opcional
```
### Event e propriedades

```diff
const link = document.querySelector('a');
function evento(event) {
  console.log(this) // retorna o próprio elemento
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path; //  Localização do local do clique
  console.log(currentTarget, target, type, path);
  const prevent = event.preventDefault() // previne a função padrão do evento no browser. No caso, de link interno n deixa ele ser ativado.
}

link.addEventListener('click', evento);
```
### Keyboard
<p>Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard </p>

```diff
function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', callback);
```
## Classes e Atributos

```diff
const link = document.querySelector('a');
link.className; // string
link.classList; // lista de classes
link.classList.add('ativo');
link.classList.remove('ativo');
link.classList.toggle('ativo'); // adiciona/remove a classe
```
### GetAttribute e SetAttribute
<p> Métodos que retornam ou definem de acordo com o atributo selecionado </p>

```diff
const link = document.querySelector('a');
link.getAttribute('src'); // valor do src
link.setAttribute('alt', 'Texto Alternativo'); // muda o alt

```

## forEach e Arrow Function

<p>Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach. </p>

```diff
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  console.log(item);
});
```

### PARÂMETROS DO FOREACH

<p> O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;</p>

```diff
const imgs = document.querySelectorAll('img');

imgs.forEach(function(valorAtual, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});
```

### FOREACH E ARRAY

<p> forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.</p>

```diff
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});
```

### ARROW FUNCTION

<p>Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos. </p>

```diff
const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
console.log(item);
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
console.log(i++);
});
```

## HTMLCOLLECTION VS NODELIST

<p>A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática. </p>

```diff
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens // HTMLCOLLECTION não é estática como a nodelist
console.log(gridSectionNode); // 3 itens
```

### Array Like

<p>HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.</p>

```diff
gridSection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});
OBS: É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)
```
