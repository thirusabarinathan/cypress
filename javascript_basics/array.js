//array decalaration
var marks =Array(6)
var marks = new Array(20,40,35,12,37,100)
var marks = [20,40,35,12,37,100]
console.log(marks.length)
marks.push(65)
console.log(marks)
marks.pop()
console.log(marks)
marks.unshift(500)
console.log(marks.indexOf(100))
//500 id present in the array - search inside an array
console.log(marks.includes(5200))

//convert the master array to sub arrayas

var scores = [20,40,35,12,37,100]
subscores = scores.slice(2,5)
console.log(subscores)
var sum =0

for (let index = 0; index < scores.length; index++) {
    console.log(scores[index])
    sum = sum +scores[index]
    
}
console.log(sum)


//reduce - method used to perform all the opertaions on an array
let total = scores.reduce((sum, totalmarks)=>sum+totalmarks,0)
console.log(total)