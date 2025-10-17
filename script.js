//variables & types
//var,let,const
//commonly used-const

const greeting = 'Hello'
// greeting = "hi"
console.log(greeting)


let fullname = "Manisha"
fullname = 24
console.log(fullname)

//const--cannot reassign values to variables
//let--can reassign values

var lastName = 23
lastName= "pk"
console.log(lastName)

//var--can reassign values
//diff between var and let?
//var is function scoped and let is block scoped

var message = 'h'
function example(){
    if(true){
        message = 'hello var'
        console.log(message)
    }
    console.log(message)
}
console.log(message)
example()
//var is function scoped, meaning it belongs to entire function not just if block
//even though message was declared inside the if, its visible everywhere inside the function


function testLet(){
    if(true){
        let Letmessage = "hello let"
        console.log(Letmessage)
    }
   // console.log(Letmessage)
}
testLet()

//let is block scoped, so it exists only inside the {} where it was declared
//outside the block, it doesnt exists, thats why you are getting reference error



function testLet(){
    if(true){
        const constMessage = "hello const"
        console.log(constMessage)
    }
    console.log(constMessage)
}
testLet()

//const is also block scoped


//const constMessage ---this line will error --> const values should be initialised
function testLet(){
    if(true){
        constMessage = "hello const"
        console.log(constMessage)
    }
    console.log(constMessage)
}
testLet()