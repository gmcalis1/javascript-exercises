const removeFromArray = function(array1, ...args) {
    const newArray = [];
    array1.forEach((item) => {
        if(!args.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
