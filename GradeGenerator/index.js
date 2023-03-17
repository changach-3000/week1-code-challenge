function gradeGenerator(){
    // initialize a variable that receives input from the user in the form
    const num = document.getElementById("grade").value;
    // check where the mark falls using the else...if condition
        if (num <40){
            document.getElementById("result").innerHTML="E";
        }else if(num >= 40 && num < 49){
            document.getElementById("result").innerHTML="D";
        }else if(num >=49 && num <=59){
            document.getElementById("result").innerHTML="C";
        }else if(num>=60 && num<=79){
            document.getElementById("result").innerHTML="B";
        }else if(num >79 && num <=100){
            document.getElementById("result").innerHTML="A";
        }else{
            document.getElementById("result").innerHTML="Number cannot exceed 100";
        }
    }
    
    