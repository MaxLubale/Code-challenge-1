let prompt = require('prompt-sync')();
let input = prompt('Enter Basic Salary:')
let pay = parseFloat(input)


function netSalaryCalc(pay){
  if (pay <= 24000) return(pay * 0.1)
  else if(pay <=24001 && pay <=32333) return (pay * 0.25)
  else if(pay <=32334 && pay <= 500000) return (pay * 0.3)
  else if (pay <=500001 && pay <=800000)return (pay * 0.35)
  else if (pay >800000)return (pay * 0.35)
   else return"No Value Inserted!"

}

console.log(netSalaryCalc(50000))


function nhifValue(v){
    if(v <=5999) return 150
    else if(v >=6000 && v <=7999) return 300
    else if(v >=8000 && v <=11999) return 400
    else if(v >=12000 && v <=14999) return 500
    else if(v >=15000 && v <=19999) return 600
    else if(v >=20000 && v <=24999) return 750
    else if(v >=25000 && v <=29999) return 850
    else if(v >=30000 && v <=34999) return 900
    else if(v >=35000 && v <=39999)  return 950
    else if(v >=40000 && v <=44999) return 1000
    else if(v >=45000 && v <=49999) return 1100
    else if(v >=50000 && v <=59000) return 1200
    else if(v >=60000 && v <=69999) return 1300
    else if(v >=70000 && v <=79000) return 1400
    else if(v >=80000 && v <=89000) return 1500
    else if(v >=90000 && v <=99000) return 1600
    else if(v >=100000 && v >100000) return 1700 
    else return "Insert Value!"
} 

console.log(nhifValue(6000))

function nssf(){
   const pension= (pay * 0.6)
   return pension

}
console.log(nssf())
 
