module.exports = function toReadable (number) {

let Obj1={0:"zero", 1:"one", 2:"two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine"};
let Obj3={10:"ten",11:"eleven", 12:"twelve", 13:"thirteen", 14:"fourteen", 15:"fifteen", 16:"sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen"};
let Obj2={10:"ten",20:"twenty", 30:"thirty", 40:"forty", 50:"fifty", 60:"sixty", 70:"seventy", 80:"eighty", 90:"ninety"};

if (number<10){
let num0 = number.toString();
for(let property1 in Obj1){
    if (property1 === num0)
     return(Obj1[num0]); 
};
return(Obj1[num0]);
} else if (number>=10 && number<20){
let num3 = number.toString();
for(let property2 in Obj3){
    if (property2 === num3)
     return(Obj3[num3]); 
};
} else if ( number>=20 && number<100 && number%10===0){
     let num7 = (Math.floor(number/10)*10).toString();
     for (let property in Obj2){
      if (property === num7)
       return(`${Obj2[num7]}`);
        }
} else if (number>=20 && number<100){
       let num1 = (Math.floor(number/10)*10).toString();
       let num2 = (number%10).toString();
       for(let property in Obj2){
         for (let property1 in Obj1){
          if (property1 === num2)
            break;
           }
       if (property === num1)
       return(`${Obj2[num1]} ${Obj1[num2]}`);
        }

} else if (number>=100&&number<1000&&number%100===0){
    let num8 = (Math.floor(number/100)).toString();
     for (let property1 in Obj1){
      if (property1 === num8)
       return(`${Obj1[num8]} hundred`);
     }
  
} else if(number>=100&&number<1000&&Math.floor((number%100)/10)*10===0){
    let num9 = Math.floor(number/100).toString();
    let num10 = ((number%100)%10).toString();
    for(let property1 in Obj1){
    for (let property1 in Obj1){
      if (property1 === num10)
       break;
    }   
    if (property1 === num9)
   return(`${Obj1[num9]} hundred ${Obj1[num10]}`);
 };
      
}else if (number>=100&&number<1000&&(number%100)%10===0){
  let num11 = Math.floor(number/100).toString();
  let num12 = (Math.floor((number%100)/10)*10).toString();
  
  for(let property1 in Obj1){
   for(let property in Obj2){
    if (property === num12)
      break;
  }
    if (property1 === num11)
 return(`${Obj1[num11]} hundred ${Obj2[num12]}`);
 };  
} else if (number>=100&&number<1000&&Math.floor((number%100)/10)===1){
  let num13 = Math.floor(number/100).toString();
  let num14 = (number%100).toString();
  for(let property1 in Obj1){
   for(let property2 in Obj3){
    if (property2 === num14)
      break;
  }
    if (property1 === num13)
    return(`${Obj1[num13]} hundred ${Obj3[num14]}`);
 }  
}else if (number>=100&&number<1000){
let num4 = Math.floor(number/100).toString();
let num5 = (Math.floor((number%100)/10)*10).toString();
let num6 = ((number%100)%10).toString();

for(let property1 in Obj1){
  for(let property in Obj2){
    for (let property1 in Obj1){
      if (property1 === num6)
       break;
    }
    if (property === num5)
      break;
  }
    if (property1 === num4)
return(`${Obj1[num4]} hundred ${Obj2[num5]} ${Obj1[num6]}`);
 };
}     
             
}
