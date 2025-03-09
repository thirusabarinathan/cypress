const flag = true

//IF LOOP

if (!flag)
{
console.log("condition satisified")
}

else
{
    console.log("condition is not  satisified")
}


//WHILE LOOP

let i = 0
while(i>10) //change i <10 to execute
{
    i++
    console.log(i)
}

//DO WHILE
do
{
    i++
}
while(i>10);
{
console.log(i)
}

//FOR LOOP

for(let k =0;k<10;k++)
{
    console.log(k)
}

//another while loop

let required = true
while(required)
{
    console.log(required)
    required=false
}
console.log("*********")
//from 1 to 10 give me common multiple values of 2 and 5
let n =0
for(let i=1;i<=100;i++)
{
    if(i%2 ==0 && i%5==0)
    {
        n++
        console.log(i)
        if(n==3)
        break
    }
}