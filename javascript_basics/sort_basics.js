
//string sort
let fruits = ["banana", "mango","pomogranate","papaya"]

fruits.sort()
console.log(fruits)


//number sort using sort inbuilt function is not much useful

var nums =[12,56,33,88,11,3]
console.log(nums.sort())

//number sorting dascending
console.log(nums.sort((a,b)=>a-b))

//number sorting ascending

console.log(nums.sort((a,b)=>b-a))

