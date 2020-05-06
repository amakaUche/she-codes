fibonacci = function( num ) {
    
    for(var fibSequence = [0, 1], 
        
        i = 0, j = 1, k = 0;
        
        k < num;
        i = j, j = x, k++ ){
        
            x = i+j;
        
            fibSequence.push(x);
    }
    console.log(fibSequence)
}
fibonacci(15)