// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img')
console.log(img)
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagens)
// Selecione todos os links internos (onde o href começa com #)
const Linkss = document.querySelectorAll('a[href^="#"]')
console.log(Linkss)

// Selecione o primeiro h2 dentro de .animais-descricao
const p = document.querySelector('.animais-descricao h2')
const Primeh2 = document.querySelector('.animais-descricao ')
const pri = Primeh2.querySelector('h2')
console.log(pri)
console.log(p)
// Selecione o último p do site
const lastP = document.querySelectorAll('p')
console.log(lastP[--lastP.length])

// Mostre no console cada parágrado do site
const ps = document.querySelectorAll('p');
ps.forEach((item)=>{
    console.log(item)
})
// Mostre o texto dos parágrafos no console
ps.forEach((item) =>{
    console.log(item.innerText)
})
// Como corrigir os erros abaixo:
const imgss = document.querySelectorAll('img');

imgss.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgss.forEach(() => {
  console.log(i++);
});

imgss.forEach(() => i++);

