//Initialize a function called speedDetector() to hold everything
function speedDetector(){
    //initialize a variable that will take value from the form input
    const speed = document.getElementById("speed").value;

    // initialize a variable that speed
    const limit = 70;

    //declare a variable that holds the number of km/s that results to 1 demerit point
    const increment = 5;
    
    // use if condition to see whether the speed is within the limit
    if (speed <=limit){
            document.getElementById("result").innerHTML= "This speed is okay!";
    }else if(speed > limit){
      // initialize a variable to hold the demerit points, where points are calculated by 
      // finding the difference between the given speed and the limit
      // use math.floor to round down to the nearest whole number
      // if the points are less than 12, return the points 
      // and if the points are more than 12, it should return that the license is suspended.
        let demeritPoints = Math.floor((speed-limit) / increment );
            if(demeritPoints >= 12){
            document.getElementById("result").innerHTML= "Your licence is suspended!";
            }else{
            document.getElementById("result").innerHTML= demeritPoints;
            }
    }
    
}

  

