const listaDeCalculos = document.getElementById("listaDeCalculo")
const resultado = document.getElementById("resuldado")
const limpar = document.getElementById("limpar")

const maisOuMenos = document.getElementById("maisOuMenos")
const porcentagem = document.getElementById("porcentagem")

const divisao = document.getElementById("divisao")
const sete = document.getElementById("sete")
const oito =  document.getElementById("oito")
const nove = document.getElementById("nove")
const multiplicacao = document.getElementById("multiplicacao")

const quatro = document.getElementById("quatro")
const cinco = document.getElementById("cinco")
const seis = document.getElementById("seis")
const subtracao = document.getElementById("subtracao")

const um = document.getElementById("um")
const dois = document.getElementById("dois")
const tres = document.getElementById("tres")
const adicao = document.getElementById("adicao")

const ponto = document.getElementById("ponto")
const zero = document.getElementById("zero")
const deletar = document.getElementById("deletar")

const calcular = document.getElementById("calcular")
 
let numeros = [];

const calculadora = {
    
    zero: zero.addEventListener("click",()=> {
        numeros.push(0)
        console.log(numeros)
    }),
    um: um.addEventListener("click",()=> {
        numeros.push(1)
        console.log(numeros)
    }),
    dois: dois.addEventListener("click",()=> {
        numeros.push(2)
        console.log(numeros)
    }),
    tres: tres.addEventListener("click",()=> {
        numeros.push(3)
        console.log(numeros)
    }),
    quatro: quatro.addEventListener("click",()=> {
        numeros.push(4)
        console.log(numeros)
    }),
    cinco: cinco.addEventListener("click",()=> {
        numeros.push(5)
        console.log(numeros)
    }),
    seis: seis.addEventListener("click",()=> {
        numeros.push(6)
        console.log(numeros)
    }),
    sete: sete.addEventListener("click",()=> {
        numeros.push(7)
        console.log(numeros)
    }),
    oito: oito.addEventListener("click",()=> {
        numeros.push(8)
        console.log(numeros)
    }),
   nove: nove.addEventListener("click",()=> {
        numeros.push(9)
        console.log(numeros)
    }),
    porcentagem: porcentagem.addEventListener("click",()=> {
        numeros.push(`/100*`)
        console.log(numeros)
    }),
    adicao: adicao.addEventListener("click",()=> {
        numeros.push(`+`)
        console.log(numeros)
    }),
   subtracao:subtracao.addEventListener("click",()=> {
        numeros.push(`-`)
        console.log(numeros)
    }),
    calcular: calcular.addEventListener("click",()=> {
       const newNumeros = numeros.join("")
        
        console.log(eval(newNumeros))
    }),
    divisao:divisao.addEventListener("click",()=> {
        numeros.push(`/`)
        console.log(numeros)
    }),
    ponto: ponto.addEventListener("click",()=> {
        numeros.push(`.`)
        console.log(numeros)
    }),
    deletar : deletar.addEventListener("click",()=> {
        numeros.pop()
       
        console.log(numeros)
    }),
    multiplicacao : multiplicacao.addEventListener("click",()=> {
        numeros.push(`*`)
        console.log(numeros)
    }),
    maisOuMenos : maisOuMenos.addEventListener("click",()=> {
        numeros.push(`+-`)
        console.log(numeros)
    }),
    clier :limpar.addEventListener("click",()=> {
        numeros = []
        console.log(numeros)
    }),
    }
   
