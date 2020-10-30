let pTag = document.getElementById("para");
for (i=1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 ) {
        
      pTag.innerHTML += "fizzbuzz";
    
    }else if ( i % 3 === 0 ) {

    pTag.innerHTML += "fizz";
    }else if ( i % 5 === 0 ) {
       
     pTag.innerHTML += "buzz"; 
    } else {
      
      pTag.innerHTML += i;
    }
    pTag.innerHTML += "<br>"
     
}
 