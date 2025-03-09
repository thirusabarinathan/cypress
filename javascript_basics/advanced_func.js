//example of reduce function

let marks = [22,33,44,55,66]
var sum =0
console.log("###########")
console.log("normal function")
for (let index = 0; index < marks.length; index++) {
    console.log(marks[index])
    sum = sum +marks[index]
    
}
console.log(sum)


//reduce - method used to perform all the opertaions on an array
console.log("################")
console.log("reduce function")
var sum = 0
//reduce
let total = marks.reduce((sum,marks)=>sum+marks,0)
console.log(total)

var scores  = [12,13,14,16]

//filter example function

console.log("###########")
console.log("normal function")
var evenscores =[]
for (let index = 0; index < scores.length; index++) {
    if(scores[index] %2==0)
    {
        evenscores.push(scores[index])
    }
    
}
console.log(evenscores)
console.log("################")
console.log("filter function")
let newfilterevenscores =scores.filter(scores=>scores%2==0)
console.log(newfilterevenscores)


//Map  function
//map will modify each and every value of array to new value
//mapping from one value to new value
//create new array with even number of scores and multiply with 3

//[12,14,16]  => [36,42,48]
console.log("######")
console.log("Map function")

let mappedarray = newfilterevenscores.map(score=>score*3)
console.log(mappedarray)

//create new array with even number of scores and multiply with 3 and sum them
//using filter+reduce
let totalval = mappedarray.reduce((total,val)=>total+val,0)
console.log(totalval)

//chaining

var scores1 =[12,13,14,16]
let somevalue = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,vale)=>sum+vale)
console.log(somevalue)