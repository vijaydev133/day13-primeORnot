function primeOrNot(x){
    let flag = 0;
    if(x == 1){
        console.log("1 is nor prime or composite number");
    }
    else{
        for(let i = 2; i < x; i++){
            if( x % i == 0){
                flag = 1;
                break;
            }
            
        }
        if(flag == 0){
            console.log("prime number");
        }
        else{
            console.log("not a prime number");
        }
    }
}

primeOrNot(17);