### HTMLCOLLECTION VS NODELIST

<p>A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática. </p>

```diff
const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens // HTMLCOLLECTION não é estática como a nodelist
console.log(gridSectionNode); // 3 itens
```

## Array Like

<p>HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.</p>

```diff
gridSection.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});
OBS: É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)
```
