const sumAll = function(num1, num2) {
    let high;
    let low;
    let answer = 0;
    if(typeof num1 != 'number' || typeof num2 != 'number')
    {
        return 'ERROR';
    }
    if(num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    
    if(num1 > num2){
        high = num1;
        low = num2;
        answer = low;
    }
    else{
        high = num2;
        low = num1;
        answer = low;
    }
    
    for(i = low; i < high; i++){
        answer = answer + (low + 1);
        low = low + 1;
    }
    return answer;
};

// Do not edit below this line
module.exports = sumAll;
