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

// Adicione a classe ativo a todos os itens do menu
const todosItem = document.querySelectorAll('.menu a')
todosItem.forEach((item =>{
    console.log(item.setAttribute('class', 'ativo'))
}))
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
todosItem.forEach((item =>{
    item.classList.remove('ativo')
    item.removeAttribute('class')
}))
// Verifique se as imagens possuem o atributo alt
imgs.forEach((item =>{
    console.log(item.hasAttribute('alt') ? 'tem' : 'não tem')
}))
// Modifique o href do link externo no menu

const linkext = document.querySelector('a[href^="andre"]')
linkext.setAttribute('href', 'mama')
console.log(linkext)

const pa = document.querySelector('a')
    console.log(pa)
todosItem.forEach(( item=>{
    addEventListener('click', () =>{
        
        pa.innerHTML = 'clicou'
    })

}));

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
const distImg = primeiraImg.offsetTop
console.log(distImg)
// Retorne a soma da largura de todas as imagens
function carrega(){
    const Todas = document.querySelectorAll('img')
    let soma = 0;
Todas.forEach((item)=>{
    soma += item.offsetWidth
    const larg= item.offsetWidth
    console.log(larg)
})
console.log(soma)
}

window.onload = function(){
    carrega()
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const lik = document.querySelectorAll('a')
lik.forEach((item)=>{
const largItem = item.getBoundingClientRect()
console.log(largItem.width, largItem.height)
console.log(item.offsetWidth)
if(largItem.width < 48 || largItem.height < 48){
    console.log(item, "Não possuem os tamanhos recomendados")
}else{
    console.log(item, "Possuem os tamanhos recomendados")
}
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const seleMenu = document.querySelector('.menu')
const largNav = window.matchMedia('(max-width: 720px)')
if(largNav.matches){
    seleMenu.classList.add('menu-mobile')
}

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll('a[href^="#"]')

function clickLink(event){
    event.preventDefault();
    links.forEach((item)=>{
        item.classList.remove('ativo')
    })
    console.log(event.target.classList.add('ativo'))
}

links.forEach((item)=>{
    item.addEventListener('click', clickLink)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todos = document.querySelectorAll('body *')

function todosClick(event){ 
    console.log(event.currentTarget.remove())
}

todos.forEach((item) =>{
    item.addEventListener('click', todosClick)
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

const html = document.documentElement

function todosHtml(event){
    if(event.key === 't'){
        document.documentElement.classList.toggle('textogrande');
    }
}
window.addEventListener('keydown', todosHtml)
