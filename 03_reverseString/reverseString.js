const reverseString = function(string) {
    let answer = '';
    
    for(i = string.length + 1; i > 0; i--){
        answer = answer + string.substring(i, i-1);
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
