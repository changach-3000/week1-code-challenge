// Initialize variables basic benefits that take values from the form and calculating the gross salary
const basic = document.getElementById("basic").value;
const benefits = document.getElementById("benefits").value;
let grossSalary = basic + benefits;

// Create a main function that holds all the other functions
function main(){
  //funtion paye() that calculates the paye tax
    function paye(){
        if(grossSalary <= 24000){
            const output =  grossSalary * 0.1;
            document.getElementById('payee').innerHTML = output;
        }else if(grossSalary >24000 && grossSalary < 32333){
            const output= grossSalary * 0.25;
            document.getElementById('payee').innerHTML = output;
        }else if (grossSalary >32333){
            const output = grossSalary * 0.3;
            document.getElementById('payee').innerHTML = output;
        }else{
            alert("Enter valid input");
        }
        
    }
    // function that calculates the nhif rate
    function nhif(){
        const nhifRates = [
            { min: 0, max: 5999, amount: 150 },
            { min: 6000, max: 7999, amount: 300 },
            { min: 8000, max: 11999, amount: 400 },
            { min: 12000, max: 14999, amount: 500 },
            { min: 15000, max: 19999, amount: 600 },
            { min: 20000, max: 24999, amount: 750 },
            { min: 25000, max: 29999, amount: 850 },
            { min: 30000, max: 34999, amount: 900 },
            { min: 35000, max: 39999, amount: 950 },
            { min: 40000, max: 44999, amount: 1000},
            { min: 45000, max: 49999, amount: 1100},
            { min: 50000, max: 59999, amount: 1200},
            { min: 60000, max: 69999, amount: 1300},
            { min: 70000, max: 79999, amount: 1400},
            { min: 80000, max: 89999, amount: 1500},
            { min: 90000, max: 99999, amount: 1600},
        ];
            for (let i = 0; i < nhifRates.length; i++) {
              const rateObj = nhifRates[i];
              if (grossSalary >= rateObj.min && grossSalary <= rateObj.max) {
                document.getElementById("nhif").innerHTML= rateObj.amount;
              }
            }
    }
   
        // function that calculates nssf rate
     function nssf(){
            const lowerBound = 6000;
            const upperBound = 18000;
            const rate = 0.06;
          
            if (grossSalary < lowerBound) {
              document.getElementById("nssf").innerHTML= grossSalary * rate;
            } else if (grossSalary >= lowerBound && grossSalary <= upperBound) {
              document.getElementById("nssf").innerHTML= upperBound * rate;
            } 
          }

        // function that calculates the net pay by 
        // doing deductions of nhif,nssf and paye taxes from the gross salary
          const netsal = function(){
            let netsalary = grossSalary - nssf - nhif ;
            document.getElementById("net").innerHTML = netsalary;
          }
          // call the functions 
          paye();
          nhif();
          nssf();
          netsal();
        }
        //call the main function
        main();