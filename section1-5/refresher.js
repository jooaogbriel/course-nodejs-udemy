let name = 'João'
let age = 20
let hasHobbies = true

// const age = 30 ---> Error, por que CONST não altera seu valor, imutável.

age = 30 // ---> altera seu valor pois está definido como LET

const apresentationArrow = (userName, userAge, userHasHobbies) => {
    // Example arrow faunction
}

function apresentation(userName, userAge, userHasHobbies){
    return `name: ${userName} has: ${userAge} years old, and has honnie? ${userHasHobbies}`
}

const sum = (a,b) => {
    return a+b
}
// função com retorno Unico e simples
const sumSimple = (a,b) => a + b

var result = apresentation(name, age, hasHobbies)
console.log(result)
console.log(name)

//Objects
// FUNCÓES REGULARES TEM SEU PRÓPRIO THIS
const person = {
    name:'João',
    age:20,
    greet: () => { // this não está vinculado ao objeto person
        console.log('hi, I am ' + this.name)
    },
    greetQueFunciona(){ // this está vinculado ao objeto person
        console.log('hi, I am ' + this.name)
    },
    greeQueFunciona2: function() { // this está vinculado ao objeto person
        console.log('hi, I am ' + this.name)
    },
}
// Desestruturação de Objeto

const personDes = ({name}) => {
    console.log('nome des: ', name)
}
personDes(person)

// const { name, age } = person
// console.log(name, age)

const personName = (personData) => {
    return personData.name
}
console.log('name Person: ', personName(person))


// Método Map => retorna um novo array
const hobbies = ['Coding', 'Cooking']
console.log(hobbies.map(hobbis => `Hobbies: ${hobbis}`))
console.log(hobbies)


// imutabilidade -> cópia do array, mas sem alterar o original
const newArray = [...hobbies, 'Sports'] // Spread Operator
console.log('new: ', newArray)

// OR
// Slice faz a cópia do array
const copiedArray = hobbies.slice()

// Copiando objeto
const copiedPerson = {...person}
console.log(copiedPerson)

// rest operator 
const returnAnyArgs = (...args) => {
    return args // Por si só, já retorna um Array
}
console.log(returnAnyArgs(1,2,3,4))

// Código ASSINCRONO



const getData = callback => {
    setTimeout(()=> {
        callback('Done')
    }, 1500)
}

setTimeout(()=> {
    console.log('await for data')
    getData(text => {
        console.log('texto: ',text)
    })
}, 2000)

console.log(getData)