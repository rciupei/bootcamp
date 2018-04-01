var numbers = [1,5,23,14]
var num2=numbers.filter((x)=>x>10)
var num3 = numbers.reduce((x,y)=>x+y)
console.log(numbers)

var mappedArray = num2.map((x)=> x*2)
console.log(mappedArray)
function three(){
    console.log(3)
}
setTimeout(three,2000)
one()
setTimeout(two,1000)

function two(){
    console.log("2")
}
function one(){
    console.log(1)
}
