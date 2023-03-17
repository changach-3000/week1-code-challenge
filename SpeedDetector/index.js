//Initialize a function called speedDetector() to hold everything
function speedDetector(){
    //initialize a variable that will take input from the form , and take its value
    const speed = document.getElementById("speed").value;

    // initialize a variable to determine the appropriate speed
    const limit = 70;
    const increment = 5;
    
    if (speed <=limit){
            document.getElementById("result").innerHTML= "This speed is okay!";
    }else if(speed > limit){
        let points = Math.floor((speed-limit) / increment );
            if(points >= 12){
            document.getElementById("result").innerHTML= "Your licence is suspended!";
            }else{
            document.getElementById("result").innerHTML= ("Points: ",points);
            }
    }
   
}




    
    // if the speed exceeds 70, find out by how much it exceeds the limit, 
    // then for every 5 it exceeds, the car gets 1 demerit point
    //use math.floor to round down to the nearest whole number

    //initialize a variable to hold the incrementation in fives
  

