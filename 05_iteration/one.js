//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);   
}
//element will nit print
// console.log(element);

//printing table
for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop value: ${j} and inner loop ${i}`);
    console.log(i + '*' + j + '=' + i*j);
    
   }    
}
